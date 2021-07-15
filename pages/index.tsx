import { Grid, GridItem } from '@chakra-ui/react'
import Head from 'next/head'
import Notices from '../components/app/home/notices/Notices'
import Shortcuts from '../components/app/home/shortcuts/Shortcuts'
import Timeline from '../components/app/home/timeline/Timeline'
import MainContainer from '../components/common/container/Main'

const IndexPage = () => {
  return (
    <>
      <Head>
        <title>清廉街</title>
      </Head>
      <MainContainer gray>
        <Grid
          templateColumns={{ base: 'repeat(4, 1fr)', lg: 'repeat(11, 1fr)' }}
          gap={{ base: 8, md: 12, lg: 14 }}
        >
          <GridItem colSpan={{ base: 4, md: 2, lg: 2 }}>
            <Shortcuts />
          </GridItem>
          <GridItem colSpan={{ base: 4, md: 4, lg: 6 }}>
            <Timeline />
          </GridItem>
          <GridItem
            colSpan={{ base: 4, md: 2, lg: 3 }}
            rowStart={{ base: 'auto', md: 1, lg: 'auto' }}
            colStart={{ base: 'auto', md: 3, lg: 'auto' }}
          >
            <Notices />
          </GridItem>
        </Grid>
      </MainContainer>
    </>
  )
}

export default IndexPage
