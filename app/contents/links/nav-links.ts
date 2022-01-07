import type { IconType } from 'react-icons'
import {
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
  href: string
  color: string
  icon: IconType
}

type NavMenu = {
  type: 'MENU'
  name: string
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
    href: '/',
    color: 'pink',
    icon: RiLayoutMasonryLine,
  },
  {
    type: 'LINK',
    name: '课程',
    href: '/cources',
    color: 'red',
    icon: RiBookOpenLine,
  },
  {
    type: 'LINK',
    name: '成绩',
    href: '/scores',
    color: 'green',
    icon: RiBarChartBoxLine,
  },
  {
    type: 'LINK',
    name: '课表',
    href: '/timetable',
    color: 'blue',
    icon: RiTableLine,
  },
  {
    type: 'MENU',
    name: '学校',
    color: 'yellow',
    icon: RiBuildingLine,
    children: schoolLinks,
  },
]
