import {
  RiArrowDownSLine,
  RiBarChartBoxFill,
  RiBookOpenFill,
  RiDashboardFill,
  RiGalleryUploadFill,
  RiGithubFill,
  RiTableFill,
} from 'react-icons/ri'

export default {
  home: {
    text: '主页',
    color: '#ed64a6',
    icon: RiDashboardFill,
    href: '/',
  },
  scores: {
    icon: RiBarChartBoxFill,
    text: '成绩',
    color: '#48bb78',
    href: '/scores',
  },
  timetable: {
    icon: RiTableFill,
    text: '课表',
    color: '#4299e1',
    href: '/timetable',
  },
  courses: {
    icon: RiBookOpenFill,
    text: '课程',
    color: '#f56565',
    href: '/courses',
  },
  report: {
    icon: RiGalleryUploadFill,
    text: '报备',
    color: '#ecc94b',
    href: '/report',
  },
  'open-source': {
    text: '开源',
    color: '#171515',
    icon: RiGithubFill,
    href: '/open-source',
  },
  more: {
    text: '更多',
    color: '#ed64a6',
    icon: RiArrowDownSLine,
  },
}
