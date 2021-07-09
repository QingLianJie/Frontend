import useSWR from 'swr'
import { API_URL_BASE } from '../utils/const'
import fetcher from '../utils/fetcher'

const useUser = (initialData?: any) => {
  const { data, error } = useSWR(`${API_URL_BASE}/rest-auth/user/`, fetcher, {
    initialData: initialData,
  })

  return {
    user: data as IUser,
    isLoading: !error && !data,
    isError: !!error,
  }
}

export default useUser
