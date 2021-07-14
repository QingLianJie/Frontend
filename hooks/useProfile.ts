import { useRouter } from 'next/router'
import useSWR from 'swr'
import fetcher from '../utils/fetcher'
import useUser from './useUser'

const baseURL = process.env.NEXT_PUBLIC_BASE_API_URL

const useProfile = (name: string) => {
  const router = useRouter()
  const { user, isLoading, isError, isNotFound } = useUser()
  const { data, error } = useSWR(`${baseURL}/api/user/${name}`, fetcher)

  if (isNotFound || (error && error.status === 404)) {
    router.push('/404')
    return { isLoading: true, isMe: false }
  }

  if (!isLoading) {
    if (!isError) {
      // 如果当前查看页面是本人
      if (user?.pk === data?.pk) {
        return { profile: user as IProfile, isMe: true }
      }
      return { profile: data as IProfile, isMe: false }
    }
  }

  return {
    profile: data as IProfile,
    isLoading: !error && !data,
    isMe: false,
  }
}

export default useProfile
