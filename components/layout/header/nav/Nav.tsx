import { HStack } from '@chakra-ui/react'
import {
  RiBarChartBoxFill,
  RiBookOpenFill,
  RiBuildingFill,
  RiFeedbackFill,
  RiGalleryUploadFill,
  RiGithubFill,
  RiInformationFill,
  RiLayout3Fill,
  RiProfileFill,
  RiQuestionAnswerFill,
  RiQuestionFill,
  RiQuillPenFill,
  RiTableFill,
} from 'react-icons/ri'
import NavLink from './Link'
import NavMenu from './menu/Menu'

const HeaderNav = () => {
  return (
    <HStack mx="10" spacing="1">
      <NavLink href="/" color="pink.500" icon={RiLayout3Fill}>
        主页
      </NavLink>

      <NavLink href="/courses" color="green.500" icon={RiBookOpenFill}>
        课程
      </NavLink>

      <NavMenu
        color="blue.500"
        icon={RiProfileFill}
        links={[
          {
            text: '课表',
            href: '/timetable',
            icon: RiTableFill,
            color: 'blue.500',
          },
          {
            text: '成绩',
            href: '/scores',
            icon: RiBarChartBoxFill,
            color: 'green.500',
          },
          {
            text: '每日报备',
            href: '/tasks/daily-report',
            icon: RiGalleryUploadFill,
            color: 'yellow.500',
          },
          {
            text: '一键评教',
            href: '/tasks/teaching-evaluation',
            icon: RiQuillPenFill,
            color: 'orange.500',
          },
        ]}
      >
        我的
      </NavMenu>

      <NavMenu
        color="red.500"
        icon={RiBuildingFill}
        links={[
          {
            text: '学生个人中心',
            href: 'https://edusys.wvpn.hrbeu.edu.cn/jsxsd/framework/xsMain.jsp',
          },
          { text: '网站办事中心', href: 'https://one.wvpn.hrbeu.edu.cn/' },
          { text: '轻教平台', href: 'https://qingj.wvpn.hrbeu.edu.cn/' },
          { text: '学校电子邮箱', href: 'https://mail.hrbeu.edu.cn/' },
          { text: '图书馆', href: 'https://lib.wvpn.hrbeu.edu.cn/' },
          {
            text: '中国知网',
            href: 'https://www-cnki-net-443.wvpn.hrbeu.edu.cn/',
          },
          {
            text: '研究生教育培养与服务信息系统',
            href: 'https://yjs.wvpn.hrbeu.edu.cn/cas/CASLogin.ashx',
          },
        ]}
      >
        学校
      </NavMenu>

      <NavLink
        href="/discussions"
        color="yellow.500"
        icon={RiQuestionAnswerFill}
      >
        问大家
      </NavLink>

      <NavMenu
        color="cyan.500"
        icon={RiInformationFill}
        links={[
          {
            text: '反馈',
            href: '/feedback',
            icon: RiFeedbackFill,
            color: 'orange.500',
          },
          {
            text: '常见问题',
            href: '/faq',
            icon: RiQuestionFill,
            color: 'purple.500',
          },
          {
            text: 'GitHub',
            href: 'https://github.com/QingLianJie',
            icon: RiGithubFill,
          },
        ]}
      >
        关于
      </NavMenu>
    </HStack>
  )
}

export default HeaderNav
