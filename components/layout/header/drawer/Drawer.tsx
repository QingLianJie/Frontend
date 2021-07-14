import {
  Drawer,
  DrawerBody,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
  IconButton,
  useDisclosure,
  VStack,
} from '@chakra-ui/react'
import {
  RiBarChartBoxFill,
  RiBookOpenFill,
  RiBuildingFill,
  RiFeedbackFill,
  RiGalleryUploadFill,
  RiGithubFill,
  RiInformationFill,
  RiLayout3Fill,
  RiMenuFill,
  RiProfileFill,
  RiQuestionAnswerFill,
  RiQuestionFill,
  RiQuillPenFill,
  RiTableFill,
} from 'react-icons/ri'
import DrawerAccordion from './Accordion'
import DrawerLink from './Link'

const HeaderDrawer = () => {
  const { isOpen, onOpen, onClose } = useDisclosure()

  return (
    <>
      <IconButton
        alignItems="center"
        justifyContent="center"
        me="4"
        aria-label="Menu"
        icon={<RiMenuFill />}
        onClick={onOpen}
      />
      <Drawer isOpen={isOpen} placement="left" onClose={onClose}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerHeader px="10" py="12" borderBottomWidth="1px">
            清廉街
          </DrawerHeader>
          <DrawerBody py="6">
            <VStack spacing="1" align="start" w="full">
              <DrawerLink href="/" color="pink.500" icon={RiLayout3Fill}>
                主页
              </DrawerLink>

              <DrawerLink
                href="/courses"
                color="green.500"
                icon={RiBookOpenFill}
              >
                课程
              </DrawerLink>

              <DrawerAccordion
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
              </DrawerAccordion>

              <DrawerAccordion
                color="red.500"
                icon={RiBuildingFill}
                links={[
                  {
                    text: '学生个人中心',
                    href: 'https://edusys.wvpn.hrbeu.edu.cn/jsxsd/framework/xsMain.jsp',
                  },
                  {
                    text: '网站办事中心',
                    href: 'https://one.wvpn.hrbeu.edu.cn/',
                  },
                  {
                    text: '轻教平台',
                    href: 'https://qingj.wvpn.hrbeu.edu.cn/',
                  },
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
              </DrawerAccordion>

              <DrawerLink
                href="/discussions"
                color="yellow.500"
                icon={RiQuestionAnswerFill}
              >
                问大家
              </DrawerLink>

              <DrawerAccordion
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
              </DrawerAccordion>
            </VStack>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  )
}

export default HeaderDrawer
