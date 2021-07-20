import useSWR from 'swr'
import fetcher from '../utils/fetcher'

const useProfile = (username: string) => {
  const baseURL = process.env.NEXT_PUBLIC_BASE_API_URL
  const { data, error } = useSWR(`${baseURL}/api/profile/${username}`, fetcher)

  if (error && error.status === 404) {
    return { isError: true, isNotFound: true }
  }

  return {
    profile: data as IUser,
    isLoading: !error && !data,
    isError: !!error,
  }
}

export default useProfile
