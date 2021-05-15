import {
  Button,
  Container,
  Heading,
  HStack,
  Icon,
  IconButton,
  Input,
  InputGroup,
  InputLeftElement,
  InputRightElement,
  Link,
  StackDivider,
  Text,
} from '@chakra-ui/react'
import Head from 'next/head'
import { default as NextLink } from 'next/link'
import { useState } from 'react'
import {
  RiEyeFill,
  RiEyeOffFill,
  RiLockPasswordFill,
  RiMailFill,
  RiUserFill,
} from 'react-icons/ri'
import { NormalLink } from '../../components/Link'
import Main from '../../components/Main'

const SignupPage = () => {
  const [show, setShow] = useState(false)
  return (
    <>
      <Head>
        <title>注册 | 清廉街</title>
      </Head>
      <Main>
        <Container
          maxW="sm"
          py="6"
          display="flex"
          flex="1"
          flexDirection="column"
          justifyContent="center"
        >
          <Heading
            as="h2"
            size="lg"
            fontWeight="normal"
            mb="8"
            textAlign="center"
          >
            注册 <strong>清廉街</strong> 账号
          </Heading>

          <InputGroup size="lg" my="3">
            <InputLeftElement
              pointerEvents="none"
              children={<Icon as={RiUserFill} color="gray.300" />}
            />
            <Input type="text" placeholder="用户名" isRequired />
          </InputGroup>

          <InputGroup size="lg" my="3">
            <InputLeftElement
              pointerEvents="none"
              children={<Icon as={RiMailFill} color="gray.300" />}
            />
            <Input type="email" placeholder="邮箱" isRequired />
          </InputGroup>

          <InputGroup size="lg" my="3">
            <InputLeftElement
              pointerEvents="none"
              children={<Icon as={RiLockPasswordFill} color="gray.300" />}
            />
            <Input
              type={show ? 'text' : 'password'}
              placeholder="密码"
              isRequired
            />
            <InputRightElement>
              <IconButton
                aria-label="Show / Hide Password"
                icon={show ? <RiEyeOffFill /> : <RiEyeFill />}
                onClick={() => setShow(!show)}
                color="gray.300"
                variant="ghost"
              />
            </InputRightElement>
          </InputGroup>

          <InputGroup size="lg" my="3">
            <InputLeftElement
              pointerEvents="none"
              children={<Icon as={RiLockPasswordFill} color="gray.300" />}
            />
            <Input
              type={show ? 'text' : 'password'}
              placeholder="再次输入密码"
              isRequired
            />
            <InputRightElement>
              <IconButton
                aria-label="Show / Hide Password"
                icon={show ? <RiEyeOffFill /> : <RiEyeFill />}
                onClick={() => setShow(!show)}
                color="gray.300"
                variant="ghost"
              />
            </InputRightElement>
          </InputGroup>

          <InputGroup size="lg" my="3">
            <Button isFullWidth colorScheme="blue">
              注册
            </Button>
          </InputGroup>

          <HStack divider={<StackDivider />} justify="center" my="3">
            <NormalLink href="/login" text="登录" />
            <NormalLink href="/reset-password" text="重置密码" />
          </HStack>
        </Container>
      </Main>
    </>
  )
}

export default SignupPage
