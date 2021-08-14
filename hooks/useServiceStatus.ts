import useSWR from 'swr'
import { BASE_API_URL } from '../data/api-config'
import fetcher from '../utils/fetcher'

const useServiceStatus = () => {
  const baseURL = BASE_API_URL
  const { data, error } = useSWR(`${baseURL}/api/test/result`, fetcher)

  return {
    status: data as IServiceStatus,
    isLoading: !error && !data,
    isError: !!error,
  }
}

export default useServiceStatus
