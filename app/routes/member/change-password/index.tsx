import type { ActionFunction, LoaderFunction } from 'remix'
import { json, redirect } from 'remix'
import { commitSession, getSession } from '~/sessions'
import type { IResponse, MemberType } from '~/types'
import { listIt, PasswordRegex } from '~/utils/system'

export const action: ActionFunction = async ({ request }) => {
  const body = await request.formData()
  const password0 = body.get('old-password') as string
  const password1 = body.get('new-password') as string
  const password2 = body.get('new-password-again') as string

  const error = []
  let message = ''

  if (!PasswordRegex.test(password1)) error.push('新密码')

  if (password1 !== password2) {
    error.push('重复新密码')
    message = '两次密码不一致'
  }

  if (error.length !== 0) {
    return json<IResponse<MemberType>>({
      status: '有问题',
      type: '修改密码',
      message: message || `${listIt(error)}格式错误`,
      error,
    })
  }

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
