import useSWR from 'swr'
import fetcher from '../../utils/fetcher'

const useRecentCourseComments = () => {
  const baseURL = process.env.NEXT_PUBLIC_BASE_API_URL
  const { data, error } = useSWR(`${baseURL}/api/recent/comments`, fetcher)

  return {
    comments: data as ICourseComment[],
    isLoading: !error && !data,
    isError: !!error,
  }
}

export default useRecentCourseComments
