import { Button, Input as ChakraInput, VStack } from '@chakra-ui/react'
import { RiLockPasswordLine, RiMailLine } from 'react-icons/ri'
import {
  Form,
  json,
  useActionData,
  useNavigate,
  useSearchParams,
  useTransition,
} from 'remix'
import type { ActionFunction } from 'remix'
import { Input } from '~/components/common/Input'
import { commitSession, getSession } from '~/sessions'
import type { AuthType, IResponse } from '~/types'
import { useEffect } from 'react'
import { useResponseToast } from '~/utils/hooks'

export const action: ActionFunction = async ({ request }) => {
  const body = await request.formData()
  const name = body.get('name')
  const password = body.get('password')
  const from = (body.get('from') as string) ?? '/'

  // TODO: 接入后端登录
  // await sleep(1000)
  const session = await getSession(request.headers.get('Cookie'))
  session.set('member', { email: name, id: 0, name: 'Test' })

  return json<IResponse<AuthType>>(
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

  const transition = useTransition()
  const isLoading = transition.state === 'submitting'

  const action = useActionData<IResponse<AuthType>>()
  const navigate = useNavigate()
  const toast = useResponseToast<AuthType>()

  useEffect(() => {
    if (action && transition.state === 'idle') {
      toast({ ...action })
      if (action.status === '可以' && action.to) navigate(action.to)
    }
  }, [action, transition])

  return (
    <Form method="post">
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
