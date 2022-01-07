import { Grid, GridItem, VStack } from '@chakra-ui/react'
import { LoaderFunction, useLoaderData } from 'remix'
import feeds from '~/contents/mocks/feeds/feeds.json'
import { HomeNotes } from '~/libs/app/home/Notes'
import { HomeFeeds } from '~/libs/app/home/feeds/Feeds'
import { HomeLinks } from '~/libs/app/home/Links'
import { HomeMember } from '~/libs/app/home/Member'
import { HomeNav } from '~/libs/app/home/Nav'
import { HomeSearch } from '~/libs/app/home/Search'
import { HomeTips } from '~/libs/app/home/Tips'
import { Layout } from '~/libs/layout/Layout'

export const loader: LoaderFunction = () => {
  return { feeds }
}

export default function IndexPage() {
  const { feeds } = useLoaderData()

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
            <HomeFeeds feeds={feeds} />
          </VStack>
        </GridItem>
        <GridItem colSpan={{ base: 4, sm: 2, md: 1 }}>
          <VStack align="flex-start" spacing="4">
            <HomeMember />
            <HomeNotes />
            <HomeTips />
          </VStack>
        </GridItem>
      </Grid>
    </Layout>
  )
}
