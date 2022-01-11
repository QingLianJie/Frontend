import type { IconType } from 'react-icons'
import {
  RiAccountCircleLine,
  RiBarChartBoxLine,
  RiBookOpenLine,
  RiBuildingLine,
  RiTableLine,
} from 'react-icons/ri'

type AppLink = {
  name: string
  short: string
  href: string
  color: string
  icon: IconType
  mobile?: 'yes'
}

export const appLinks: AppLink[] = [
  {
    name: '全部课程',
    short: '课程',
    href: '/courses',
    color: 'red',
    icon: RiBookOpenLine,
  },
  {
    name: '我的成绩',
    short: '成绩',
    href: '/member/scores',
    color: 'green',
    icon: RiBarChartBoxLine,
  },
  {
    name: '我的课表',
    short: '课表',
    href: '/member/timetable',
    color: 'blue',
    icon: RiTableLine,
  },
  {
    name: '账号管理',
    short: '账号',
    href: '/member',
    color: 'yellow',
    icon: RiAccountCircleLine,
  },
  {
    name: '学校链接',
    short: '学校',
    href: '#links',
    color: 'purple',
    icon: RiBuildingLine,
    mobile: 'yes',
  },
]
