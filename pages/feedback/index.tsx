import { Container, Heading } from '@chakra-ui/layout'
import Head from 'next/head'
import Footer from '../../components/Footer'
import Header from '../../components/Header'
import Main from '../../components/Main'

const FeedbackPage = () => {
  return (
    <>
      <Head>
        <title>反馈 | 清廉街</title>
      </Head>
      <Main>
        <Header title="反馈" nav />
        <Container
          maxW="container.xl"
          d="flex"
          flexDir="column"
          alignItems="center"
          justifyContent="center"
          flex="1"
        >
          <Heading>还没有写</Heading>
        </Container>
        <Footer />
      </Main>
    </>
  )
}

export default FeedbackPage
