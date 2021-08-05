import dayjs from 'dayjs'
import calendar from 'dayjs/plugin/calendar'
import 'dayjs/locale/zh-cn'

dayjs.locale('zh-cn')
dayjs.extend(calendar)

interface DateFormatterProps {
  date: string | number
  relative?: boolean
  calendar?: boolean
}

export const dateFormatter = ({
  date,
  relative,
  calendar,
}: DateFormatterProps): string => {
  if (calendar) {
    return dayjs(date).calendar(dayjs(), {
      sameDay: '[今天] HH:mm',
      nextDay: '[明天] HH:mm',
      nextWeek: 'YYYY 年 M 月 D 日 - HH:mm',
      lastDay: '[昨天] HH:mm',
      lastWeek: 'YYYY 年 M 月 D 日 - HH:mm',
      sameElse: 'YYYY 年 M 月 D 日 HH:mm',
    })
  } else if (relative) {
  }

  return dayjs(date).format('YYYY 年 M 月 D 日 - HH:mm')
}

export const sizeFormatter = (size: number) => {
  let i = -1
  const byteUnits = [' KB', ' MB', ' GB', ' TB', 'PB', 'EB', 'ZB', 'YB']
  do {
    size = size / 1024
    i++
  } while (size > 1024)

  return Math.max(size, 0.1).toFixed(1) + byteUnits[i]
}
