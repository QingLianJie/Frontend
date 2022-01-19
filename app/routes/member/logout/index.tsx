import type { ActionFunction, LoaderFunction } from 'remix'
import { json, redirect } from 'remix'
import { commitSession, getSession } from '~/sessions'
import type { MemberType, IResponse } from '~/types'

export const action: ActionFunction = async ({ request }) => {
  const session = await getSession(request.headers.get('Cookie'))
  session.unset('member')

  return json<IResponse<MemberType>>(
    {
      status: '可以',
      type: '登出',
      message: '已退出登录，正在跳转登录页面',
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
