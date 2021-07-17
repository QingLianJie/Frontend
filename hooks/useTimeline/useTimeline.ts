import useRecentCourseComments from './useRecentCourseComments'
import useRecentCourseGrades from './useRecentCourseGrades'

const merge = (
  comments: ICourseComment[],
  grades: IRecentCourseGrade[]
): (ICourseComment | IRecentCourseGrade)[] => {
  const arr = [...comments, ...grades]
  return arr.sort(
    (a, b) => new Date(b.created).getTime() - new Date(a.created).getTime()
  )
}

const useTimeline = () => {
  const {
    comments,
    isLoading: isCommentsLoading,
    isError: isCommentsError,
  } = useRecentCourseComments()

  const {
    grades,
    isLoading: isGradesLoading,
    isError: isGradesError,
  } = useRecentCourseGrades()

  if (
    !(isCommentsLoading || isGradesLoading) &&
    !(isCommentsError || isGradesError)
  ) {
    return {
      timeline: merge(comments, grades),
      isLoading: isCommentsLoading || isGradesLoading,
      isError: isCommentsError || isGradesError,
    }
  }

  return {
    timeline: [],
    isLoading: isCommentsLoading || isGradesLoading,
    isError: isCommentsError || isGradesError,
  }
}

export default useTimeline
