import {
  Button,
  Container,
  Flex,
  Heading,
  HStack,
  Icon,
  IconButton,
  Input,
  InputGroup,
  InputLeftElement,
  InputRightElement,
  StackDivider,
} from '@chakra-ui/react'
import Head from 'next/head'
import { useState } from 'react'
import {
  RiEyeFill,
  RiEyeOffFill,
  RiLockPasswordFill,
  RiMailFill,
} from 'react-icons/ri'
import TextLink from '../components/common/TextLink'

const LoginPage = () => {
  const [showPassword, setShowPassword] = useState(false)

  return (
    <>
      <Head>
        <title>登录 - 清廉街</title>
      </Head>
      <Flex
        as="main"
        minH="100vh"
        flexDir="column"
        alignItems="center"
        justifyContent="center"
      >
        <Container
          as="form"
          maxW="sm"
          px="8"
          py="12"
          display="flex"
          flexDir="column"
          justifyContent="center"
          borderWidth="1px"
          borderRadius="md"
          onSubmit={e => e.preventDefault()}
        >
          <Heading
            as="h2"
            fontSize="2xl"
            fontWeight="normal"
            mt="4"
            mb="12"
            textAlign="center"
          >
            登录到 <strong>清廉街</strong>
          </Heading>

          <InputGroup my="2">
            <InputLeftElement pointerEvents="none">
              <Icon as={RiMailFill} color="gray.300" />
            </InputLeftElement>
            <Input type="text" placeholder="用户名或邮箱" isRequired />
          </InputGroup>

          <InputGroup my="2">
            <InputLeftElement pointerEvents="none">
              <Icon as={RiLockPasswordFill} color="gray.300" />
            </InputLeftElement>

            <Input
              type={showPassword ? 'text' : 'password'}
              placeholder="密码"
              isRequired
            />
            <InputRightElement>
              <IconButton
                aria-label="显示 / 隐藏密码"
                icon={showPassword ? <RiEyeOffFill /> : <RiEyeFill />}
                onClick={() => setShowPassword(!showPassword)}
                color="gray.300"
                variant="ghost"
                borderRadius="md"
              />
            </InputRightElement>
          </InputGroup>

          <InputGroup my="2">
            <Button type="submit" isFullWidth colorScheme="green">
              登录
            </Button>
          </InputGroup>

          <HStack divider={<StackDivider />} justify="center" mt="2">
            <TextLink href="/signup" text="注册" />
            <TextLink href="/reset-password" text="重置密码" />
          </HStack>
        </Container>
      </Flex>
    </>
  )
}

export default LoginPage
