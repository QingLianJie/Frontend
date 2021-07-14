import { Container, Grid, GridItem } from '@chakra-ui/react'
import Head from 'next/head'
import NoticeBoard from '../components/app/home/NoticeBoard'
import Shortcuts from '../components/app/home/shortcuts/Shortcuts'
import Timeline from '../components/app/home/timeline/Timeline'
import MainBox from '../components/common/box/MainBox'
import ScreenBox from '../components/common/box/ScreenBox'
import Header from '../components/layout/header/Header'

const IndexPage = () => {
  return (
    <>
      <Head>
        <title>清廉街</title>
      </Head>
      <MainBox>
        <Grid templateColumns="repeat(4, 1fr)" gap="12">
          <GridItem colSpan={{ base: 4, md: 1 }}>
            <Shortcuts />
          </GridItem>
          <GridItem colSpan={{ base: 4, md: 3, lg: 2 }}>
            <Timeline />
          </GridItem>
          <GridItem colSpan={{ base: 4, lg: 1 }}>
            <NoticeBoard />
          </GridItem>
        </Grid>
      </MainBox>
    </>
  )
}

export default IndexPage
