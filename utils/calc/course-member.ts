export const calcCourseMember = (
  info: ICourseInfo,
  type: 'test' | 'exam',
  time?: string
) => {
  const data = info.statistics[time || 'all']
  if (type === 'test') {
    return Object.values(data.test).reduce((a, b) => a + b, 0)
  } else if (type === 'exam') {
    return Object.values(data.exam).reduce((a, b) => a + b, 0)
  }
}
