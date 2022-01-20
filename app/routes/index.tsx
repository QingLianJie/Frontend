import type { InputProps, SystemProps } from '@chakra-ui/react'
import { Flex, Grid, GridItem, Input } from '@chakra-ui/react'
import { groupBy, sortBy } from 'lodash'
import type { LoaderFunction } from 'remix'
import { Form, json } from 'remix'
import { Bridge } from '~/components/app/bridge/Bridge'
import { Feeds } from '~/components/app/home/feeds/Feeds'
import { External } from '~/components/app/home/links/External'
import { Help } from '~/components/app/home/links/Help'
import { Mobile } from '~/components/app/home/links/Mobile'
import { Nav } from '~/components/app/home/links/Nav'
import { Notes } from '~/components/app/home/Notes'
import { Search } from '~/components/common/Search'
import feeds from '~/contents/mocks/feeds/feeds.json'
import notes from '~/contents/mocks/notes/notes.json'
import styles from '~/libs/markdown.css'
import type { IFeeds, INotes } from '~/types'

export function links() {
  return [{ rel: 'stylesheet', href: styles }]
}

export type IndexLoader = {
  feeds: IFeeds
  group: { [key: string]: IFeeds }
  notes: INotes
}

export const loader: LoaderFunction = async ({ request }) => {
  // TODO: 获取 feeds 和 notes
  const group = sortBy(
    groupBy(feeds, f => f.course.id),
    g => g[0].id
  ).reverse()

  const error = null

  return json({ feeds, group, notes, error })
}

export default function IndexPage() {
  const isPhone = { base: 'flex', sm: 'none' }
  const isNotPhone = { base: 'none', sm: 'flex' }
  const isPad = { base: 'none', sm: 'flex', md: 'none' }

  const isMobile = { base: 'flex', md: 'none' } // Phone + Pad
  const isDesktop = { base: 'none', md: 'flex' } // !Mobile

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
      <GridItem
        d="grid"
        gridTemplateColumns="100%"
        gridGap="4"
        rowStart={{ base: 2, md: 'auto' }}
      >
        <Nav d={isDesktop} />
        <External id="links" />
      </GridItem>

      <GridItem
        rowSpan={{ base: 1, sm: 2, md: 1 }}
        d="grid"
        gridTemplateColumns="100%"
        gridGap="4"
      >
        <SearchBar d={isDesktop} />
        <Feeds />
      </GridItem>

      <GridItem
        d="grid"
        gridTemplateColumns="100%"
        gridGap="4"
        rowStart={{ base: 1, md: 'auto' }}
      >
        <SearchBar d={isMobile} />
        <Nav d={isPad} />
        <Mobile d={isPhone} />
        <Bridge />
        <Notes id="notes" />
        <Help d={isNotPhone} />
      </GridItem>
    </Grid>
  )
}

interface SearchProps extends SystemProps, InputProps {}

const SearchBar = ({ ...props }: SearchProps) => (
  <Flex as={Form} method="get" action="/courses" {...props}>
    <Search name="name" placeholder="搜索课程名称或 ID" />
  </Flex>
)
