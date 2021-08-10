import {
  RiBarChartBoxFill,
  RiBookOpenFill,
  RiFeedbackFill,
  RiGalleryUploadFill,
  RiQuestionFill,
  RiQuillPenFill,
  RiTableFill,
  RiTaskFill,
} from 'react-icons/ri'

export const shortcutLinks: ShortcutLinks = [
  {
    text: '课程',
    long: '所有课程',
    href: '/courses',
    color: { light: 'red.500', dark: 'red.400' },
    icon: RiBookOpenFill,
  },
  {
    text: '课表',
    long: '我的课表',
    href: '/timetable',
    icon: RiTableFill,
    color: { light: 'blue.500', dark: 'blue.400' },
  },
  {
    text: '成绩',
    long: '我的成绩',
    href: '/scores',
    icon: RiBarChartBoxFill,
    color: { light: 'green.500', dark: 'green.400' },
  },
  {
    text: '任务',
    long: '任务',
    href: '/tasks',
    icon: RiTaskFill,
    color: { light: 'yellow.500', dark: 'yellow.400' },
  },
  {
    text: '评教',
    long: '一键评教',
    href: '/tasks/#teaching-evaluation',
    icon: RiQuillPenFill,
    color: { light: 'orange.500', dark: 'orange.400' },
  },
  {
    text: '报备',
    long: '每日报备',
    href: '/tasks/#daily-report',
    icon: RiGalleryUploadFill,
    color: { light: 'yellow.500', dark: 'yellow.400' },
  },
  {
    text: '反馈',
    long: '反馈',
    href: '/feedback',
    icon: RiFeedbackFill,
    color: { light: 'orange.500', dark: 'orange.400' },
  },
  {
    text: '帮助',
    long: '常见问题',
    href: '/faq',
    icon: RiQuestionFill,
    color: { light: 'purple.500', dark: 'purple.400' },
  },
]
