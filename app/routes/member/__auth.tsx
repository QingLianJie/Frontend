import {
  Center,
  Heading,
  Spacer,
  Tab,
  TabList,
  Tabs,
  VStack,
} from '@chakra-ui/react'
import type { ReactNode } from 'react'
import type { MetaFunction } from 'remix'
import { Link, Outlet, useLocation, useSearchParams } from 'remix'
import { ColorfulBalls } from '~/components/common/backgrounds/ColorfulBalls'

export const meta: MetaFunction = () => ({
  title: '登录与注册 - 清廉街',
})

export default function AuthPage() {
  const tabMap = ['login', 'signup', 'reset-password']

  const location = useLocation()
  const currentTab = tabMap.findIndex(t => location.pathname.includes(t))
  const isResetPassword = location.pathname.includes('reset-password')

  return (
    <Center
      w="full"
      maxW="72rem"
      px={{ base: '4', sm: '6', md: '8' }}
      pt={{ base: '0', sm: '4' }}
      pb={{ base: '0', sm: '8' }}
    >
      <VStack
        pos="relative"
        w="full"
        maxW="96"
        bg="white"
        _dark={{ bg: 'gray.800' }}
        rounded="md"
        transition="all 0.2s"
      >
        <Heading
          as="h2"
          fontSize="2xl"
          fontWeight="normal"
          mt="20"
          mb="12"
          lineHeight="1.25"
          textAlign="center"
          userSelect="none"
          pointerEvents="none"
          zIndex="1"
        >
          {isResetPassword ? (
            <strong>重置密码</strong>
          ) : (
            <span>
              欢迎加入 <strong>清廉街</strong>
            </span>
          )}
        </Heading>

        <ColorfulBalls h="52" top="-2" count={30} />

        <TabBox index={currentTab}>
          <Outlet />
        </TabBox>
      </VStack>
    </Center>
  )
}

interface TabBoxProps {
  index: number
  children: ReactNode
}

const TabBox = ({ index, children }: TabBoxProps) => {
  const [params] = useSearchParams()
  const from = params.get('from') ? `?from=${params.get('from')}` : ''

  return (
    <Tabs w="full" variant="enclosed" zIndex="1" index={index}>
      <TabList transition="border-color 0.2s" px={{ base: '6', sm: '8' }}>
        <TabLink to={`/member/login${from}`} text="登录" />
        <TabLink to={`/member/signup${from}`} text="注册" />
        <Spacer />
        <TabLink to={`/member/reset-password${from}`} text="重置密码" />
      </TabList>
      {children}
    </Tabs>
  )
}

interface TabLinkProps {
  to: string
  text: string
}

const TabLink = ({ to, text }: TabLinkProps) => (
  <Tab
    as={Link}
    to={to}
    fontWeight="bold"
    _selected={{
      bg: 'white',
      color: 'blue.600',
      borderColor: 'inherit',
      borderBottomColor: 'white',
    }}
    _dark={{
      _selected: {
        bg: 'gray.800',
        color: 'blue.300',
        borderColor: 'inherit',
        borderBottomColor: 'gray.800',
      },
    }}
  >
    {text}
  </Tab>
)
