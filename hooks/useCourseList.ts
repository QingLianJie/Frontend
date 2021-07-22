import useSWR from 'swr'
import fetcher from '../utils/fetcher'

const useCourseList = (page?: number) => {
  const baseURL = process.env.NEXT_PUBLIC_BASE_API_URL
  const { data, error } = useSWR(
    `${baseURL}/api/courses?page=${page || 1}`,
    fetcher
  )

  return {
    courseList: data as ICourseList,
    isLoading: !error && !data,
    isError: !!error,
  }
}

export default useCourseList
