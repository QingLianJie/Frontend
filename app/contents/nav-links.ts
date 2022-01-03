import type { IconType } from 'react-icons'
import {
  RiBarChartBoxLine,
  RiBookOpenLine,
  RiBuildingLine,
  RiLayoutMasonryLine,
  RiTableLine,
} from 'react-icons/ri'

type NavLink = {
  type: 'LINK'
  text: string
  href: string
  color: string
  icon: IconType
}

type NavMenu = {
  type: 'MENU'
  text: string
  color: string
  icon: IconType
  children: NavMenuItem[]
}

type NavMenuItem = {
  text: string
  href: string
}

export const navLinks: (NavLink | NavMenu)[] = [
  {
    type: 'LINK',
    text: '主页',
    href: '/',
    color: 'pink',
    icon: RiLayoutMasonryLine,
  },
  {
    type: 'LINK',
    text: '课程',
    href: '/课程',
    color: 'red',
    icon: RiBookOpenLine,
  },
  {
    type: 'LINK',
    text: '成绩',
    href: '/成绩',
    color: 'green',
    icon: RiBarChartBoxLine,
  },
  {
    type: 'LINK',
    text: '课表',
    href: '/课表',
    color: 'blue',
    icon: RiTableLine,
  },
  {
    type: 'MENU',
    text: '学校',
    color: 'green',
    icon: RiBuildingLine,
    children: [
      {
        text: '学生个人中心',
        href: 'https://edusys.wvpn.hrbeu.edu.cn/jsxsd/framework/xsMain.jsp',
      },
      {
        text: '网站办事中心',
        href: 'https://one.wvpn.hrbeu.edu.cn/',
      },
      {
        text: '轻教平台',
        href: 'https://qingj.wvpn.hrbeu.edu.cn/',
      },
      {
        text: '学校电子邮箱',
        href: 'https://mail.hrbeu.edu.cn/',
      },
      {
        text: '图书馆',
        href: 'https://lib.wvpn.hrbeu.edu.cn/',
      },
      {
        text: '实验室综合管理系统',
        href: 'http://lims.hrbeu.edu.cn/OLMSWeb/Indexmain.aspx',
      },
      {
        text: '中国知网',
        href: 'https://www-cnki-net-443.wvpn.hrbeu.edu.cn/',
      },
      {
        text: '研究生教育培养与服务信息系统',
        href: 'https://yjs.wvpn.hrbeu.edu.cn/cas/CASLogin.ashx',
      },
      {
        text: '学校官网',
        href: 'http://www.hrbeu.edu.cn/',
      },
    ],
  },
]
