import type { IconType } from 'react-icons'
import {
  RiAtLine,
  RiCupLine,
  RiGithubLine,
  RiQuestionLine,
} from 'react-icons/ri'

type HelpLink = {
  name: string
  short: string
  href: string
  color: string
  icon: IconType
}

export const helpLinks: HelpLink[] = [
  {
    name: '联系我们',
    short: '联系',
    href: 'https://www.yuque.com/lifeni/qing/contact',
    color: 'red',
    icon: RiAtLine,
  },
  {
    name: '网站坏掉了吗',
    short: '坏了么',
    href: 'https://status.qing-dev.dist.run',
    color: 'green',
    icon: RiCupLine,
  },
  {
    name: '常见问题',
    short: 'FAQ',
    href: 'https://www.yuque.com/lifeni/qing/faq',
    color: 'blue',
    icon: RiQuestionLine,
  },
  {
    name: 'GitHub 主页',
    short: 'GitHub',
    href: 'https://github.com/QingLianJie',
    color: 'gray',
    icon: RiGithubLine,
  },
]
