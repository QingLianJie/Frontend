import useSWR from 'swr'
import fetcher from '../utils/fetcher'

const useArticle = () => {
  const baseURL = process.env.NEXT_PUBLIC_BASE_API_URL
  const { data, error } = useSWR(`${baseURL}/api/articles`, fetcher)

  return {
    articles: data as IArticle[],
    isLoading: !error && !data,
    isError: !!error,
  }
}

export default useArticle
