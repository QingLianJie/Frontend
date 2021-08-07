import useSWR from 'swr'
import fetcher from '../utils/fetcher'

const useTask = () => {
  const baseURL = process.env.NEXT_PUBLIC_BASE_API_URL
  const { data, error } = useSWR(`${baseURL}/api/tasks`, fetcher)

  return {
    tasks: data as ITask[],
    isLoading: !error && !data,
    isError: !!error,
  }
}

export default useTask
