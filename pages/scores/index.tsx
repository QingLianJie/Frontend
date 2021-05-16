import Head from 'next/head'
import Header from '../../components/Header'
import Main from '../../components/Main'

const Scores = () => {
  return (
    <>
      <Head>
        <title>成绩 | 清廉街</title>
      </Head>
      <Main>
        <Header title="成绩" nav />
      </Main>
    </>
  )
}

export default Scores
