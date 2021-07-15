import {
  RiBarChartBoxFill,
  RiBookOpenFill,
  RiFeedbackFill,
  RiGalleryUploadFill,
  RiQuestionAnswerFill,
  RiQuestionFill,
  RiQuillPenFill,
  RiTableFill,
} from 'react-icons/ri'

export const shortcutLinks: ShortcutLinks = [
  {
    text: '课程',
    long: '所有课程',
    href: '/courses',
    color: 'green.500',
    icon: RiBookOpenFill,
  },
  {
    text: '课表',
    long: '我的课表',
    href: '/timetable',
    icon: RiTableFill,
    color: 'blue.500',
  },
  {
    text: '成绩',
    long: '我的成绩',
    href: '/scores',
    icon: RiBarChartBoxFill,
    color: 'green.500',
  },
  {
    text: '唠唠',
    long: '唠唠',
    href: '/discussions',
    icon: RiQuestionAnswerFill,
    color: 'yellow.500',
  },
  {
    text: '评教',
    long: '一键评教',
    href: '/tasks/teaching-evaluation',
    icon: RiQuillPenFill,
    color: 'orange.500',
  },
  {
    text: '报备',
    long: '每日报备',
    href: '/tasks/daily-report',
    icon: RiGalleryUploadFill,
    color: 'yellow.500',
  },
  {
    text: '反馈',
    long: '反馈',
    href: '/feedback',
    icon: RiFeedbackFill,
    color: 'orange.500',
  },
  {
    text: '帮助',
    long: '常见问题',
    href: '/faq',
    icon: RiQuestionFill,
    color: 'purple.500',
  },
]
