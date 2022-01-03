import { Grid, GridItem } from '@chakra-ui/react'
import Nav from '~/libs/app/home/Nav'
import Layout from '~/libs/layout/Layout'

const IndexPage = () => (
  <Layout>
    <Grid
      w="full"
      maxW="72rem"
      px={{ base: '6', sm: '8' }}
      py={{ base: '8', sm: '12' }}
      templateColumns="repeat(4, 1fr)"
      gap="8"
    >
      <GridItem colSpan={1}>
        <Nav />
      </GridItem>
      <GridItem colSpan={2}></GridItem>
      <GridItem colSpan={1}></GridItem>
    </Grid>
  </Layout>
)

export default IndexPage
