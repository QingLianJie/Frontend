import dayjs from 'dayjs'
import calendar from 'dayjs/plugin/calendar'
import 'dayjs/locale/zh-cn'

dayjs.locale('zh-cn')
dayjs.extend(calendar)

export const calendarTime = (time: string) =>
  dayjs(time).calendar(dayjs(), {
    sameDay: '[今天] HH:mm',
    nextDay: '[明天] HH:mm',
    nextWeek: 'YYYY 年 M 月 D 日 HH:mm',
    lastDay: '[昨天] HH:mm',
    lastWeek: 'YYYY 年 M 月 D 日 HH:mm',
    sameElse: 'YYYY 年 M 月 D 日 HH:mm',
  })
