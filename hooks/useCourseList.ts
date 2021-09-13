import useSWR from 'swr'
import { BASE_API_URL } from '../data/api-config'
import fetcher from '../utils/fetcher'

const useCourseList = (query: string) => {
  const baseURL = BASE_API_URL

  const { data, error } = useSWR(`${baseURL}/api/courses?${query}`, fetcher, {
    revalidateOnFocus: false,
    revalidateOnReconnect: false,
  })

  return {
    courseList: data as ICourseList,
    isLoading: !error && !data,
    isError: !!error,
  }
}

export default useCourseList
