import { timelineMerge } from '../utils/merge'
import useSWR from 'swr'
import fetcher from '../utils/fetcher'

const useRecentCourseGrades = () => {
  const baseURL = process.env.NEXT_PUBLIC_BASE_API_URL
  const { data, error } = useSWR(`${baseURL}/api/recent/grade/courses`, fetcher)

  return {
    grades: data as IRecentCourseGrade[],
    isLoading: !error && !data,
    isError: !!error,
  }
}

const useRecentCourseComments = () => {
  const baseURL = process.env.NEXT_PUBLIC_BASE_API_URL
  const { data, error } = useSWR(`${baseURL}/api/recent/comments`, fetcher)

  return {
    comments: data as ICourseComment[],
    isLoading: !error && !data,
    isError: !!error,
  }
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
      timeline: timelineMerge(comments, grades),
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
