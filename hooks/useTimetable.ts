import useSWR from 'swr'
import { BASE_API_URL } from '../data/api-config'
import fetcher from '../utils/fetcher'

const useTimetable = () => {
  const baseURL = BASE_API_URL
  const { data, error } = useSWR(`${baseURL}/api/my/timetable`, fetcher, {
    revalidateOnFocus: false,
    revalidateOnReconnect: false,
  })

  return {
    timetable: data as ITimetableAPI,
    isLoading: !error && !data,
    isError: !!error,
  }
}

export default useTimetable
