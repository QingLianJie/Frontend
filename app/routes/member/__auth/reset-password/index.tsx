import { Button, VStack } from '@chakra-ui/react'
import { RiMailLine } from 'react-icons/ri'
import type { ActionFunction, MetaFunction } from 'remix'
import { Form, json, useActionData, useTransition } from 'remix'
import { ResponseToast } from '~/components/common/actions/ResponseToast'
import { Input } from '~/components/common/Input'
import type { IResponse, MemberType } from '~/types'

export const meta: MetaFunction = () => ({
  title: '重置密码 - 清廉街',
})

export const action: ActionFunction = async ({ request }) => {
  const body = await request.formData()
  const email = body.get('email')

  // TODO: 接入后端重置密码
  // await sleep(1000)

  return json<IResponse<MemberType>>({
    status: '可以',
    type: '重置密码',
    message: '已将重置链接发送到邮箱',
  })
}

export default function ResetPasswordPage() {
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
          type="email"
          name="email"
          placeholder="注册时用的邮箱"
          autoComplete="email"
          autoFocus
          icon={RiMailLine}
        />
        <Button
          isFullWidth
          isLoading={isLoading}
          variant="solid"
          type="submit"
          colorScheme="yellow"
        >
          发送重置链接
        </Button>
      </VStack>
    </Form>
  )
}
