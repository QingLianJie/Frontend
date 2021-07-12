import {
  Avatar,
  Button,
  ButtonGroup,
  Popover,
  PopoverArrow,
  PopoverBody,
  PopoverContent,
  PopoverTrigger,
  Text,
  VStack,
} from '@chakra-ui/react'
import { ReactElement } from 'react'
import { RiUserLine } from 'react-icons/ri'
import useUser from '../../../hooks/useUser'

interface PopoverWrapperProps {
  user: IUser
  children: Array<ReactElement | string> | ReactElement | string
}

const PopoverWrapper = ({ user, children }: PopoverWrapperProps) => {
  return (
    <Popover placement="bottom-end">
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
      <VStack mb="4" spacing="1" align="start" px="1">
        <Text fontSize="lg" fontWeight="bold">
          {user.username}
        </Text>
        <Text fontSize="sm" color="gray.500">
          {user.email || '无邮箱'}
        </Text>
      </VStack>

      <ButtonGroup spacing="4" d="flex" justifyContent="flex-end" size="sm">
        <Button>个人空间</Button>
        <Button colorScheme="red">退出登录</Button>
      </ButtonGroup>
    </PopoverWrapper>
  )
}

export default UserPopover
