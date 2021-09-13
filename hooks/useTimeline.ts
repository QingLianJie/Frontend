import { timelineMerge } from '../utils/merge'
import useSWR from 'swr'
import fetcher from '../utils/fetcher'
import { BASE_API_URL } from '../data/api-config'

const useRecentCourseGrades = () => {
  const baseURL = BASE_API_URL
  const { data, error } = useSWR(
    `${baseURL}/api/recent/grade/courses`,
    fetcher,
    {
      revalidateOnFocus: false,
      revalidateOnReconnect: false,
    }
  )

  return {
    grades: data as IRecentCourseGrade[],
    isLoading: !error && !data,
    isError: !!error,
  }
}

const useRecentCourseComments = () => {
  const baseURL = BASE_API_URL
  const { data, error } = useSWR(`${baseURL}/api/recent/comments`, fetcher, {
    revalidateOnFocus: false,
    revalidateOnReconnect: false,
  })

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
