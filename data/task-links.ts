import { RiGalleryUploadFill, RiQuillPenFill } from 'react-icons/ri'

export const taskLinks: TaskLinks = [
  {
    text: '一键评教',
    description: '自动执行评教',
    href: '/tasks/teaching-evaluation',
    icon: RiQuillPenFill,
    color: { light: 'orange.500', dark: 'orange.400' },
  },
  {
    text: '每日报备',
    description: '每日 00:05 自动执行当天报备',
    href: '/tasks/daily-report',
    icon: RiGalleryUploadFill,
    color: { light: 'yellow.500', dark: 'yellow.400' },
  },
]
