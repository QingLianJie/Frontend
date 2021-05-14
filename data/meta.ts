import {
  RiBarChartBoxFill,
  RiBookOpenFill,
  RiDashboardFill,
  RiGalleryUploadFill,
  RiGithubFill,
  RiTableFill,
} from 'react-icons/ri'

const links = [
  {
    name: 'home',
    href: '/',
    text: '主页',
    color: 'rgba(237,100,166,1)',
    icon: RiDashboardFill,
  },
  {
    name: 'scores',
    href: '/scores',
    icon: RiBarChartBoxFill,
    text: '成绩',
    color: 'rgba(72,187,120,1)',
  },
  {
    name: 'timetable',
    href: '/timetable',
    icon: RiTableFill,
    text: '课表',
    color: 'rgba(66,153,225,1)',
  },
  {
    name: 'courses',
    href: '/courses',
    icon: RiBookOpenFill,
    text: '课程',
    color: 'rgba(245,101,101,1)',
  },
  {
    name: 'report',
    href: '/report',
    icon: RiGalleryUploadFill,
    text: '报备',
    color: 'rgba(236,201,75,1)',
  },
]

const buttons = [
  // {
  //   name: 'feedback',
  //   text: '反馈',
  //   color: '#ED8936',
  //   icon: RiFeedbackFill,
  // },
  {
    name: 'open-source',
    text: '开源',
    color: '#000000',
    icon: RiGithubFill,
  },
]

export { links, buttons }
