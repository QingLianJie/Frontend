import useSWR from 'swr'
import { BASE_API_URL } from '../data/api-config'
import fetcher from '../utils/fetcher'

const useCOVID19ReportStatus = () => {
  const baseURL = BASE_API_URL
  const { data, error } = useSWR(`${baseURL}/api/pingan/daily`, fetcher)

  return {
    status: data as ICOVID19ReportStatus,
    isLoading: !error && !data,
    isError: !!error,
  }
}

export default useCOVID19ReportStatus
