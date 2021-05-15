import Head from 'next/head'
import Footer from '../components/Footer'
import Header from '../components/Header'
import Main from '../components/Main'

const Index = () => {
  return (
    <>
      <Head>
        <title>清廉街</title>
      </Head>
      <Main>
        <Header title="清廉街" />
        <Footer />
      </Main>
    </>
  )
}

export default Index
