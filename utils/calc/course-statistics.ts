export const calcRate = (info: ICourseInfo, time?: string): CourseInfoRate => {
  const data = info.statistics[time || 'all']
  const all = info.statistics['all']

  const defaultResult = {
    key: time || 'all',
    excellent: { rate: null, count: null },
    pass: { rate: null, count: null },
    fail: { rate: null, count: null },
  }

  if (!data || data.total === 0) return defaultResult
  const total = data.total

  let excellent = 0
  let fail = 0

  if (Object.keys(all.exam).length !== 0) {
    for (const [score, count] of Object.entries(data.exam)) {
      if (Number(score) < 60) {
        fail += count
      }

      if (Number(score) >= 90) {
        excellent += count
      }
    }
  } else {
    excellent = data.test['优秀'] || 0
    fail = data.test['不及格'] || 0
  }

  const formatter = (d: number) => ((d / total) * 100).toFixed(2) + '%'

  return {
    key: time || 'all',
    excellent: { rate: formatter(excellent), count: excellent },
    pass: {
      rate: formatter(total - fail),
      count: total - fail,
    },
    fail: { rate: formatter(fail), count: fail },
  }
}
