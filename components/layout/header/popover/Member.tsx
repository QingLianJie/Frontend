import { Button, ButtonGroup, HStack, Text, VStack } from '@chakra-ui/react'
import router from 'next/router'
import { MouseEvent } from 'react'
import { mutate } from 'swr'
import useLogoutToast from '../../../../hooks/useToast/useLogoutToast'
import useUser from '../../../../hooks/useUser'
import ButtonLink from '../../../common/link/ButtonLink'
import PopoverWrapper from './Container'

const MemberPopover = () => {
  const toast = useLogoutToast()
  const { user } = useUser()

  const baseURL = process.env.NEXT_PUBLIC_BASE_API_URL

  const handleLogout = (e: MouseEvent) => {
    e.preventDefault()

    fetch(`${baseURL}/rest-auth/logout/`, {
      method: 'POST',
      mode: 'cors',
      credentials: 'include',
    })
      .then(async res => {
        if (res.ok) {
          toast.ok()
          mutate(`${baseURL}/rest-auth/user/`)
          mutate(`${baseURL}/api/user/`)
          mutate(`${baseURL}/api/HEUAccount`)
        } else {
          const data = await res.json()
          Object.values(data).forEach(d => {
            const t = d as string
            toast.error(t)
          })
        }

        router.push('/login')
      })
      .catch((err: Error) => {
        console.log('Logout Error -', err)
        toast.error(err.toString())
      })
  }

  return (
    <PopoverWrapper user={user}>
      <VStack mb="3.5" spacing="1" align="start" px="1">
        <Text fontSize="lg" fontWeight="600">
          欢迎回来，{user?.username}
        </Text>
        <Text fontSize="sm" color="gray.500">
          {user?.email || '无邮箱'}
        </Text>
      </VStack>

      <ButtonGroup size="sm">
        <HStack spacing="4">
          <ButtonLink href={`/@${user?.username}`} full>
            个人主页
          </ButtonLink>
          <Button isFullWidth colorScheme="red" onClick={handleLogout}>
            退出登录
          </Button>
        </HStack>
      </ButtonGroup>
    </PopoverWrapper>
  )
}

export default MemberPopover
