export const calcChartData = (
  info: ICourseInfo,
  time?: string
): CourseStatChartData[] => {
  const type = info.assessment_method
  const data = info.statistics[time || 'all']

  const arr = []
  if (type === '考试') {
    let lastIndex = 0
    for (const [score, count] of Object.entries(data.exam)) {
      const currentIndex = Number(score)
      if (currentIndex > lastIndex) {
        for (let i = lastIndex; i < currentIndex; i++)
          arr.push({ score: i.toString(), count: 0 })
      }
      lastIndex = currentIndex + 1
      arr.push({ score: score, count: count })
    }
    for (let i = lastIndex; i <= 100; i++)
      arr.push({ score: i.toString(), count: 0 })
  } else if (type === '考查') {
    for (const [score, count] of Object.entries(data.test)) {
      arr.push({ score: score, count: count })
    }
  }

  return arr
}
