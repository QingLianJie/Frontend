import type { ActionFunction, LoaderFunction } from 'remix'
import { redirect } from 'remix'

export const action: ActionFunction = async ({ request }) => {
  return null
}

export const loader: LoaderFunction = async () => {
  return redirect('/')
}
