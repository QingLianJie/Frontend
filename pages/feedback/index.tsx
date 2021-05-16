import Head from 'next/head'
import Header from '../../components/Header'
import Main from '../../components/Main'

const Feedback = () => {
  return (
    <>
      <Head>
        <title>反馈 | 清廉街</title>
      </Head>
      <Main>
        <Header title="反馈" showNav />
      </Main>
    </>
  )
}

export default Feedback
