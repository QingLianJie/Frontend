import useSWR from 'swr'
import fetcher from '../utils/fetcher'

const useDailyReportStatus = () => {
  const baseURL = process.env.NEXT_PUBLIC_BASE_API_URL
  const { data, error } = useSWR(`${baseURL}/api/report/daily`, fetcher)

  return {
    status: data as IDailyReportStatus,
    isLoading: !error && !data,
    isError: !!error,
  }
}

export default useDailyReportStatus
