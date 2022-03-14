import { json, redirect, type ActionFunction, type LoaderFunction } from 'remix'
import { commitSession, getSession } from '~/sessions'
import { type IResponse, type MemberType } from '~/types'

export const action: ActionFunction = async ({ request }) => {
  const session = await getSession(request.headers.get('Cookie'))
  session.unset('member')

  return json<IResponse<MemberType>>(
    {
      status: '可以',
      type: '登出',
      message: '已退出登录',
      to: '/member/login?from=/member',
    },
    { headers: { 'Set-Cookie': await commitSession(session) } }
  )
}

export const loader: LoaderFunction = async ({ request }) => {
  const session = await getSession(request.headers.get('Cookie'))
  session.unset('member')

  return redirect('/member/login?from=/member', {
    headers: { 'Set-Cookie': await commitSession(session) },
  })
}
