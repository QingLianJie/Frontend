import { Button, ButtonGroup, Text, VStack } from '@chakra-ui/react'
import router from 'next/router'
import { MouseEvent } from 'react'
import { mutate } from 'swr'
import useUser from '../../../hooks/useUser'
import ButtonLink from '../../ui/link/ButtonLink'
import PopoverWrapper from './Container'

const MemberPopover = () => {
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
        if (res.ok) mutate(`${baseURL}/rest-auth/user/`)
        router.push('/login')
      })
      .catch((err: Error) => {
        console.log('Logout Error -', err)
      })
  }

  return (
    <PopoverWrapper user={user}>
      <VStack mb="3.5" spacing="1" align="start" px="1">
        <Text fontSize="lg" fontWeight="bold">
          {user.username}
        </Text>
        <Text fontSize="sm" color="gray.500">
          {user.email || '无邮箱'}
        </Text>
      </VStack>

      <ButtonGroup spacing="3" d="flex" justifyContent="flex-end" size="sm">
        <ButtonLink href={`/member/${user.username}`}>个人空间</ButtonLink>
        <Button isFullWidth colorScheme="red" onClick={handleLogout}>
          退出登录
        </Button>
      </ButtonGroup>
    </PopoverWrapper>
  )
}

export default MemberPopover
