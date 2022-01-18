import type { ActionFunction, LoaderFunction } from 'remix'
import { redirect } from 'remix'
import { commitSession, getSession } from '~/sessions'

export const action: ActionFunction = async ({ request }) => {
  const session = await getSession(request.headers.get('Cookie'))
  session.unset('member')

  return redirect('/member/login?from=/member', {
    headers: { 'Set-Cookie': await commitSession(session) },
  })
}

export const loader: LoaderFunction = async () => {
  return redirect('/member/login?from=/member')
}
