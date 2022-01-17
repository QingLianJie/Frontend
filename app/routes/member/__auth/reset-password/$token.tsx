import { Button, Input as ChakraInput, VStack } from '@chakra-ui/react'
import { useEffect } from 'react'
import { RiLockPasswordLine } from 'react-icons/ri'
import {
  ActionFunction,
  Form,
  json,
  useActionData,
  useParams,
  useTransition,
} from 'remix'
import { Input } from '~/components/common/Input'
import type { IResponse, AuthType } from '~/types'
import { useNavToast } from '~/utils/hooks'
import { sleep } from '~/utils/system'

export const action: ActionFunction = async ({ request }) => {
  const body = await request.formData()
  const password = body.get('password')
  const token = body.get('token') as string

  // TODO: 接入后端注册
  await sleep(1000)

  return json<IResponse<AuthType>>({
    status: '可以',
    type: '重置密码',
    message: '重置成功，请重新登录',
  })
}

export default function ResetPasswordTokenPage() {
  const { token } = useParams()

  const action = useActionData<IResponse<AuthType>>()
  const transition = useTransition()

  const isLoading = transition.state === 'submitting'
  const redirectTo = action?.status === '可以' && '/member/login'

  const toast = useNavToast<AuthType>()
  useEffect(() => action && toast({ to: redirectTo, ...action }), [action])

  return (
    <Form method="post">
      <VStack
        p={{ base: '6', sm: '8' }}
        w="full"
        spacing="4"
        align="flex-start"
      >
        <Input
          type="password"
          name="password"
          placeholder="密码"
          help="8 到 24 个字符，且不能为纯数字"
          autoComplete="new-password"
          autoFocus
          icon={RiLockPasswordLine}
        />
        <Input
          type="password"
          name="password-again"
          placeholder="再次输入密码"
          autoComplete="new-password"
          icon={RiLockPasswordLine}
        />
        <ChakraInput type="hidden" name="token" value={token} />
        <Button
          isFullWidth
          isLoading={isLoading}
          variant="solid"
          type="submit"
          colorScheme="yellow"
        >
          确认重置
        </Button>
      </VStack>
    </Form>
  )
}
