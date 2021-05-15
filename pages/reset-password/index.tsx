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
import Header from '../../components/Header'
import { NormalLink } from '../../components/Link'
import Main from '../../components/Main'

const ResetPasswordPage = () => {
  return (
    <>
      <Head>
        <title>重置密码 | 清廉街</title>
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
            marginTop="6"
            marginBottom="16"
            textAlign="center"
          >
            很遗憾，还没有这项服务
          </Heading>

          <InputGroup size="lg" my="3">
            <Button isFullWidth colorScheme="pink">
              那真是太遗憾了
            </Button>
          </InputGroup>

          <HStack divider={<StackDivider />} justify="center" my="3">
            <NormalLink href="/login" text="登录" />
            <NormalLink href="/signup" text="注册" />
          </HStack>
        </Container>
      </Main>
    </>
  )
}

export default ResetPasswordPage
