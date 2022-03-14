import { Button, Input as ChakraInput, VStack } from '@chakra-ui/react'
import { RiLockPasswordLine, RiMailLine, RiUserLine } from 'react-icons/ri'
import {
  Form,
  json,
  useActionData,
  useSearchParams,
  useTransition,
  type ActionFunction,
  type MetaFunction,
} from 'remix'
import { ResponseToast } from '~/components/common/actions/ResponseToast'
import { Input } from '~/components/common/Input'
import { commitSession, getSession } from '~/sessions'
import { type IResponse, type MemberType } from '~/types'
import {
  EmailRegex,
  listIt,
  NameRegex,
  PasswordRegex,
  PasswordRegexText,
} from '~/utils/system'

export const meta: MetaFunction = () => ({
  title: '注册 - 清廉街',
})

export const action: ActionFunction = async ({ request }) => {
  const body = await request.formData()
  const email = body.get('email') as string
  const name = body.get('name') as string
  const password = body.get('password') as string
  const password2 = body.get('password-again') as string
  const from = (body.get('from') as string) ?? '/'

  const error = []
  let message = ''

  if (!NameRegex.test(name)) error.push('用户名')
  if (!EmailRegex.test(email)) error.push('邮箱')
  if (!PasswordRegex.test(password)) error.push('密码')

  if (password !== password2) {
    error.push('重复密码')
    message = '两次密码不一致'
  }

  if (error.length !== 0) {
    return json<IResponse<MemberType>>({
      status: '有问题',
      type: '注册',
      message: message || `${listIt(error)}格式错误`,
      error,
    })
  }

  // TODO: 接入后端注册
  // await sleep(1000)
  const session = await getSession(request.headers.get('Cookie'))
  session.set('member', { email, id: 1, name })

  return json<IResponse<MemberType>>(
    {
      status: '可以',
      type: '注册',
      message: '欢迎加入「清廉街」',
      to: from,
    },
    { headers: { 'Set-Cookie': await commitSession(session) } }
  )
}

export default function SignupPage() {
  const [params] = useSearchParams()
  const from = params.get('from') ?? '/'

  const action = useActionData<IResponse<MemberType>>()
  const transition = useTransition()

  const isLoading = transition.state === 'submitting'
  const isDone = transition.state === 'idle'

  return (
    <Form method="post">
      <ResponseToast action={action} state={isDone} />
      <VStack
        p={{ base: '6', sm: '8' }}
        w="full"
        spacing="4"
        align="flex-start"
      >
        <Input
          type="text"
          name="name"
          placeholder="用户名"
          help="独一无二的名字，3 到 16 个字符"
          autoComplete="username"
          autoFocus
          maxLength={16}
          minLength={3}
          isInvalid={action?.error?.includes('用户名')}
          icon={RiUserLine}
        />
        <Input
          type="email"
          name="email"
          placeholder="邮箱"
          autoComplete="email"
          isInvalid={action?.error?.includes('邮箱')}
          icon={RiMailLine}
        />
        <Input
          type="password"
          name="password"
          placeholder="密码"
          help="8 到 24 个字符，且不能为纯数字"
          autoComplete="new-password"
          minLength={8}
          maxLength={24}
          pattern={PasswordRegexText}
          isInvalid={action?.error?.includes('密码')}
          icon={RiLockPasswordLine}
        />
        <Input
          type="password"
          name="password-again"
          placeholder="再次输入密码"
          autoComplete="new-password"
          minLength={8}
          maxLength={24}
          pattern={PasswordRegexText}
          isInvalid={action?.error?.includes('重复密码')}
          icon={RiLockPasswordLine}
        />
        <ChakraInput type="hidden" name="from" value={from} />
        <Button
          isFullWidth
          isLoading={isLoading}
          variant="solid"
          type="submit"
          colorScheme="blue"
        >
          注册
        </Button>
      </VStack>
    </Form>
  )
}
