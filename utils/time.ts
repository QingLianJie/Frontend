import dayjs from 'dayjs'
import 'dayjs/locale/zh-cn'
import calendar from 'dayjs/plugin/calendar'
import relative from 'dayjs/plugin/relativeTime'

dayjs.locale('zh-cn')
dayjs.extend(calendar)
dayjs.extend(relative)

export const calendarTime = (time: string) =>
  dayjs(time).calendar(dayjs(), {
    sameDay: '[今天] HH:mm',
    nextDay: '[明天] HH:mm',
    nextWeek: 'YYYY 年 M 月 D 日 HH:mm',
    lastDay: '[昨天] HH:mm',
    lastWeek: 'YYYY 年 M 月 D 日 HH:mm',
    sameElse: 'YYYY 年 M 月 D 日 HH:mm',
  })

export const calendarDate = (time: string) =>
  dayjs(time).calendar(dayjs(), {
    sameDay: '[今天]',
    nextDay: '[明天]',
    nextWeek: 'YYYY 年 M 月 D 日',
    lastDay: '[昨天]',
    lastWeek: 'YYYY 年 M 月 D 日',
    sameElse: 'YYYY 年 M 月 D 日',
  })

export const relativeTime = (time: string) => dayjs(time).fromNow()
