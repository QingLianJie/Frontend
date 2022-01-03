import type { IconType } from 'react-icons'
import { RiBarChartBoxLine, RiBookOpenLine, RiTableLine } from 'react-icons/ri'

type AppLink = {
  name: string
  href: string
  color: string
  icon: IconType
}

export const appLinks: AppLink[] = [
  {
    name: '全部课程',
    href: '/cources',
    color: 'red',
    icon: RiBookOpenLine,
  },
  {
    name: '我的成绩',
    href: '/scores',
    color: 'green',
    icon: RiBarChartBoxLine,
  },
  {
    name: '我的课表',
    href: '/timetable',
    color: 'blue',
    icon: RiTableLine,
  },
]
