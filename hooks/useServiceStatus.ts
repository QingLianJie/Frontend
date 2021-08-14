import useSWR from 'swr'
import fetcher from '../utils/fetcher'

const useServiceStatus = () => {
  const baseURL = process.env.NEXT_PUBLIC_BASE_API_URL
  const { data, error } = useSWR(`${baseURL}/api/test/result`, fetcher)

  return {
    status: data as IServiceStatus,
    isLoading: !error && !data,
    isError: !!error,
  }
}

export default useServiceStatus
