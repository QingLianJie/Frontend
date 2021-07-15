import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  Button,
  Grid,
  GridItem,
  Heading,
  HStack,
  VStack,
} from '@chakra-ui/react'
import Head from 'next/head'
import { default as NextLink } from 'next/link'
import ButtonLink from '../components/common/link/ButtonLink'
import MainContainer from '../components/common/container/Main'

const FeedbackPage = () => {
  return (
    <>
      <Head>
        <title>反馈 | 清廉街</title>
      </Head>
      <MainContainer title="反馈">
        <Grid
          templateColumns="repeat(2, 1fr)"
          gap="12"
          py={{ base: 4, md: 8, lg: 12 }}
        >
          <GridItem colSpan={{ base: 2, md: 1 }}>
            <VStack align="start" spacing="4">
              <Breadcrumb>
                <BreadcrumbItem>
                  <NextLink href="/" passHref>
                    <BreadcrumbLink>清廉街</BreadcrumbLink>
                  </NextLink>
                </BreadcrumbItem>
                <BreadcrumbItem>
                  <NextLink href="/feedback" passHref>
                    <BreadcrumbLink>反馈</BreadcrumbLink>
                  </NextLink>
                </BreadcrumbItem>
              </Breadcrumb>
              <Heading as="p" size="lg" fontWeight="600">
                感谢你提供反馈，
              </Heading>
              <Heading as="p" size="lg" fontWeight="600">
                请从右侧选择反馈方式。
              </Heading>
            </VStack>
            <HStack spacing="3" my="6">
              <Button onClick={() => window.history.back()}>返回上一页</Button>
            </HStack>
          </GridItem>
          <GridItem colSpan={{ base: 2, md: 1 }}></GridItem>
        </Grid>
      </MainContainer>
    </>
  )
}

export default FeedbackPage
