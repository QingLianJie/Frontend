export const timelineMerge = (
  comments: ICourseComment[],
  grades: IRecentCourseGrade[]
): (ICourseComment | IRecentCourseGrade)[] => {
  const arr = [...comments, ...grades]
  return arr.sort(
    (a, b) => new Date(b.created).getTime() - new Date(a.created).getTime()
  )
}
