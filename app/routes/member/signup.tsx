import { ActionFunction, redirect } from 'remix'

export const action: ActionFunction = async ({ request }) => {
  const body = await request.formData()
  const email = body.get('email')
  const name = body.get('name')
  const password = body.get('password')
  const from = body.get('from') as string
  console.log(email, name, password, from)

  return redirect(from ?? '/')
}
