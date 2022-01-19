import { Button, Input as ChakraInput, VStack } from '@chakra-ui/react'
import { useState } from 'react'
import { RiLockPasswordLine, RiMailLine, RiUserLine } from 'react-icons/ri'
import type { ActionFunction } from 'remix'
import {
  Form,
  json,
  useActionData,
  useSearchParams,
  useTransition,
} from 'remix'
import { ResponseToast } from '~/components/common/actions/ResponseToast'
import { Input } from '~/components/common/Input'
import { commitSession, getSession } from '~/sessions'
import type { IResponse, MemberType } from '~/types'
import { EmailRegex, NameRegex, PasswordRegex } from '~/utils/system'

type NameType = 'username' | 'email'

export const action: ActionFunction = async ({ request }) => {
  const body = await request.formData()
  const name = body.get('name') as string
  const password = body.get('password') as string
  const from = (body.get('from') as string) ?? '/'

  const error = []

  // 登录暂时无需验证格式
  //
  // if (!NameRegex.test(name) && !EmailRegex.test(name)) error.push('用户名或邮箱')
  // if (!PasswordRegex.test(password)) error.push('密码')

  // if (error.length !== 0) {
  //   return json<IResponse<MemberType>>({
  //     status: '有问题',
  //     type: '登录',
  //     message: `${listIt(error)}格式错误`,
  //     error,
  //   })
  // }

  // TODO: 接入后端登录
  // await sleep(1000)
  const session = await getSession(request.headers.get('Cookie'))
  session.set('member', { email: name, id: 0, name: 'Test' })

  return json<IResponse<MemberType>>(
    {
      status: '可以',
      type: '登录',
      message: '已登录到「清廉街」',
      to: from,
    },
    { headers: { 'Set-Cookie': await commitSession(session) } }
  )
}

export default function LoginPage() {
  const [params] = useSearchParams()
  const from = params.get('from') ?? '/'

  const action = useActionData<IResponse<MemberType>>()
  const transition = useTransition()

  const isLoading = transition.state === 'submitting'
  const isDone = transition.state === 'idle'

  const [nameType, setNameType] = useState<NameType>('username')
  const isEmail = nameType === 'email'

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
          type={isEmail ? 'email' : 'text'}
          name="name"
          placeholder="用户名或邮箱"
          autoComplete={nameType}
          autoFocus
          isInvalid={action?.error?.includes('用户名或邮箱')}
          icon={isEmail ? RiMailLine : RiUserLine}
          onChange={e =>
            setNameType(EmailRegex.test(e.target.value) ? 'email' : 'username')
          }
        />
        <Input
          type="password"
          name="password"
          placeholder="密码"
          autoComplete="current-password"
          isInvalid={action?.error?.includes('密码')}
          icon={RiLockPasswordLine}
        />
        <ChakraInput type="hidden" name="from" value={from} />
        <Button
          isFullWidth
          isLoading={isLoading}
          variant="solid"
          type="submit"
          colorScheme="green"
        >
          登录
        </Button>
      </VStack>
    </Form>
  )
}
