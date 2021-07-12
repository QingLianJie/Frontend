import useSWR from 'swr'
import fetcher from '../utils/fetcher'

const useUser = (initialData?: any) => {
  const baseURL = process.env.NEXT_PUBLIC_BASE_API_URL

  const { data, error } = useSWR(`${baseURL}/rest-auth/user/`, fetcher, {
    initialData: initialData,
  })

  return {
    user: data as IUser,
    isLoading: !error && !data,
    isError: !!error,
  }
}

export default useUser
