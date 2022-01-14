import { Button, Input as ChakraInput, VStack } from '@chakra-ui/react'
import { useEffect } from 'react'
import { RiLockPasswordLine, RiMailLine, RiUserLine } from 'react-icons/ri'
import {
  ActionFunction,
  Form,
  json,
  useActionData,
  useNavigate,
  useSearchParams,
  useTransition,
} from 'remix'
import { Input } from '~/components/common/forms/Input'
import { useToast } from '~/utils/hooks'
import { sleep } from '~/utils/system'

export const action: ActionFunction = async ({ request }) => {
  const body = await request.formData()
  const email = body.get('email')
  const name = body.get('name')
  const password = body.get('password')
  const from = body.get('from') as string

  // TODO: 接入后端注册
  await sleep(1000)

  return json<IResponse<AuthType>>({
    status: '可以',
    type: '注册',
    message: '欢迎加入「清廉街」',
  })
}

export default function SignupPage() {
  const [params] = useSearchParams()
  const from = params.get('from') ?? '/'

  const navigate = useNavigate()
  const action = useActionData<IResponse<AuthType>>()
  const transition = useTransition()
  const toast = useToast()

  const isLoading = transition.state === 'submitting'

  useEffect(() => {
    if (action) {
      toast({
        status: action.status,
        title: action.message ?? `${action.type}${action.status}`,
      })
      if (action.status === '可以') navigate('/')
    }
  }, [action])

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
          placeholder="用户名"
          help="独一无二的名字，3 到 16 个字符"
          autoComplete="username"
          icon={RiUserLine}
        />
        <Input
          type="email"
          name="email"
          placeholder="邮箱"
          autoComplete="email"
          icon={RiMailLine}
        />
        <Input
          type="password"
          name="password"
          placeholder="密码"
          help="8 到 24 个字符，且不能为纯数字"
          autoComplete="new-password"
          icon={RiLockPasswordLine}
        />
        <Input
          type="password"
          name="password-again"
          placeholder="再次输入密码"
          autoComplete="new-password"
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
