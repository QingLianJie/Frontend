import useSWR from 'swr'
import { BASE_API_URL } from '../data/api-config'
import fetcher from '../utils/fetcher'

const useArticle = () => {
  const baseURL = BASE_API_URL
  const { data, error } = useSWR(`${baseURL}/api/articles`, fetcher, {
    revalidateOnFocus: false,
    revalidateOnReconnect: false,
  })

  return {
    articles: data as IArticle[],
    isLoading: !error && !data,
    isError: !!error,
  }
}

export default useArticle
