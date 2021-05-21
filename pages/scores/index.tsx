import { Container, Heading } from '@chakra-ui/layout'
import Head from 'next/head'
import Footer from '../../components/Footer'
import Header from '../../components/Header'
import Main from '../../components/Main'

const ScoresPage = () => {
  return (
    <>
      <Head>
        <title>成绩 | 清廉街</title>
      </Head>
      <Main>
        <Header title="成绩" nav />
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

export default ScoresPage
