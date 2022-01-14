import { Grid, GridItem } from '@chakra-ui/react'
import type { LoaderFunction } from 'remix'
import { Feeds } from '~/components/app/home/feeds/Feeds'
import { ExternalLinks } from '~/components/app/home/links/External'
import { HelpLinks } from '~/components/app/home/links/Help'
import { MobileLinks } from '~/components/app/home/links/Mobile'
import { NavLinks } from '~/components/app/home/links/Nav'
import { Member } from '~/components/app/home/member/Member'
import { Notes } from '~/components/app/home/Notes'
import { Search } from '~/components/app/home/Search'
import feeds from '~/contents/mocks/feeds/feeds.json'
import notes from '~/contents/mocks/notes/notes.json'

export const loader: LoaderFunction = () => {
  // TODO: 获取 feeds 和 notes
  return { feeds, notes }
}

export default function IndexPage() {
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
      <GridItem d="grid" gridTemplateColumns="100%" gridGap="4">
        <Search d={isMobile} />
        <MobileLinks d={isPhone} />
        <NavLinks d={isNotPhone} />
        <Member d={isMobile} />
        <ExternalLinks id="links" />
      </GridItem>

      <GridItem
        rowSpan={{ base: 1, sm: 2, md: 1 }}
        d="grid"
        gridTemplateColumns="100%"
        gridGap="4"
      >
        <Search d={isDesktop} />
        <Feeds />
      </GridItem>

      <GridItem d="grid" gridTemplateColumns="100%" gridGap="4">
        <Member d={isDesktop} />
        <Notes />
        <HelpLinks d={isNotPhone} />
      </GridItem>
    </Grid>
  )
}
