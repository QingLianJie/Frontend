type SchoolLink = {
  name: string
  href: string
  lan: boolean
}

export const schoolLinks: SchoolLink[] = [
  {
    name: '学生个人中心',
    href: 'https://edusys.wvpn.hrbeu.edu.cn/jsxsd/framework/xsMain.jsp',
    lan: false,
  },
  {
    name: '网上办事中心',
    href: 'https://one.wvpn.hrbeu.edu.cn/',
    lan: false,
  },
  {
    name: '轻教平台',
    href: 'https://qingj.wvpn.hrbeu.edu.cn/',
    lan: false,
  },
  {
    name: '学校电子邮箱',
    href: 'https://mail.hrbeu.edu.cn/',
    lan: false,
  },
  {
    name: '图书馆',
    href: 'https://lib.wvpn.hrbeu.edu.cn/',
    lan: false,
  },
  {
    name: '实验室综合管理系统',
    href: 'http://lims.hrbeu.edu.cn/OLMSWeb/Indexmain.aspx',
    lan: true,
  },
  {
    name: '云打印',
    href: 'http://librf.hrbeu.edu.cn/',
    lan: true,
  },
  {
    name: '研究生教育培养与服务信息系统',
    href: 'https://yjs.wvpn.hrbeu.edu.cn/cas/CASLogin.ashx',
    lan: false,
  },
  {
    name: '知网',
    href: 'https://www-cnki-net-443.wvpn.hrbeu.edu.cn/',
    lan: false,
  },
  {
    name: '学校官网',
    href: 'http://www.hrbeu.edu.cn/',
    lan: false,
  },
]
