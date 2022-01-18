import {
  Button,
  ButtonProps,
  Icon,
  Link,
  SimpleGrid,
  Text,
} from '@chakra-ui/react'
import { useEffect } from 'react'
import { IconType } from 'react-icons'
import {
  RiDeleteBinLine,
  RiLockLine,
  RiLogoutBoxRLine,
  RiUpload2Line,
} from 'react-icons/ri'
import { useActionData, useLoaderData, useSubmit, useTransition } from 'remix'
import { Card } from '~/components/common/Card'
import type { MemberLoader } from '~/routes/member/index'
import type { AuthType } from '~/types'
import { useResponseToast } from '~/utils/hooks'

export const Actions = () => {
  const { member } = useLoaderData<MemberLoader>()

  const submit = useSubmit()
  const action = useActionData()
  const toast = useResponseToast<AuthType>()
  useEffect(() => action && toast({ ...action }), [action])

  const transition = useTransition()
  const isLoading = transition.state !== 'idle'

  const handleLogout = () =>
    submit(null, { method: 'post', action: '/member/logout' })

  const handleDeleteMember = () => {
    if (member?.email) {
      const ans = prompt('输入你的邮箱来确认删除账号，这个操作不可逆。')
      if (ans === member.email)
        submit(null, { method: 'delete', action: '/member' })
    }
  }

  return (
    <Card title="账号管理">
      <SimpleGrid
        w="full"
        templateColumns={{
          base: 'repeat(auto-fill, minmax(50%, 1fr))',
          sm: '100%',
        }}
        px={{ base: '4', sm: '0' }}
        pb="0"
        pt={{ base: '2', sm: '2' }}
      >
        <ActionItem
          text="退出登录"
          onClick={handleLogout}
          icon={RiLogoutBoxRLine}
          color="blue"
          disabled={isLoading}
        />
        <ActionItem
          text="上传成绩"
          icon={RiUpload2Line}
          color="yellow"
          disabled={isLoading}
        />
        <ActionItem
          text="修改密码"
          icon={RiLockLine}
          color="green"
          disabled={isLoading}
        />
        <ActionItem
          text="删除账号"
          onClick={handleDeleteMember}
          icon={RiDeleteBinLine}
          color="red"
          disabled={isLoading}
        />
      </SimpleGrid>

      <Text
        px="6"
        pt="2"
        pb="6"
        fontSize="sm"
        lineHeight="tall"
        color="gray.500"
        _dark={{ color: 'gray.400' }}
      >
        没有头像？我们使用&nbsp;
        <Link
          href="https://gravatar.com/"
          isExternal
          color="purple.500"
          _dark={{ color: 'blue.400' }}
          textUnderlineOffset="0.25rem"
        >
          Gravatar
        </Link>
        &nbsp;来提供头像，可以去注册一个。
      </Text>
    </Card>
  )
}

interface ActionItemProps extends ButtonProps {
  text: string
  icon: IconType
  color: string
}

const ActionItem = ({ text, icon, color, ...props }: ActionItemProps) => (
  <Button
    w="full"
    h={{ base: 'auto', sm: '10' }}
    alignItems="center"
    justifyContent={{ base: 'center', sm: 'flex-start' }}
    pl={{ base: '4', sm: '6' }}
    pr={{ base: '6', sm: '6' }}
    py={{ base: '3', sm: '0' }}
    fontWeight="normal"
    rounded={{ base: 'md', sm: 'none' }}
    variant="ghost"
    {...props}
  >
    <Icon
      as={icon}
      aria-label={text}
      mr="4"
      fontSize="xl"
      color={`${color}.500`}
    />
    <Text as="span" isTruncated>
      {text}
    </Text>
  </Button>
)
