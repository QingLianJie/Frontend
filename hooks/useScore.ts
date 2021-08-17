import useSWR from 'swr'
import { BASE_API_URL } from '../data/api-config'
import { calcTermScore } from '../utils/calc/term-score'
import fetcher from '../utils/fetcher'

const useScore = () => {
  const baseURL = BASE_API_URL
  const { data, error } = useSWR(`${baseURL}/api/my/scores`, fetcher, {
    revalidateOnFocus: false,
    revalidateOnReconnect: false,
  })

  return {
    scores: calcTermScore(data as IScoreAPI),
    isLoading: !error && !data,
    isError: !!error,
  }
}

export default useScore
