type FooterLink = {
  name: string
  links: {
    title: string
    description?: string
    href: string
  }[]
}

export const footerLinks: FooterLink[] = [
  {
    name: '联系',
    links: [
      {
        title: 'QQ 群',
        description: 'QQ 群号：498047164',
        href: 'https://jq.qq.com/?_wv=1027&k=Fj4xfeQE',
      },
      {
        title: '邮箱',
        description: '如果更喜欢发邮件，也可以通过邮箱反馈',
        href: 'mailto:bakedviolin@foxmail.com',
      },
      {
        title: 'GitHub Issues',
        description: '欢迎提 Issue 或者提交 Pull Request',
        href: 'https://github.com/QingLianJie/Frontend/issues',
      },
      {
        title: '腾讯问卷',
        description: '更简单的反馈方式，但是可能不能及时回应',
        href: 'https://wj.qq.com/s2/9542270/79ad',
      },
    ],
  },
  {
    name: '开源',
    links: [
      {
        title: 'GitHub',
        description: '这是我们的项目主页，欢迎来看看',
        href: 'https://github.com/QingLianJie',
      },
      {
        title: '插件',
        description:
          '获取一个用户脚本（UserScript）插件，可以在本地解析学校数据',
        href: 'https://github.com/QingLianJie/Bridge',
      },
      {
        title: 'Android App',
        description: '获取 Android 应用程序，功能与网页版相同，自带插件',
        href: 'https://github.com/QingLianJie/Mobile',
      },
    ],
  },
  {
    name: '页面',
    links: [
      {
        title: '服务状态',
        description: '未开放，查看网站的运行状态',
        href: '#',
      },
      {
        title: '公告',
        description: '未开放，网站上的一些历史公告',
        href: '#',
      },
      {
        title: '常见问题',
        description: '未开放，一些与网站相关的问题',
        href: '#',
      },
      {
        title: '开发版',
        description: '包含最新特性的网站，可能并不稳定',
        href: 'https://qing-dev.dist.run',
      },
    ],
  },
]
