import { Grid, GridItem } from '@chakra-ui/react'
import Head from 'next/head'
import Notices from '../components/app/home/notices/Notices'
import Shortcuts from '../components/app/home/shortcuts/Shortcuts'
import Timeline from '../components/app/home/timeline/Timeline'
import MainBox from '../components/common/box/MainBox'

const IndexPage = () => {
  return (
    <>
      <Head>
        <title>清廉街</title>
      </Head>
      <MainBox>
        <Grid templateColumns="repeat(4, 1fr)" gap="8">
          <GridItem colSpan={{ base: 4, md: 2, lg: 1 }}>
            <Shortcuts />
          </GridItem>
          <GridItem colSpan={{ base: 4, md: 4, lg: 2 }}>
            <Timeline />
          </GridItem>
          <GridItem
            colSpan={{ base: 4, md: 2, lg: 1 }}
            rowStart={{ base: 'auto', md: 1, lg: 'auto' }}
            colStart={{ base: 'auto', md: 3, lg: 'auto' }}
          >
            <Notices />
          </GridItem>
        </Grid>
      </MainBox>
    </>
  )
}

export default IndexPage
