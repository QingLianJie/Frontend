import useSWR from 'swr'
import { BASE_API_URL } from '../data/api-config'
import fetcher from '../utils/fetcher'

const useTeachingEvaluation = () => {
  const baseURL = BASE_API_URL
  const { data, error } = useSWR(`${baseURL}/api/pingjiao`, fetcher, {
    revalidateOnFocus: false,
    revalidateOnReconnect: false,
  })

  return {
    todos: data as ITeachingEvaluation,
    isLoading: !error && !data,
    isError: !!error,
  }
}

export default useTeachingEvaluation
