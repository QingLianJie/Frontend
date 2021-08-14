import useSWR from 'swr'
import fetcher from '../utils/fetcher'

const useCOVID19ReportStatus = () => {
  const baseURL = process.env.NEXT_PUBLIC_BASE_API_URL
  const { data, error } = useSWR(`${baseURL}/api/pingan/daily`, fetcher)

  return {
    status: data as ICOVID19ReportStatus,
    isLoading: !error && !data,
    isError: !!error,
  }
}

export default useCOVID19ReportStatus
