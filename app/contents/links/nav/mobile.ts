import type { IconType } from 'react-icons'
import {
  RiAccountCircleLine,
  RiBarChartBoxLine,
  RiBookOpenLine,
  RiBuildingLine,
  RiFileList3Line,
  RiTableLine,
} from 'react-icons/ri'

type MobileLink = {
  name: string
  short: string
  href: string
  color: string
  icon: IconType
  mobile?: 'yes'
}

export const mobileLinks: MobileLink[] = [
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
    href: '/scores',
    color: 'green',
    icon: RiBarChartBoxLine,
  },
  {
    name: '我的课表',
    short: '课表',
    href: '/timetable',
    color: 'blue',
    icon: RiTableLine,
  },
  {
    name: '我的账号',
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
  {
    name: '网站公告',
    short: '公告',
    href: '#notes',
    color: 'cyan',
    icon: RiFileList3Line,
    mobile: 'yes',
  },
]
