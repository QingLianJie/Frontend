import {
  Avatar,
  Button,
  Popover,
  PopoverArrow,
  PopoverBody,
  PopoverContent,
  PopoverTrigger,
} from '@chakra-ui/react'
import { ReactElement, useRef } from 'react'
import { RiUserLine } from 'react-icons/ri'
import useUser from '../../../hooks/useUser'

interface PopoverWrapperProps {
  user: IUser
  children: Array<ReactElement | string> | ReactElement | string
}

const PopoverWrapper = ({ user, children }: PopoverWrapperProps) => {
  const initialFocusRef = useRef<HTMLButtonElement>(null)

  return (
    <Popover placement="bottom-end" initialFocusRef={initialFocusRef}>
      <PopoverTrigger>
        <Avatar
          bg="gray.100"
          name={user ? user.username : undefined}
          icon={!user ? <RiUserLine /> : undefined}
          w="10"
          h="10"
          mx="1"
          cursor="pointer"
          color="gray.400"
          _dark={{
            color: 'white',
            bg: 'gray.700',
          }}
        />
      </PopoverTrigger>
      <PopoverContent minW="unset" w="auto">
        <PopoverArrow />
        <PopoverBody p="5">{children}</PopoverBody>
      </PopoverContent>
    </Popover>
  )
}

const UserPopover = () => {
  const { user } = useUser()
  return (
    <PopoverWrapper user={user}>
      {user.email}
      <Button>退出登录</Button>
    </PopoverWrapper>
  )
}

export default UserPopover
