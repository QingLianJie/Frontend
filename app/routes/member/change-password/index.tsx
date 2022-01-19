import type { ActionFunction, LoaderFunction } from 'remix'
import { json, redirect } from 'remix'
import { commitSession, getSession } from '~/sessions'
import type { IResponse, MemberType } from '~/types'

export const action: ActionFunction = async ({ request }) => {
  const session = await getSession(request.headers.get('Cookie'))
  session.unset('member')

  return json<IResponse<MemberType>>(
    {
      status: '可以',
      type: '修改密码',
      message: '修改密码成功，请重新登录',
    },
    { headers: { 'Set-Cookie': await commitSession(session) } }
  )
}

export const loader: LoaderFunction = async () => {
  return redirect('/member')
}
