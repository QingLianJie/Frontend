import {
  Button,
  Container,
  Heading,
  HStack,
  InputGroup,
  Link,
  StackDivider,
  Text,
} from '@chakra-ui/react'
import Head from 'next/head'
import { default as NextLink } from 'next/link'
import { NavBar } from '../../components/NavBar'

const ResetPasswordPage = () => {
  return (
    <>
      <Head>
        <title>重置密码 | 清廉街</title>
      </Head>
      <NavBar title="重置密码" />
      <Container maxW="sm" paddingY="2">
        <Heading
          as="h2"
          size="lg"
          fontWeight="normal"
          marginTop="6"
          marginBottom="16"
          textAlign="center"
        >
          很遗憾，还没有这项服务
        </Heading>

        <InputGroup size="lg" marginY="6">
          <Button isFullWidth colorScheme="pink">
            那真是太遗憾了
          </Button>
        </InputGroup>

        <HStack divider={<StackDivider />} justify="center">
          <NextLink href="/login" passHref>
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
              <Text fontSize="md">登录</Text>
            </Link>
          </NextLink>
          <NextLink href="/signup" passHref>
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
        </HStack>
      </Container>
    </>
  )
}

export default ResetPasswordPage
