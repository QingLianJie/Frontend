import useSWR from 'swr'
import { BASE_API_URL } from '../data/api-config'
import fetcher from '../utils/fetcher'

const useDailyReport = () => {
  const baseURL = BASE_API_URL
  const { data, error } = useSWR(`${baseURL}/api/report/task`, fetcher, {
    revalidateOnFocus: false,
    revalidateOnReconnect: false,
  })

  return {
    tasks: data as IDailyReport[],
    isLoading: !error && !data,
    isError: !!error,
  }
}

export default useDailyReport
