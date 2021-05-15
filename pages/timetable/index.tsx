import Head from 'next/head'
import Header from '../../components/Header'
import Main from '../../components/Main'

const Timetable = () => {
  return (
    <>
      <Head>
        <title>课表 | 清廉街</title>
      </Head>
      <Main>
        <Header title="课表" showNav />
      </Main>
    </>
  )
}

export default Timetable
