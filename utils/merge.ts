export const timelineMerge = (
  comments: ICourseComment[],
  grades: IRecentCourseGrade[]
): (ICourseComment[] | IRecentCourseGrade[])[] => {
  const arr = [...comments, ...grades]
  const ans = []
  let commentsGroup: ICourseComment[] = []
  let gradesGroup: IRecentCourseGrade[] = []

  arr
    .sort(
      (a, b) => new Date(b.created).getTime() - new Date(a.created).getTime()
    )
    .forEach(a => {
      if (a.hasOwnProperty('user')) {
        if (gradesGroup.length !== 0) {
          ans.push(gradesGroup)
          gradesGroup = []
        }
        commentsGroup.push(a as ICourseComment)
      } else {
        if (commentsGroup.length !== 0) {
          ans.push(commentsGroup)
          commentsGroup = []
        }
        gradesGroup.push(a as IRecentCourseGrade)
      }
    })

  if (gradesGroup.length !== 0) {
    ans.push(gradesGroup)
    gradesGroup = []
  }

  if (commentsGroup.length !== 0) {
    ans.push(commentsGroup)
    commentsGroup = []
  }

  return ans
}
