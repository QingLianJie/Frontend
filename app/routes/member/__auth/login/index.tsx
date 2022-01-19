import { Button, Input as ChakraInput, VStack } from '@chakra-ui/react'
import { RiLockPasswordLine, RiMailLine } from 'react-icons/ri'
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

export const action: ActionFunction = async ({ request }) => {
  const body = await request.formData()
  const name = body.get('name')
  const password = body.get('password')
  const from = (body.get('from') as string) ?? '/'

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
          placeholder="用户名或邮箱"
          autoComplete="username"
          autoFocus
          icon={RiMailLine}
        />
        <Input
          type="password"
          name="password"
          placeholder="密码"
          autoComplete="current-password"
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
