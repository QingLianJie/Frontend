import { Grid, GridItem, Spacer } from '@chakra-ui/react'
import Head from 'next/head'
import Notices from '../components/app/home/Notices'
import Shortcuts from '../components/app/home/Shortcuts'
import Timeline from '../components/app/home/Timeline'
import MainContainer from '../components/common/container/Main'
import fetcher from '../utils/fetcher'
import { timelineMerge } from '../utils/merge'

interface IndexPageProps {
  timeline: (ICourseComment | IRecentCourseGrade)[]
}

const IndexPage = ({ timeline }: IndexPageProps) => {
  return (
    <>
      <Head>
        <title>清廉街</title>
      </Head>
      <MainContainer gray>
        <Grid
          templateColumns={{ base: 'repeat(4, 1fr)', lg: 'repeat(16, 1fr)' }}
          gap={{ base: 8, md: 12 }}
        >
          <GridItem colSpan={{ base: 4, md: 2, lg: 3 }}>
            <Shortcuts />
          </GridItem>
          <GridItem colSpan={{ base: 4, md: 4, lg: 9 }}>
            <Timeline timeline={timeline} />
          </GridItem>
          <GridItem
            colSpan={{ base: 4, md: 2, lg: 4 }}
            rowStart={{ base: 2, md: 1, lg: 'auto' }}
            colStart={{ base: 1, md: 3, lg: 'auto' }}
          >
            <Notices />
          </GridItem>
        </Grid>
      </MainContainer>
    </>
  )
}

export default IndexPage

export async function getServerSideProps() {
  const baseURL = process.env.NEXT_PUBLIC_BASE_API_URL
  const grades = await fetcher(`${baseURL}/api/recent/grade/courses`)
  const comments = await fetcher(`${baseURL}/api/recent/comments`)
  return { props: { timeline: timelineMerge(comments, grades) } }
}
