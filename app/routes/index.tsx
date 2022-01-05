import { Grid, GridItem, VStack } from '@chakra-ui/react'
import { HomeLinks } from '~/libs/app/home/Links'
import { HomeNav } from '~/libs/app/home/Nav'
import { HomeSearch } from '~/libs/app/home/Search'
import { Layout } from '~/libs/layout/Layout'

export default function IndexPage() {
  return (
    <Layout>
      <Grid
        w="full"
        maxW="72rem"
        px={{ base: '4', sm: '8' }}
        py={{ base: '0', sm: '8' }}
        templateColumns="repeat(4, 1fr)"
        gap="4"
      >
        <GridItem w="full" colSpan={{ base: 4, sm: 2, md: 1 }}>
          <VStack align="flex-start" spacing="4">
            <HomeNav />
            <HomeLinks />
          </VStack>
        </GridItem>
        <GridItem colSpan={{ base: 4, sm: 4, md: 2 }}>
          <VStack align="flex-start" spacing="4">
            <HomeSearch />
          </VStack>
        </GridItem>
        <GridItem colSpan={{ base: 4, sm: 2, md: 1 }}></GridItem>
      </Grid>
    </Layout>
  )
}
