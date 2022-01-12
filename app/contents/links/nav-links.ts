import type { IconType } from 'react-icons'
import {
  RiAccountCircleLine,
  RiBarChartBoxLine,
  RiBookOpenLine,
  RiBuildingLine,
  RiLayoutMasonryLine,
  RiTableLine,
} from 'react-icons/ri'
import { schoolLinks } from './school-links'

type NavLink = {
  type: 'LINK'
  name: string
  long: string
  href: string
  color: string
  icon: IconType
}

type NavMenu = {
  type: 'MENU'
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
    href: '/member/scores',
    color: 'green',
    icon: RiBarChartBoxLine,
  },
  {
    type: 'LINK',
    name: '课表',
    long: '我的课表',
    href: '/member/timetable',
    color: 'blue',
    icon: RiTableLine,
  },
  {
    type: 'LINK',
    name: '管理',
    long: '账号管理',
    href: '/member',
    color: 'yellow',
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
