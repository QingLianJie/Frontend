import Head from 'next/head'
import Header from '../../components/Header'
import Main from '../../components/Main'

const AutoReportPage = () => {
  return (
    <>
      <Head>
        <title>报备 | 清廉街</title>
      </Head>
      <Main>
        <Header title="报备" nav />
      </Main>
    </>
  )
}

export default AutoReportPage