import useSWR from 'swr'
import { BASE_API_URL } from '../data/api-config'
import fetcher from '../utils/fetcher'

const useTask = () => {
  const baseURL = BASE_API_URL
  const { data, error } = useSWR(`${baseURL}/api/tasks`, fetcher)

  return {
    tasks: data as ITask[],
    isLoading: !error && !data,
    isError: !!error,
  }
}

export default useTask
