import { Grid, GridItem, InputProps, SystemProps } from '@chakra-ui/react'
import { groupBy, sortBy } from 'lodash'
import type { ActionFunction, LoaderFunction } from 'remix'
import { json } from 'remix'
import { Bridge } from '~/components/app/home/Bridge'
import { Feeds } from '~/components/app/home/feeds/Feeds'
import { ExternalLinks } from '~/components/app/home/links/External'
import { HelpLinks } from '~/components/app/home/links/Help'
import { MobileLinks } from '~/components/app/home/links/Mobile'
import { NavLinks } from '~/components/app/home/links/Nav'
import { Notes } from '~/components/app/home/Notes'
import { Search } from '~/components/common/actions/Search'
import feeds from '~/contents/mocks/feeds/feeds.json'
import notes from '~/contents/mocks/notes/notes.json'
import styles from '~/libs/markdown.css'
import { commitSession, getSession } from '~/sessions'
import type { BridgeType, IAccount, IFeeds, INotes, IResponse } from '~/types'

export function links() {
  return [{ rel: 'stylesheet', href: styles }]
}

export const action: ActionFunction = async ({ request }) => {
  const session = await getSession(request.headers.get('Cookie'))

  switch (request.method) {
    case 'POST': {
      const body = await request.formData()
      const id = body.get('id') as string
      const password = body.get('password') as string
      session.set('account', { id, password })

      return json<IResponse<BridgeType>>(
        {
          status: '可以',
          type: '绑定账号',
          message: '已绑定账号到这个设备',
        },
        {
          headers: {
            'Set-Cookie': await commitSession(session),
          },
        }
      )
    }
    case 'DELETE': {
      session.unset('account')
      return json(
        {
          status: '可以',
          type: '解绑账号',
          message: '已解绑账号并删除数据',
        },
        {
          headers: {
            'Set-Cookie': await commitSession(session),
          },
        }
      )
    }
    default: {
      return null
    }
  }
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
      <GridItem
        d="grid"
        gridTemplateColumns="100%"
        gridGap="4"
        rowStart={{ base: 2, md: 'auto' }}
      >
        <NavLinks d={isDesktop} />
        <ExternalLinks id="links" />
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
        <NavLinks d={isPad} />
        <MobileLinks d={isPhone} />
        <Bridge id="bridge" />
        <Notes id="notes" />
        <HelpLinks d={isNotPhone} />
      </GridItem>
    </Grid>
  )
}

interface SearchProps extends SystemProps, InputProps {}

const SearchBar = ({ ...props }: SearchProps) => (
  <Search placeholder="搜索课程" {...props} />
)
