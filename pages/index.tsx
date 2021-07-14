import { Container, Grid, GridItem } from '@chakra-ui/react'
import Head from 'next/head'
import NoticeBoard from '../components/app/home/NoticeBoard'
import Shortcuts from '../components/app/home/shortcuts/Shortcuts'
import Timeline from '../components/app/home/timeline/Timeline'
import Header from '../components/layout/header/Header'

const IndexPage = () => {
  return (
    <>
      <Head>
        <title>清廉街</title>
      </Head>
      <Header />
      <Container
        width="full"
        maxW="container.xl"
        py="4"
        px={{ base: 8, md: 12 }}
      >
        <Grid
          templateColumns="repeat(4, 1fr)"
          gap={{ base: 8, md: 12, lg: 16 }}
        >
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
      </Container>
    </>
  )
}

export default IndexPage
