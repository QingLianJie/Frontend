import { LoaderFunction, redirect } from 'remix'

export const loader: LoaderFunction = async ({ request }) => {
  return redirect(`/404?from=${new URL(request.url).pathname}`)
}
