import useSWR from 'swr'
import fetcher from '../utils/fetcher'

const useStudent = () => {
  const baseURL = process.env.NEXT_PUBLIC_BASE_API_URL
  const { data, error } = useSWR(`${baseURL}/api/HEUAccount`, fetcher)

  return {
    student: data as IStudent,
    isLoading: !error && !data,
    isError: !!error,
  }
}

export default useStudent
