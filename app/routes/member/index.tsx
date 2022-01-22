import { Grid, GridItem } from '@chakra-ui/react'
import type { ActionFunction, LoaderFunction } from 'remix'
import { json, redirect, useActionData, useTransition } from 'remix'
import { Notes } from '~/components/app/home/Notes'
import { Comments } from '~/components/app/member/comments/Comments'
import { Controls } from '~/components/app/member/Controls'
import { Help } from '~/components/app/member/Help'
import { Profile } from '~/components/app/member/Profile'
import { ResponseToast } from '~/components/common/actions/ResponseToast'
import comments from '~/contents/mocks/member/comments/comments.json'
import notes from '~/contents/mocks/notes/notes.json'
import styles from '~/libs/markdown.css'
import { commitSession, getSession } from '~/sessions'
import type {
  IMember,
  IMemberComment,
  INotes,
  IResponse,
  MemberType,
} from '~/types'

export function links() {
  return [{ rel: 'stylesheet', href: styles }]
}

export const action: ActionFunction = async ({ request }) => {
  const session = await getSession(request.headers.get('Cookie'))

  if (request.method === 'DELETE') {
    session.unset('member')

    return json<IResponse<MemberType>>(
      {
        status: '可以',
        type: '删除账号',
        message: '已删除账号及评论数据',
      },
      { headers: { 'Set-Cookie': await commitSession(session) } }
    )
  }

  return null
}

export type MemberLoader = {
  member: IMember | null
  notes: INotes | null
  comments: IMemberComment[] | null
}

export const loader: LoaderFunction = async ({ request }) => {
  const session = await getSession(request.headers.get('Cookie'))
  const member = session.get('member')

  if (member) {
    return json<MemberLoader>(
      { notes, member, comments },
      { headers: { 'Set-Cookie': await commitSession(session) } }
    )
  }

  return redirect('/member/login?from=/member')
}

export default function MemberPage() {
  return (
    <Grid
      w="full"
      maxW="72rem"
      px={{ base: '4', sm: '6', md: '8' }}
      pb={{ base: '0', sm: '8' }}
      pt={{ base: '12vh', sm: '4' }}
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
        <Profile />
        <Controls />
      </GridItem>

      <GridItem
        rowSpan={{ base: 1, sm: 2, md: 1 }}
        d="grid"
        gridTemplateColumns="100%"
        gridGap="4"
      >
        <Comments />
      </GridItem>

      <GridItem
        d="grid"
        gridTemplateColumns="100%"
        gridGap="4"
        rowStart={{ base: 3, sm: 'auto' }}
      >
        <Help />
        <Notes />
      </GridItem>
    </Grid>
  )
}
