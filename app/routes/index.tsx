import { Grid, GridItem, Spacer } from '@chakra-ui/react'
import Links from '~/libs/app/home/Links'
import { MobileNav, Nav } from '~/libs/app/home/Nav'
import Layout from '~/libs/layout/Layout'

const IndexPage = () => (
  <Layout>
    <Grid
      w="full"
      maxW="72rem"
      px={{ base: '4', sm: '8' }}
      py={{ base: '0', sm: '12' }}
      templateColumns="repeat(4, 1fr)"
      gap="8"
    >
      <GridItem colSpan={{ base: 4, sm: 2, md: 1 }}>
        <MobileNav />
        <Nav />
        <Spacer h="4" />
        <Links />
      </GridItem>
      <GridItem colSpan={{ base: 4, sm: 4, md: 2 }}></GridItem>
      <GridItem colSpan={{ base: 4, sm: 2, md: 1 }}></GridItem>
    </Grid>
  </Layout>
)

export default IndexPage
