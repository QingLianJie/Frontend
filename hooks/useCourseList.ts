import useSWR from 'swr'
import fetcher from '../utils/fetcher'

const useCourseList = (query: string) => {
  const baseURL = process.env.NEXT_PUBLIC_BASE_API_URL

  const { data, error } = useSWR(`${baseURL}/api/courses?${query}`, fetcher)

  return {
    courseList: data as ICourseList,
    isLoading: !error && !data,
    isError: !!error,
  }
}

export default useCourseList
