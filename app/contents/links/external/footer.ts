import { type IconType } from 'react-icons'
import { RiAtLine, RiLinksLine, RiOpenSourceLine } from 'react-icons/ri'

type FooterLink = {
  name: string
  icon: IconType
  links: {
    name: string
    description?: string
    href: string
  }[]
}

export const footerLinks: FooterLink[] = [
  {
    name: '联系',
    icon: RiAtLine,
    links: [
      {
        name: 'QQ 群',
        description: 'QQ 群号：498047164',
        href: 'https://jq.qq.com/?_wv=1027&k=Fj4xfeQE',
      },
      {
        name: '邮箱',
        description: '发邮件也是可以的',
        href: 'mailto:bakedviolin@foxmail.com',
      },
      {
        name: 'GitHub',
        description: '欢迎来提 Issue 和 Pull Request',
        href: 'https://github.com/QingLianJie',
      },
      {
        name: '问卷',
        description: '可能不能及时回应',
        href: 'https://wj.qq.com/s2/9542270/79ad',
      },
    ],
  },
  {
    name: '开源',
    icon: RiOpenSourceLine,
    links: [
      {
        name: 'Backend',
        description: '主站的后端代码',
        href: 'https://github.com/QingLianJie/Backend',
      },
      {
        name: 'Bridge',
        description: '脚本插件，可以在本地解析学校数据',
        href: 'https://github.com/QingLianJie/Bridge',
      },
      {
        name: 'Frontend',
        description: '主站的前端代码',
        href: 'https://github.com/QingLianJie/Frontend',
      },
      {
        name: 'Mobile',
        description: 'Android 套壳浏览器，自带插件',
        href: 'https://github.com/QingLianJie/Mobile',
      },
    ],
  },
  {
    name: '页面',
    icon: RiLinksLine,
    links: [
      {
        name: '常见问题',
        description: '有问题？看这个，说不定就知道了',
        href: 'https://www.yuque.com/lifeni/qing/faq',
      },
      {
        name: '知识库',
        description: '存放在语雀上的文档',
        href: 'https://www.yuque.com/lifeni/qing/faq',
      },
      {
        name: '网站坏掉了么',
        description: '看看网站是不是坏掉了',
        href: '#',
      },
      {
        name: '开发版',
        description: '包含最新特性的网站',
        href: 'https://qing-dev.dist.run',
      },
    ],
  },
]
