import {
  RiBarChartBoxFill,
  RiBookOpenFill,
  RiBuildingFill,
  RiFeedbackFill,
  RiFileListFill,
  RiGalleryUploadFill,
  RiGithubFill,
  RiInformationFill,
  RiLayoutMasonryFill,
  RiProfileFill,
  RiQuestionFill,
  RiQuillPenFill,
  RiServerFill,
  RiTableFill,
  RiTaskFill,
} from 'react-icons/ri'

export const routerLinks: RouterLinks = [
  {
    type: 'LINK',
    text: '主页',
    href: '/',
    color: { light: 'pink.400', dark: 'pink.400' },
    icon: RiLayoutMasonryFill,
  },
  {
    type: 'LINK',
    text: '课程',
    href: '/courses',
    color: { light: 'red.500', dark: 'red.400' },
    icon: RiBookOpenFill,
  },
  {
    type: 'MENU',
    text: '我的',
    color: { light: 'blue.500', dark: 'blue.400' },
    icon: RiProfileFill,
    children: [
      {
        type: 'LINK',
        text: '课表',
        href: '/timetable',
        icon: RiTableFill,
        color: { light: 'blue.500', dark: 'blue.400' },
      },
      {
        type: 'LINK',
        text: '成绩',
        href: '/scores',
        icon: RiBarChartBoxFill,
        color: { light: 'green.500', dark: 'green.400' },
      },
    ],
  },

  {
    type: 'MENU',
    text: '学校',
    color: { light: 'green.500', dark: 'green.400' },
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
    type: 'MENU',
    text: '任务',
    color: { light: 'yellow.500', dark: 'yellow.400' },
    icon: RiTaskFill,
    children: [
      {
        type: 'LINK',
        text: '任务列表',
        href: '/tasks',
        icon: RiFileListFill,
        color: { light: 'blue.500', dark: 'blue.400' },
      },
      {
        type: 'LINK',
        text: '一键评教',
        href: '/tasks/#teaching-evaluation',
        icon: RiQuillPenFill,
        color: { light: 'orange.500', dark: 'orange.400' },
      },
      {
        type: 'LINK',
        text: '每日报备',
        href: '/tasks/#daily-report',
        icon: RiGalleryUploadFill,
        color: { light: 'yellow.500', dark: 'yellow.400' },
      },
    ],
  },

  {
    type: 'MENU',
    text: '关于',
    color: { light: 'cyan.500', dark: 'cyan.400' },
    icon: RiInformationFill,
    children: [
      {
        type: 'LINK',
        text: '服务状态',
        href: '/service-status',
        icon: RiServerFill,
        color: { light: 'green.500', dark: 'green.400' },
      },
      {
        type: 'LINK',
        text: '反馈',
        href: '/feedback',
        icon: RiFeedbackFill,
        color: { light: 'orange.500', dark: 'orange.400' },
      },
      {
        type: 'LINK',
        text: '常见问题',
        href: '/faq',
        icon: RiQuestionFill,
        color: { light: 'purple.500', dark: 'purple.400' },
      },
      {
        type: 'LINK',
        text: 'GitHub',
        href: 'https://github.com/QingLianJie',
        icon: RiGithubFill,
        color: { light: 'black', dark: 'white' },
      },
    ],
  },
]
