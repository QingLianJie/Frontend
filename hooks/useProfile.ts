import useSWR from 'swr'
import fetcher from '../utils/fetcher'
import useUser from './useUser'

const baseURL = process.env.NEXT_PUBLIC_BASE_API_URL

const useProfile = (name: string) => {
  const { user, isLoading, isError } = useUser()
  const { data, error } = useSWR(`${baseURL}/api/user/${name}`, fetcher)

  if (!isLoading) {
    if (!isError) {
      return { profile: user as IProfile, isLoading: false, isMe: true }
    }
  }

  return {
    profile: data as IProfile,
    isLoading: !error && !data,
    isMe: false,
  }
}

export default useProfile
