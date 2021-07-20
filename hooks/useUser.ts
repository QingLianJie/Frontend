import useSWR from 'swr'
import fetcher from '../utils/fetcher'

const useUser = () => {
  const baseURL = process.env.NEXT_PUBLIC_BASE_API_URL
  const { data, error } = useSWR(
    `${baseURL}/api/user`,
    fetcher,
    { shouldRetryOnError: false }
  )

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
