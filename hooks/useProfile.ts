import useSWR from 'swr'
import { BASE_API_URL } from '../data/api-config'
import fetcher from '../utils/fetcher'

const useProfile = (username: string) => {
  const baseURL = BASE_API_URL
  const { data, error } = useSWR(
    `${baseURL}/api/profile/${username}`,
    fetcher,
    {
      revalidateOnFocus: false,
      revalidateOnReconnect: false,
    }
  )

  if (error && error.status === 404) {
    return { isError: true, isNotFound: true }
  }

  return {
    profile: data as IProfile,
    isLoading: !error && !data,
    isError: !!error,
  }
}

export default useProfile
