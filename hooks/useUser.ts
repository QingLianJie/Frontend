import useSWR from 'swr'
import { API_URL_BASE } from '../utils/const'

const fetcher = (url: string) =>
  fetch(url, { mode: 'cors', credentials: 'include' }).then(res => {
    if (!res.ok) throw new Error(res.statusText)
    return res.json()
  })

const useUser = () => {
  const { data, error } = useSWR(`${API_URL_BASE}/rest-auth/user/`, fetcher)

  return {
    user: data as IUser,
    isLoading: !error && !data,
    isError: !!error,
    isFinished: !error && !!data,
  }
}

export default useUser
