import {
  RiBarChartBoxFill,
  RiBookOpenFill,
  RiBuildingFill,
  RiFeedbackFill,
  RiGalleryUploadFill,
  RiGithubFill,
  RiInformationFill,
  RiLayoutMasonryFill,
  RiProfileFill,
  RiQuestionAnswerFill,
  RiQuestionFill,
  RiQuillPenFill,
  RiTableFill,
} from 'react-icons/ri'

export const routerLinks: RouterLinks = [
  {
    type: 'LINK',
    text: '主页',
    href: '/',
    color: 'pink.500',
    icon: RiLayoutMasonryFill,
  },
  {
    type: 'LINK',
    text: '课程',
    href: '/courses',
    color: 'green.500',
    icon: RiBookOpenFill,
  },
  {
    type: 'MENU',
    text: '我的',
    color: 'blue.500',
    icon: RiProfileFill,
    children: [
      {
        type: 'LINK',
        text: '课表',
        href: '/timetable',
        icon: RiTableFill,
        color: 'blue.500',
      },
      {
        type: 'LINK',
        text: '成绩',
        href: '/scores',
        icon: RiBarChartBoxFill,
        color: 'green.500',
      },
      {
        type: 'LINK',
        text: '每日报备',
        href: '/tasks/daily-report',
        icon: RiGalleryUploadFill,
        color: 'yellow.500',
      },
      {
        type: 'LINK',
        text: '一键评教',
        href: '/tasks/teaching-evaluation',
        icon: RiQuillPenFill,
        color: 'orange.500',
      },
    ],
  },

  {
    type: 'MENU',
    text: '学校',
    color: 'red.500',
    icon: RiBuildingFill,
    children: [
      {
        type: 'LINK',
        text: '学生个人中心',
        href: 'https://edusys.wvpn.hrbeu.edu.cn/jsxsd/framework/xsMain.jsp',
      },
      {
        type: 'LINK',
        text: '网站办事中心',
        href: 'https://one.wvpn.hrbeu.edu.cn/',
      },
      {
        type: 'LINK',
        text: '轻教平台',
        href: 'https://qingj.wvpn.hrbeu.edu.cn/',
      },
      {
        type: 'LINK',
        text: '学校电子邮箱',
        href: 'https://mail.hrbeu.edu.cn/',
      },
      {
        type: 'LINK',
        text: '图书馆',
        href: 'https://lib.wvpn.hrbeu.edu.cn/',
      },
      {
        type: 'LINK',
        text: '中国知网',
        href: 'https://www-cnki-net-443.wvpn.hrbeu.edu.cn/',
      },
      {
        type: 'LINK',
        text: '研究生教育培养与服务信息系统',
        href: 'https://yjs.wvpn.hrbeu.edu.cn/cas/CASLogin.ashx',
      },
    ],
  },
  {
    type: 'LINK',
    text: '唠唠',
    href: '/discussions',
    color: 'yellow.500',
    icon: RiQuestionAnswerFill,
  },

  {
    type: 'MENU',
    text: '关于',
    color: 'cyan.500',
    icon: RiInformationFill,
    children: [
      {
        type: 'LINK',
        text: '反馈',
        href: '/feedback',
        icon: RiFeedbackFill,
        color: 'orange.500',
      },
      {
        type: 'LINK',
        text: '常见问题',
        href: '/faq',
        icon: RiQuestionFill,
        color: 'purple.500',
      },
      {
        type: 'LINK',
        text: 'GitHub',
        href: 'https://github.com/QingLianJie',
        icon: RiGithubFill,
      },
    ],
  },
]
