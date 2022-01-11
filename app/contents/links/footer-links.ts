import type { IconType } from 'react-icons'
import { RiAtLine, RiBookmarkLine, RiOpenSourceLine } from 'react-icons/ri'

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
        description: '如果更喜欢发邮件，也可以通过邮箱反馈',
        href: 'mailto:bakedviolin@foxmail.com',
      },
      {
        name: 'GitHub',
        description: '这是我们的项目主页，欢迎来提 Issue 和 Pull Request',
        href: 'https://github.com/QingLianJie',
      },
      {
        name: '问卷',
        description: '更简单的反馈方式，但是可能不能及时回应',
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
        description: '这里是主站的后端代码',
        href: 'https://github.com/QingLianJie/Backend',
      },
      {
        name: 'Bridge',
        description:
          '开发中，获取一个用户脚本（UserScript）插件，可以在本地解析学校数据',
        href: 'https://github.com/QingLianJie/Bridge',
      },
      {
        name: 'Frontend',
        description: '这里是主站的前端代码',
        href: 'https://github.com/QingLianJie/Frontend',
      },
      {
        name: 'Mobile',
        description:
          '开发中，获取 Android 应用程序，功能与网页版相同，自带插件',
        href: 'https://github.com/QingLianJie/Mobile',
      },
    ],
  },
  {
    name: '页面',
    icon: RiBookmarkLine,
    links: [
      {
        name: '常见问题',
        description: '有问题？看看这个，说不定就知道了',
        href: 'https://www.yuque.com/lifeni/qing/faq',
      },
      {
        name: '知识库',
        description: '存放在语雀上的文档，方便分享和修改，不定期更新',
        href: 'https://www.yuque.com/lifeni/qing/faq',
      },
      {
        name: '网站坏掉了么',
        description: '未开放，看看网站是不是坏掉了',
        href: '#',
      },
      {
        name: '开发版',
        description: '包含最新特性的网站，可能并不稳定',
        href: 'https://qing-dev.dist.run',
      },
    ],
  },
]
