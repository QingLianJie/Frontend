import {
  Button,
  ButtonProps,
  Center,
  Heading,
  Input,
  Spacer,
  StackProps,
  SystemProps,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  VStack,
} from '@chakra-ui/react'
import { RiLockPasswordLine, RiMailLine, RiUserLine } from 'react-icons/ri'
import {
  ActionFunction,
  Form,
  MetaFunction,
  redirect,
  useSearchParams,
} from 'remix'
import { Input } from '~/components/common/forms/Input'
import { ColorfulBalls } from '~/components/common/widgets/ColorfulBalls'

export const meta: MetaFunction = () => ({
  title: '登录与注册 | 清廉街',
})

export const action: ActionFunction = async ({ request }) => {
  const body = await request.formData()
  const name = body.get('name')
  const password = body.get('password')
  const from = body.get('from') as string
  console.log(name, password, from)

  return redirect(from ?? '/')
}

export default function LoginPage() {
  const [params] = useSearchParams()

  return (
    <Center
      w="full"
      maxW="72rem"
      px={{ base: '4', sm: '6', md: '8' }}
      pt="8"
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
          欢迎加入 <strong>清廉街</strong>
        </Heading>

        <ColorfulBalls h="52" top="-2" count={30} />

        <Tabs w="full" variant="enclosed" isLazy zIndex="1">
          <TabList transition="border-color 0.2s" px={{ base: '6', sm: '8' }}>
            <Tab {...TabStyles}>登录</Tab>
            <Tab {...TabStyles}>注册</Tab>
            <Spacer />
            <Tab {...TabStyles}>重置密码</Tab>
          </TabList>

          <TabPanels>
            <TabPanel p="0">
              <VStack
                as={Form}
                method="POST"
                action="/member/login"
                {...FormStyles}
              >
                <Input
                  type="text"
                  name="name"
                  placeholder="用户名或邮箱"
                  autoComplete="username"
                  icon={RiMailLine}
                />
                <Input
                  type="password"
                  name="password"
                  placeholder="密码"
                  autoComplete="current-password"
                  icon={RiLockPasswordLine}
                />
                <Input
                  type="hidden"
                  name="from"
                  value={params.get('from') ?? '/'}
                />
                <SubmitButton colorScheme="green">登录</SubmitButton>
              </VStack>
            </TabPanel>

            <TabPanel p="0">
              <VStack
                as={Form}
                method="POST"
                action="/member/signup"
                {...FormStyles}
              >
                <Input
                  type="text"
                  name="name"
                  placeholder="用户名"
                  help="独一无二的名字，3 到 16 个字符"
                  autoComplete="username"
                  icon={RiUserLine}
                />
                <Input
                  type="email"
                  name="email"
                  placeholder="邮箱"
                  autoComplete="email"
                  icon={RiMailLine}
                />
                <Input
                  type="password"
                  name="password"
                  placeholder="密码"
                  help="8 到 24 个字符，且不能为纯数字"
                  autoComplete="new-password"
                  icon={RiLockPasswordLine}
                />
                <Input
                  type="password"
                  name="password-again"
                  placeholder="再次输入密码"
                  autoComplete="new-password"
                  icon={RiLockPasswordLine}
                />
                <Input
                  type="hidden"
                  name="from"
                  value={params.get('from') ?? '/'}
                />
                <SubmitButton colorScheme="blue">注册</SubmitButton>
              </VStack>
            </TabPanel>

            <TabPanel p="0">
              <VStack
                as={Form}
                method="POST"
                action="/member/reset-password"
                {...FormStyles}
              >
                <Input
                  type="email"
                  name="email"
                  placeholder="注册时用的邮箱"
                  autoComplete="email"
                  icon={RiMailLine}
                />
                <SubmitButton colorScheme="yellow">发送重置链接</SubmitButton>
              </VStack>
            </TabPanel>
          </TabPanels>
        </Tabs>
      </VStack>
    </Center>
  )
}

const FormStyles: SystemProps & StackProps = {
  p: { base: '6', sm: '8' },
  w: 'full',
  spacing: '4',
  align: 'flex-start',
}

const TabStyles: SystemProps = {
  fontWeight: 'bold',
  _selected: {
    bg: 'white',
    color: 'blue.600',
    borderColor: 'inherit',
    borderBottomColor: 'white',
  },
  _dark: {
    _selected: {
      bg: 'gray.800',
      color: 'blue.300',
      borderColor: 'inherit',
      borderBottomColor: 'gray.800',
    },
  },
}

interface SubmitButtonProps extends SystemProps, ButtonProps {}

const SubmitButton = ({ children, ...props }: SubmitButtonProps) => (
  <Button isFullWidth variant="solid" type="submit" {...props}>
    {children}
  </Button>
)
