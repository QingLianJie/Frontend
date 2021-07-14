import {
  RiBarChartBoxFill,
  RiBookOpenFill,
  RiFeedbackFill,
  RiGalleryUploadFill,
  RiQuestionFill,
  RiQuillPenFill,
  RiTableFill,
} from 'react-icons/ri'

export const shortcutLinks: ShortcutLinks = [
  {
    text: '课程',
    href: '/courses',
    color: 'green.500',
    icon: RiBookOpenFill,
  },
  {
    text: '课表',
    href: '/timetable',
    icon: RiTableFill,
    color: 'blue.500',
  },
  {
    text: '成绩',
    href: '/scores',
    icon: RiBarChartBoxFill,
    color: 'green.500',
  },
  {
    text: '报备',
    href: '/tasks/daily-report',
    icon: RiGalleryUploadFill,
    color: 'yellow.500',
  },
  {
    text: '评教',
    href: '/tasks/teaching-evaluation',
    icon: RiQuillPenFill,
    color: 'orange.500',
  },
  {
    text: '反馈',
    href: '/feedback',
    icon: RiFeedbackFill,
    color: 'orange.500',
  },
  {
    text: '帮助',
    href: '/faq',
    icon: RiQuestionFill,
    color: 'purple.500',
  },
]
