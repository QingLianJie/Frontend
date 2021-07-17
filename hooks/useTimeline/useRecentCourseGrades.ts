import useSWR from 'swr'
import fetcher from '../../utils/fetcher'

const useRecentCourseGrades = () => {
  const baseURL = process.env.NEXT_PUBLIC_BASE_API_URL
  const { data, error } = useSWR(`${baseURL}/api/recent/grade/courses`, fetcher)

  return {
    grades: data as IRecentCourseGrade[],
    isLoading: !error && !data,
    isError: !!error,
  }
}

export default useRecentCourseGrades
