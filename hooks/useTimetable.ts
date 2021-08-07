import useSWR from 'swr'
import fetcher from '../utils/fetcher'

const useTimetable = () => {
  const baseURL = process.env.NEXT_PUBLIC_BASE_API_URL
  const { data, error } = useSWR(`${baseURL}/api/my/timetable`, fetcher)

  return {
    timetable: data as ITimetableAPI,
    isLoading: !error && !data,
    isError: !!error,
  }
}

export default useTimetable
