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
    text: '所有课程',
    href: '/courses',
    color: 'green.500',
    icon: RiBookOpenFill,
  },
  {
    text: '我的课表',
    href: '/timetable',
    icon: RiTableFill,
    color: 'blue.500',
  },
  {
    text: '我的成绩',
    href: '/scores',
    icon: RiBarChartBoxFill,
    color: 'green.500',
  },
  {
    text: '每日报备',
    href: '/tasks/daily-report',
    icon: RiGalleryUploadFill,
    color: 'yellow.500',
  },
  {
    text: '一键评教',
    href: '/tasks/teaching-evaluation',
    icon: RiQuillPenFill,
    color: 'orange.500',
  },
  {
    text: '反馈与建议',
    href: '/feedback',
    icon: RiFeedbackFill,
    color: 'orange.500',
  },
  {
    text: '常见问题',
    href: '/faq',
    icon: RiQuestionFill,
    color: 'purple.500',
  },
]
