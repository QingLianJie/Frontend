import useSWR from 'swr'
import { BASE_API_URL } from '../data/api-config'
import fetcher from '../utils/fetcher'

const useCOVID19Report = () => {
  const baseURL = BASE_API_URL
  const { data, error } = useSWR(`${baseURL}/api/pingan/tasks`, fetcher, {
    revalidateOnFocus: false,
    revalidateOnReconnect: false,
  })

  return {
    tasks: data as ICOVID19Report[],
    isLoading: !error && !data,
    isError: !!error,
  }
}

export default useCOVID19Report
