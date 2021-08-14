import useSWR from 'swr'
import { BASE_API_URL } from '../data/api-config'
import fetcher from '../utils/fetcher'

const useDailyReportStatus = () => {
  const baseURL = BASE_API_URL
  const { data, error } = useSWR(`${baseURL}/api/report/daily`, fetcher)

  return {
    status: data as IDailyReportStatus,
    isLoading: !error && !data,
    isError: !!error,
  }
}

export default useDailyReportStatus
