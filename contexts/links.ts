import { atom } from 'jotai'

const links = [
  {
    name: '常用链接',
    isOpen: false,
    children: [
      {
        name: '学生个人中心',
        href: 'https://edusys.wvpn.hrbeu.edu.cn/jsxsd/framework/xsMain.jsp',
        isFavorite: true,
      },
      {
        name: '网上办事中心',
        href: 'https://one.wvpn.hrbeu.edu.cn/',
        isFavorite: true,
      },
      {
        name: '学校官网',
        href: 'http://www.hrbeu.edu.cn/',
        isFavorite: true,
      },
      {
        name: '学校电子邮箱',
        href: 'https://mail.hrbeu.edu.cn/',
        isFavorite: true,
      },
      {
        name: '研究生教育培养与服务信息系统',
        href: 'https://yjs.wvpn.hrbeu.edu.cn/cas/CASLogin.ashx',
        isFavorite: false,
      },
    ],
  },
  {
    name: '图书馆',
    isOpen: false,
    children: [
      {
        name: '图书馆官网',
        href: 'https://lib.wvpn.hrbeu.edu.cn/',
        isFavorite: false,
      },
      {
        name: '云打印',
        href: 'http://librf.hrbeu.edu.cn/',
        isLimited: true,
        isFavorite: false,
      },
      {
        name: '馆藏资源检索系统',
        href: 'https://liblsp-443.wvpn.hrbeu.edu.cn/space/database',
        isFavorite: false,
      },
    ],
  },
  {
    name: '毕业设计与论文',
    isOpen: false,
    children: [
      {
        name: 'Google 学术',
        href: 'https://scholar.google.com/',
        isFavorite: false,
      },
      {
        name: '中国知网 CNKI',
        href: 'https://www-cnki-net-443.wvpn.hrbeu.edu.cn/',
        isFavorite: false,
      },

      {
        name: '万方数据',
        href: 'https://g-wanfangdata-com-cn.wvpn.hrbeu.edu.cn/',
        isFavorite: false,
      },
      {
        name: '本科生毕业设计管理系统',
        href: 'https://co2.cnki.net/Login.html?dp=hrbeu',
        isFavorite: false,
      },
    ],
  },
  {
    name: '其他链接',
    isOpen: false,
    children: [
      {
        name: '轻教平台',
        href: 'https://qingj.wvpn.hrbeu.edu.cn/',
        isFavorite: false,
      },
      {
        name: '实验室综合管理系统',
        href: 'http://lims.hrbeu.edu.cn/OLMSWeb/Indexmain.aspx',
        isLimited: true,
        isFavorite: false,
      },
    ],
  },
]

export const linksAtom = atom(links)
