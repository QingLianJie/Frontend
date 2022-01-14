import type { IconType } from 'react-icons'
import {
  RiAccountCircleLine,
  RiBarChartBoxLine,
  RiBookOpenLine,
  RiBuildingLine,
  RiLayoutMasonryLine,
  RiTableLine,
} from 'react-icons/ri'
import { schoolLinks } from '../external/school'

type NavLink = {
  type: 'LINK'
  drawer?: boolean
  name: string
  long: string
  href: string
  color: string
  icon: IconType
}

type NavMenu = {
  type: 'MENU'
  drawer?: boolean
  name: string
  long: string
  color: string
  icon: IconType
  children: NavMenuItem[]
}

type NavMenuItem = {
  name: string
  href: string
}

export const navLinks: (NavLink | NavMenu)[] = [
  {
    type: 'LINK',
    name: '主页',
    long: '回到主页',
    href: '/',
    color: 'pink',
    icon: RiLayoutMasonryLine,
  },
  {
    type: 'LINK',
    name: '课程',
    long: '全部课程',
    href: '/courses',
    color: 'red',
    icon: RiBookOpenLine,
  },
  {
    type: 'LINK',
    name: '成绩',
    long: '我的成绩',
    href: '/scores',
    color: 'green',
    icon: RiBarChartBoxLine,
  },
  {
    type: 'LINK',
    name: '课表',
    long: '我的课表',
    href: '/timetable',
    color: 'blue',
    icon: RiTableLine,
  },
  {
    type: 'LINK',
    name: '账号',
    long: '我的账号',
    href: '/member',
    color: 'yellow',
    drawer: true,
    icon: RiAccountCircleLine,
  },
  {
    type: 'MENU',
    name: '学校',
    long: '学校链接',
    color: 'purple',
    icon: RiBuildingLine,
    children: schoolLinks,
  },
]
