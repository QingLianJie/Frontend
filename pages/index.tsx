import { Container, Grid, GridItem } from '@chakra-ui/react'
import Head from 'next/head'
import Header from '../components/header/Header'

const IndexPage = () => {
  return (
    <>
      <Head>
        <title>清廉街</title>
      </Head>
      <Header />
      <Container maxW="container.xl">
        <Grid templateColumns="repeat(24, 1fr)">
          <GridItem colSpan={4}>1</GridItem>
          <GridItem colSpan={12}>2</GridItem>
          <GridItem colSpan={6}>3</GridItem>
        </Grid>
      </Container>
    </>
  )
}

export default IndexPage
