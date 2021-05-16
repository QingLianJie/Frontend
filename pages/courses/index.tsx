import Head from 'next/head'
import Header from '../../components/Header'
import Main from '../../components/Main'

const CoursesPage = () => {
  return (
    <>
      <Head>
        <title>课程 | 清廉街</title>
      </Head>
      <Main>
        <Header title="课程" nav />
      </Main>
    </>
  )
}

export default CoursesPage
