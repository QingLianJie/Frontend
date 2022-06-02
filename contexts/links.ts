import { atom } from 'jotai'
import { atomLocal } from './utils'

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
    ],
  },
  {
    name: '学习平台',
    isOpen: false,
    children: [
      {
        name: '智慧树',
        href: 'https://onlineweb.zhihuishu.com/',
        isFavorite: false,
      },
      {
        name: '超星',
        href: 'https://i.chaoxing.com/',
        isFavorite: false,
      },
      {
        name: '雨课堂',
        href: 'https://www.yuketang.cn/web',
        isFavorite: false,
      },
    ],
  },
  {
    name: '考试与技能认证',
    isOpen: false,
    children: [
      {
        name: '四六级',
        href: 'https://cet.neea.edu.cn/',
        isFavorite: false,
      },
      {
        name: '黑龙江省人事考试网',
        href: 'http://www.hljrsks.org.cn/hljrsks/index/index.ks',
        isFavorite: false,
      },
      {
        name: '软考',
        href: 'https://bm.ruankao.org.cn/sign/welcome',
        isFavorite: false,
      },
      {
        name: '教师资格证',
        href: 'http://ntce.neea.edu.cn/',
        isFavorite: false,
      },
      {
        name: '普通话',
        href: 'https://bm.cltt.org/#/index',
        isFavorite: false,
      },
    ],
  },
  {
    name: '毕业设计与论文',
    isOpen: false,
    children: [
      {
        name: '本科生毕业设计管理系统',
        href: 'https://co2.cnki.net/Login.html?dp=hrbeu',
        isFavorite: false,
      },
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
    ],
  },
  {
    name: '其他链接',
    isOpen: false,
    children: [
      {
        name: '学信网',
        href: 'https://my.chsi.com.cn/archive/index.jsp',
        isFavorite: false,
      },
      {
        name: '教师个人主页',
        href: 'http://homepage.hrbeu.edu.cn/irisweb/kyindex',
        isFavorite: false,
      },
      {
        name: '工学新闻',
        href: 'http://gongxue.cn/',
        isFavorite: false,
      },
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

export const linksAtom = atomLocal('links', links)
