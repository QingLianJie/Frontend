import { redirect } from 'remix'
import type { ActionFunction, LoaderFunction } from 'remix'
import { commitSession, getSession } from '~/sessions'

export const action: ActionFunction = async ({ request }) => {
  return null
}

export const loader: LoaderFunction = async ({ request }) => {
  const session = await getSession(request.headers.get('Cookie'))

  return redirect('/', {
    headers: { 'Set-Cookie': await commitSession(session) },
  })
}
