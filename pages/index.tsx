import { Container, Grid, GridItem } from '@chakra-ui/react'
import Head from 'next/head'
import Header from '../components/layout/header/Header'

const IndexPage = () => {
  return (
    <>
      <Head>
        <title>清廉街</title>
      </Head>
      <Header />
      <Container width="full" maxW="container.xl" py="4" px="8">
        <Grid
          templateColumns="repeat(4, 1fr)"
          gap={{ base: 8, md: 12, lg: 16 }}
        >
          <GridItem colSpan={{ base: 4, md: 1 }}>快捷方式</GridItem>
          <GridItem colSpan={{ base: 4, md: 3, lg: 2 }}>时间线</GridItem>
          <GridItem colSpan={{ base: 4, lg: 1 }}>公告板</GridItem>
        </Grid>
      </Container>
    </>
  )
}

export default IndexPage
