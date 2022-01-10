import dayjs from 'dayjs'
import weekOfYear from 'dayjs/plugin/weekOfYear'
dayjs.extend(weekOfYear)

export const getWeek = (max: number) => {
  const year = new Date().getFullYear()
  const month = new Date().getMonth() + 1

  if (month <= 2) {
    return Math.min(dayjs().week() - dayjs(`${year - 1}-09-01`).week() + 1, max)
  } else if (month >= 9) {
    return Math.min(dayjs().week() - dayjs(`${year}-09-01`).week() + 1, max)
  } else {
    return Math.min(dayjs().week() - dayjs(`${year}-03-01`).week() + 1, max)
  }
}
