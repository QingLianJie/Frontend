import { Button, Input as ChakraInput, VStack } from '@chakra-ui/react'
import { RiLockPasswordLine } from 'react-icons/ri'
import type { ActionFunction, MetaFunction } from 'remix'
import { Form, json, useActionData, useParams, useTransition } from 'remix'
import { ResponseToast } from '~/components/common/actions/ResponseToast'
import { Input } from '~/components/common/Input'
import type { IResponse, MemberType } from '~/types'
import { listIt, PasswordRegex, PasswordRegexText, sleep } from '~/utils/system'

export const meta: MetaFunction = () => ({
  title: '重置密码确认 - 清廉街',
})

export const action: ActionFunction = async ({ request }) => {
  const body = await request.formData()
  const password = body.get('password') as string
  const password2 = body.get('password-again') as string
  const token = body.get('token') as string

  const error = []
  let message = ''

  if (!PasswordRegex.test(password)) error.push('密码')

  if (password !== password2) {
    error.push('重复密码')
    message = '两次密码不一致'
  }

  if (error.length !== 0) {
    return json<IResponse<MemberType>>({
      status: '有问题',
      type: '重置密码',
      message: message || `${listIt(error)}格式错误`,
      error,
    })
  }

  // TODO: 接入后端注册
  await sleep(1000)

  return json<IResponse<MemberType>>({
    status: '可以',
    type: '重置密码',
    message: '重置成功，请重新登录',
    to: '/member/login',
  })
}

export default function ResetPasswordTokenPage() {
  const { token } = useParams()

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
          type="password"
          name="password"
          placeholder="密码"
          help="8 到 24 个字符，且不能为纯数字"
          autoComplete="new-password"
          autoFocus
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
