import useSWR from 'swr'
import fetcher from '../utils/fetcher'

const useDailyReport = () => {
  const baseURL = process.env.NEXT_PUBLIC_BASE_API_URL
  const { data, error } = useSWR(`${baseURL}/api/report/task`, fetcher)

  return {
    tasks: data as IDailyReport[],
    isLoading: !error && !data,
    isError: !!error,
  }
}

export default useDailyReport
