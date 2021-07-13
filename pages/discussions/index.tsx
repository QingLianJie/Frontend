import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  Button,
  Container,
  Heading,
  HStack,
  useMediaQuery,
  VStack,
} from '@chakra-ui/react'
import Head from 'next/head'
import { default as NextLink } from 'next/link'
import Header from '../../components/header/Header'
import ButtonLink from '../../components/ui/link/ButtonLink'
import ColorfulBalls from '../../components/widget/background/ColorfulBalls'

const DiscussionsPage = () => {
  const [isMobile] = useMediaQuery('(max-width: 600px)')

  return (
    <>
      <Head>
        <title>问大家 - 清廉街</title>
      </Head>
      <Header title="问大家" />
      <Container width="full" maxW="container.xl" py="4" px="8">
        {!isMobile && <ColorfulBalls />}
        <VStack my="4" spacing="4" align="start">
          <Breadcrumb>
            <BreadcrumbItem>
              <NextLink href="/" passHref>
                <BreadcrumbLink>清廉街</BreadcrumbLink>
              </NextLink>
            </BreadcrumbItem>
            <BreadcrumbItem>
              <NextLink href="/discussions" passHref>
                <BreadcrumbLink>问大家</BreadcrumbLink>
              </NextLink>
            </BreadcrumbItem>
          </Breadcrumb>
          <Heading as="p" size="lg" fontWeight="600">
            这个功能还在开发中，
          </Heading>
          <Heading as="p" size="lg" fontWeight="600">
            敬请期待。
          </Heading>
        </VStack>
        <HStack spacing="3" my="6">
          <Button onClick={() => window.history.back()}>返回上一页</Button>
          <ButtonLink href="/feedback" color="green">
            提供建议
          </ButtonLink>
        </HStack>
      </Container>
    </>
  )
}

export default DiscussionsPage
