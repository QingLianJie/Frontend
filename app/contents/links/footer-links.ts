type FooterLink = {
  name: string
  links: {
    name: string
    description?: string
    href: string
  }[]
}

export const footerLinks: FooterLink[] = [
  {
    name: '联系',
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
        name: '问卷',
        description: '更简单的反馈方式，但是可能不能及时回应',
        href: 'https://wj.qq.com/s2/9542270/79ad',
      },
    ],
  },
  {
    name: '开源',
    links: [
      {
        name: 'GitHub',
        description: '这是我们的项目主页，欢迎来看看',
        href: 'https://github.com/QingLianJie',
      },
      {
        name: 'Bridge',
        description:
          '开发中，获取一个用户脚本（UserScript）插件，可以在本地解析学校数据',
        href: 'https://github.com/QingLianJie/Bridge',
      },
      {
        name: 'Android',
        description:
          '开发中，获取 Android 应用程序，功能与网页版相同，自带插件',
        href: 'https://github.com/QingLianJie/Mobile',
      },
    ],
  },
  {
    name: '页面',
    links: [
      {
        name: '有问题',
        description: '有问题？看看这个，说不定就知道了',
        href: 'https://www.yuque.com/lifeni/qing/faq',
      },
      {
        name: '坏了么',
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
