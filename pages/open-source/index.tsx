import Head from 'next/head'
import Header from '../../components/Header'
import Main from '../../components/Main'

const OpenSource = () => {
  return (
    <>
      <Head>
        <title>开源 | 清廉街</title>
      </Head>
      <Main>
        <Header title="开源" showNav />
      </Main>
    </>
  )
}

export default OpenSource
