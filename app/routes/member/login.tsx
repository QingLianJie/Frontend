import {
  Button,
  ButtonProps,
  Center,
  Divider,
  Heading,
  Spacer,
  StackProps,
  SystemProps,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  Text,
  VStack,
} from '@chakra-ui/react'
import { MetaFunction } from '@remix-run/server-runtime'
import { ReactNode } from 'react'
import { RiLockPasswordLine, RiMailLine, RiUserLine } from 'react-icons/ri'
import { Form } from 'remix'
import { FormInput } from '~/components/common/forms/FormInput'

export const meta: MetaFunction = () => ({
  title: '登录与注册 | 清廉街',
})

export default function LoginPage() {
  return (
    <Center
      w="full"
      maxW="72rem"
      px={{ base: '4', sm: '6', md: '8' }}
      pt="8"
      pb={{ base: '0', sm: '8' }}
    >
      <VStack
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
          mt={{ base: '16', sm: '20' }}
          mb={{ base: '8', sm: '12' }}
          textAlign="center"
        >
          欢迎加入 <strong>清廉街</strong>
        </Heading>

        <Tabs w="full" variant="enclosed" isLazy>
          <TabList transition="border-color 0.2s" px={{ base: '6', sm: '8' }}>
            <Tab fontWeight="bold">登录</Tab>
            <Tab fontWeight="bold">注册</Tab>
            <Spacer />
            <Tab fontWeight="bold">重置密码</Tab>
          </TabList>

          <TabPanels>
            <TabPanel p="0">
              <VStack as={Form} {...FormStyles}>
                <FormInput
                  type="text"
                  name="name"
                  placeholder="用户名或邮箱"
                  autoComplete="username"
                  icon={RiMailLine}
                />
                <FormInput
                  type="password"
                  name="password"
                  placeholder="密码"
                  autoComplete="current-password"
                  icon={RiLockPasswordLine}
                />

                <SubmitButton colorScheme="green">登录</SubmitButton>
              </VStack>
            </TabPanel>

            <TabPanel p="0">
              <VStack as={Form} {...FormStyles}>
                <FormInput
                  type="text"
                  name="name"
                  placeholder="用户名"
                  help="独一无二的名字，3 到 16 个字符"
                  autoComplete="username"
                  icon={RiUserLine}
                />
                <FormInput
                  type="email"
                  name="email"
                  placeholder="邮箱"
                  autoComplete="email"
                  icon={RiMailLine}
                />
                <FormInput
                  type="password"
                  name="password"
                  placeholder="密码"
                  help="8 到 24 个字符，且不能为纯数字"
                  autoComplete="new-password"
                  icon={RiLockPasswordLine}
                />
                <FormInput
                  type="password"
                  name="password-again"
                  placeholder="再次输入密码"
                  autoComplete="new-password"
                  icon={RiLockPasswordLine}
                />

                <SubmitButton colorScheme="blue">注册</SubmitButton>
              </VStack>
            </TabPanel>

            <TabPanel p="0">
              <VStack as={Form} {...FormStyles}>
                <FormInput
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

interface SubmitButtonProps extends SystemProps, ButtonProps {}

const SubmitButton = ({ children, ...props }: SubmitButtonProps) => (
  <Button isFullWidth variant="solid" type="submit" {...props}>
    {children}
  </Button>
)
