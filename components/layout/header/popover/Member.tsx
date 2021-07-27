import {
  Badge,
  Button,
  ButtonGroup,
  HStack,
  Text,
  useToast,
  VStack,
} from '@chakra-ui/react'
import router from 'next/router'
import { MouseEvent } from 'react'
import { mutate } from 'swr'
import useUser from '../../../../hooks/useUser'
import { toastConfig } from '../../../../utils/config/toast'
import ButtonLink from '../../../common/action/link/ButtonLink'
import PopoverWrapper from './Container'

const MemberPopover = () => {
  const toast = useToast()
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
          toast({
            title: '退出登录成功',
            ...toastConfig.ok,
          })
          mutate(`${baseURL}/api/user`)
          if (user?.username) {
            mutate(`${baseURL}/api/profile/${user.username}`)
          }
        } else {
          const data = await res.json()
          Object.values(data).forEach(d => {
            toast({
              title: '退出登录失败',
              description: d as string,
              ...toastConfig.error,
            })
          })
        }

        router.push('/login')
      })
      .catch((err: Error) => {
        console.log('Logout Error -', err)
        toast({
          title: '退出登录失败',
          description: err.toString(),
          ...toastConfig.error,
        })
      })
  }

  return (
    <PopoverWrapper user={user}>
      <VStack mb="3.5" spacing="1" align="start" px="1">
        <Text fontSize="lg" fontWeight="600">
          欢迎回来，{user?.username}
        </Text>
        <Text d="flex" alignItems="center" color="gray.500" fontSize="sm">
          {user?.heu_username && (
            <Badge me="2" colorScheme="green">
              HEU
            </Badge>
          )}
          {user?.heu_username ? user.heu_username : '未绑定 HEU 账号'}
        </Text>
      </VStack>

      <ButtonGroup size="sm">
        <HStack spacing="3">
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
