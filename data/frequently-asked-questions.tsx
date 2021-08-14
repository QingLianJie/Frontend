import TextLink from '../components/common/action/link/TextLink'

export const faqs: FAQs = [
  {
    title: '绑定 HEU 账号后会发生什么？',
    content: (
      <span>
        注册并绑定 HEU 账号即意味着&nbsp;
        <strong>
          您同意提供 HEU 账号以统计成绩信息，「清廉街」保证 HEU 账号仅做统计用途
        </strong>
        ，若您不希望继续提供您的 HEU
        账号，只需在个人主页解绑账号即可，删除后数据库中不会留下任何和您账号有关的信息。
      </span>
    ),
  },
  {
    title: 'HEU 账号和成绩信息如何存储，是否有泄露的风险？',
    content: (
      <span>
        由于统计需要，用户所绑定的 HEU 账号和密码会以&nbsp;<strong>明文</strong>
        &nbsp;的方式存储在数据库中，因此存在泄露的风险。在课程页面所使用的成绩信息均为&nbsp;
        <strong>匿名</strong>。
        若您介意，可以选择解绑账号，之后数据库中不会再存有任何和您账号密码有关的信息，也就不再存在泄露的风险。
      </span>
    ),
  },
  {
    title: '网站用什么技术做的？',
    content: '后端用的是 Django 和 MySQL，前端用的是 Next.js 和 Chakra UI 。',
  },
  {
    title: '网站如何维护？（指盈利方式）',
    content: '用爱发电。',
  },
  {
    title: '研究生可以用吗？',
    content: '暂时还不行。',
  },
  {
    title: '这个网站和「腐败街」有什么关系？',
    content: '没有关系。',
  },
  {
    title: '为什么上传的头像很模糊、有锯齿？',
    content: (
      <span>
        所有上传头像都会被压缩到 512x512 分辨率，而且如果你用的是 Firefox 或者
        Safari，那么它不支持&nbsp;
        <TextLink
          external
          href="https://caniuse.com/mdn-api_paintrenderingcontext2d_imagesmoothingenabled"
        >
          图片抗锯齿
        </TextLink>
        &nbsp;处理，所以在上传头像的时候，可以选择使用最新版 Chrome 或者 Edge
        上传。
      </span>
    ),
  },
  {
    title: '如何开启暗色模式？',
    content:
      '目前网站是否启用暗色模式取决于系统的颜色模式，暂时不支持手动切换。',
  },
  {
    title: '还有其他问题或建议？',
    content: (
      <span>
        欢迎联系我们，通过&nbsp;
        <TextLink href="/feedback">反馈页面</TextLink>
        &nbsp;向我们提供反馈。
      </span>
    ),
  },
]
