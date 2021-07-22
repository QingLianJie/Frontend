import useSWR from 'swr'
import fetcher from '../utils/fetcher'

const useCourseList = (id?: string) => {
  const baseURL = process.env.NEXT_PUBLIC_BASE_API_URL
  const { data, error } = useSWR(`${baseURL}/api/courses/${id}`, fetcher)

  return {
    courseInfo: data as ICourseInfo,
    isLoading: !error && !data,
    isError: !!error,
  }
}

export default useCourseList
