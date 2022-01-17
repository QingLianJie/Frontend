import { ActionFunction, LoaderFunction, redirect } from 'remix'
import { commitSession, getSession } from '~/sessions'

export const loader: LoaderFunction = async ({ request }) => {
  const session = await getSession(request.headers.get('Cookie'))

  return redirect('/', {
    headers: {
      'Set-Cookie': await commitSession(session),
    },
  })
}

export const action: ActionFunction = async ({ request }) => {
  return null
}
