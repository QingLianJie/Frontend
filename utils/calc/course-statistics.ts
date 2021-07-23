export const calcRate = (info: ICourseInfo): CourseInfoRate => {
  const defaultResult = {
    excellent: { rate: null, count: null },
    pass: { rate: null, count: null },
    fail: { rate: null, count: null },
  }

  if (!info) return defaultResult

  const type = info.assessment_method
  const data = info.statistics.all
  const total = data.total

  let excellent = 0
  let fail = 0

  if (type === '考试') {
    for (const [score, count] of Object.entries(data.exam)) {
      if (Number(score) < 60) {
        fail += count
      }

      if (Number(score) >= 90) {
        excellent += count
      }
    }
  } else if (type === '考查') {
    excellent = data.test['优秀'] || 0
    fail = data.test['不及格'] || 0
  }

  const formatter = (d: number) => ((d / total) * 100).toFixed(2) + '%'

  return {
    excellent: { rate: formatter(excellent), count: excellent },
    pass: {
      rate: formatter(total - fail),
      count: total - fail,
    },
    fail: { rate: formatter(fail), count: fail },
  }
}
