import useSWR from 'swr'
import { BASE_API_URL } from '../data/api-config'
import fetcher from '../utils/fetcher'

const useUser = () => {
  const baseURL = BASE_API_URL
  const { data, error } = useSWR(`${baseURL}/api/user`, fetcher, {
    shouldRetryOnError: false,
    revalidateOnFocus: false,
    revalidateOnReconnect: false,
  })

  if (error && error.status === 404) {
    return { isError: true, isNotFound: true }
  }

  return {
    user: data as IUser,
    isLoading: !error && !data,
    isError: !!error,
  }
}

export default useUser
