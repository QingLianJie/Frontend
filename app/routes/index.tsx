import { Grid, GridItem, Spacer } from '@chakra-ui/react'
import { LoaderFunction, useLoaderData } from 'remix'
import { HomeApps } from '~/components/app/home/Apps'
import { HomeFeeds } from '~/components/app/home/feeds/Feeds'
import { HomeLinks } from '~/components/app/home/Links'
import { HomeMember } from '~/components/app/home/Member'
import { HomeNav } from '~/components/app/home/Nav'
import { HomeNotes } from '~/components/app/home/Notes'
import { HomeSearch } from '~/components/app/home/Search'
import { HomeTips } from '~/components/app/home/Tips'
import feeds from '~/contents/mocks/feeds/feeds.json'
import notes from '~/contents/mocks/notes/notes.json'

interface HomeLoader {
  feeds: IFeeds
  notes: INotes
}

export const loader: LoaderFunction = () => {
  // TODO: 获取 feeds 和 notes
  return { feeds, notes }
}

export default function IndexPage() {
  const { feeds, notes } = useLoaderData<HomeLoader>()

  const isPhone = { base: 'flex', sm: 'none' }
  const isNotPhone = { base: 'none', sm: 'flex' }
  const isMobile = { base: 'flex', md: 'none' }
  const isDesktop = { base: 'none', md: 'flex' }

  return (
    <Grid
      w="full"
      maxW="72rem"
      px={{ base: '4', sm: '6', md: '8' }}
      pb={{ base: '0', sm: '8' }}
      pt={{ base: '12vh', sm: '8' }}
      alignItems="start"
      alignContent="start"
      justifyContent="center"
      templateColumns={{
        base: '1fr',
        sm: 'minmax(0, 3fr) minmax(0, 5fr)',
        md: 'minmax(0, 1fr) minmax(0, 2fr) minmax(0, 1fr)',
      }}
      gap="4"
    >
      <GridItem>
        <HomeApps d={isPhone} />
        <Spacer h="4" d={isPhone} />
        <HomeSearch d={isMobile} />
        <Spacer h="4" d={isMobile} />
        <HomeNav d={isNotPhone} />
        <Spacer h="4" d={isNotPhone} />
        <HomeMember d={isMobile} />
        <Spacer h="4" d={isMobile} />
        <HomeLinks id="links" />
      </GridItem>

      <GridItem rowSpan={{ base: 1, sm: 2, md: 1 }}>
        <HomeSearch d={isDesktop} />
        <Spacer h="4" d={isDesktop} />
        <HomeFeeds feeds={feeds} />
      </GridItem>

      <GridItem>
        <HomeMember d={isDesktop} />
        <Spacer h="4" d={isDesktop} />
        <HomeNotes notes={notes} />
        <Spacer h="4" d={isNotPhone} />
        <HomeTips d={isNotPhone} />
      </GridItem>
    </Grid>
  )
}
