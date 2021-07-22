import useSWR from 'swr'
import fetcher from '../utils/fetcher'

const useCourse = (id?: string) => {
  const baseURL = process.env.NEXT_PUBLIC_BASE_API_URL
  const { data, error } = useSWR(`${baseURL}/api/course/${id}`, fetcher)

  return {
    courseInfo: data as ICourseInfo,
    isLoading: !error && !data,
    isError: !!error,
  }
}

export default useCourse
