import useSWR from 'swr'
import fetcher from '../utils/fetcher'

const useCOVID19Report = () => {
  const baseURL = process.env.NEXT_PUBLIC_BASE_API_URL
  const { data, error } = useSWR(`${baseURL}/api/pingan/tasks`, fetcher)

  return {
    tasks: data as ICOVID19Report[],
    isLoading: !error && !data,
    isError: !!error,
  }
}

export default useCOVID19Report
