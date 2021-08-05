import useSWR from 'swr'
import { calcTermScore } from '../utils/calc/term-score'
import fetcher from '../utils/fetcher'

const useScore = () => {
  const baseURL = process.env.NEXT_PUBLIC_BASE_API_URL
  const { data, error } = useSWR(`${baseURL}/api/my/scores`, fetcher)

  return {
    scores: calcTermScore(data as IScoreAPI),
    isLoading: !error && !data,
    isError: !!error,
  }
}

export default useScore
