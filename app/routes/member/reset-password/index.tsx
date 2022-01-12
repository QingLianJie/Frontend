import { ActionFunction, json } from 'remix'

export const action: ActionFunction = async ({ request }) => {
  const body = await request.formData()
  const email = body.get('email')
  console.log(email)

  return json({
    code: 0,
    message: 'ok',
  })
}
