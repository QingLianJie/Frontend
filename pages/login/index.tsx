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
} from 'react-icons/ri'
import { NavBar } from '../../components/NavBar'

const LoginPage = () => {
  const [show, setShow] = useState(false)
  return (
    <>
      <Head>
        <title>登录 | 清廉街</title>
      </Head>
      <NavBar title="登录" />
      <Container maxW="sm" paddingY="2">
        <Heading
          as="h2"
          size="lg"
          fontWeight="normal"
          marginTop="6"
          marginBottom="16"
          textAlign="center"
        >
          登录到 <strong>清廉街</strong>
        </Heading>

        <InputGroup size="lg" marginY="6">
          <InputLeftElement
            pointerEvents="none"
            children={<Icon as={RiMailFill} color="gray.300" />}
          />
          <Input type="email" placeholder="邮箱" isRequired />
        </InputGroup>

        <InputGroup size="lg" marginY="6">
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

        <InputGroup size="lg" marginY="6">
          <Button isFullWidth colorScheme="green">
            登录
          </Button>
        </InputGroup>

        <HStack divider={<StackDivider />} justify="center">
          <NextLink href="/register" passHref>
            <Link
              position="relative"
              display="flex"
              alignItems="center"
              paddingX="2"
              paddingY="1"
              rounded="md"
              color="purple.500"
              _hover={{
                textDecoration: 'none',
              }}
            >
              <Text fontSize="md">注册</Text>
            </Link>
          </NextLink>
          <NextLink href="/reset-password" passHref>
            <Link
              position="relative"
              display="flex"
              alignItems="center"
              paddingX="2"
              paddingY="1"
              rounded="md"
              color="purple.500"
              _hover={{
                textDecoration: 'none',
              }}
            >
              <Text fontSize="md">重置密码</Text>
            </Link>
          </NextLink>
        </HStack>
      </Container>
    </>
  )
}

export default LoginPage
