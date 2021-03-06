export const calcChartData = (
  info: ICourseInfo,
  type: 'test' | 'exam',
  time?: string
): CourseStatChartData[] => {
  const data = info.statistics[time || 'all']
  const total = data?.total || 0

  const arr: CourseStatChartData[] = []
  if (!data) return arr

  if (type === 'exam') {
    // 考试课
    let lastIndex = 0
    for (const [score, count] of Object.entries(data.exam)) {
      const currentIndex = Number(score)
      if (currentIndex > lastIndex) {
        for (let i = lastIndex; i < currentIndex; i++)
          arr.push({ score: i.toString(), count: 0, rate: '0%' })
      }
      lastIndex = currentIndex + 1
      arr.push({
        score: score,
        count: count,
        rate: ((count / total) * 100).toFixed(2) + '%',
      })
    }
    for (let i = lastIndex; i <= 100; i++)
      arr.push({ score: i.toString(), count: 0, rate: '0%' })
  } else {
    // 考查课
    const types = ['不及格', '及格', '中等', '良好', '优秀']
    types.forEach(type => arr.push({ score: type, count: 0, rate: '0%' }))
    for (const [score, count] of Object.entries(data.test)) {
      const t = arr.find(a => a.score === score)
      if (t) {
        t.count = count
        t.rate = ((count / total) * 100).toFixed(2) + '%'
      }
    }
  }

  return arr
}
