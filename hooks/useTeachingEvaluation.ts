import useSWR from 'swr'
import fetcher from '../utils/fetcher'

const useTeachingEvaluation = () => {
  const baseURL = process.env.NEXT_PUBLIC_BASE_API_URL
  const { data, error } = useSWR(`${baseURL}/api/pingjiao`, fetcher)

  return {
    todos: data as ITeachingEvaluation,
    isLoading: !error && !data,
    isError: !!error,
  }
}

export default useTeachingEvaluation
