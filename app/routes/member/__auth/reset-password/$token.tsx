import { ActionFunction, json } from 'remix'

export const action: ActionFunction = async ({ request }) => {
  const body = await request.formData()
  return null
}

export default function ResetPasswordTokenPage() {
  return null
}
