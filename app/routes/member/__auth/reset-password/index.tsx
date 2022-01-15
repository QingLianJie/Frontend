import { Button, VStack } from '@chakra-ui/react'
import { useEffect } from 'react'
import { RiMailLine } from 'react-icons/ri'
import { ActionFunction, Form, json, useActionData, useTransition } from 'remix'
import { Input } from '~/components/common/forms/Input'
import { useNavToast } from '~/utils/hooks'
import { sleep } from '~/utils/system'

export const action: ActionFunction = async ({ request }) => {
  const body = await request.formData()
  const email = body.get('email')

  // TODO: 接入后端重置密码
  await sleep(1000)

  return json<IResponse<AuthType>>({
    status: '可以',
    type: '重置密码',
    message: '已将重置链接发送到邮箱',
  })
}

export default function ResetPasswordPage() {
  const action = useActionData<IResponse<AuthType>>()
  const transition = useTransition()

  const isLoading = transition.state === 'submitting'

  const toast = useNavToast<AuthType>()
  useEffect(() => action && toast({ ...action }), [action])

  return (
    <Form method="post">
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
