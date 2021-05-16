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
import Footer from '../../components/Footer'
import Header from '../../components/Header'
import { NormalLink } from '../../components/Link'
import Main from '../../components/Main'

const LoginPage = () => {
  const [show, setShow] = useState(false)
  return (
    <>
      <Head>
        <title>登录 | 清廉街</title>
      </Head>
      <Main>
        <Header title="清廉街" nav />

        <Container
          maxW="sm"
          py="4"
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
            登录到 <strong>清廉街</strong>
          </Heading>

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
            <Button isFullWidth colorScheme="green">
              登录
            </Button>
          </InputGroup>

          <HStack divider={<StackDivider />} justify="center" my="3">
            <NormalLink href="/signup" text="注册" />
            <NormalLink href="/reset-password" text="重置密码" />
          </HStack>
        </Container>

        <Footer />
      </Main>
    </>
  )
}

export default LoginPage
