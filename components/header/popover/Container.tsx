import {
  Avatar,
  Popover,
  PopoverArrow,
  PopoverBody,
  PopoverContent,
  PopoverTrigger,
} from '@chakra-ui/react'
import { ReactElement } from 'react'
import { RiUserLine } from 'react-icons/ri'

interface PopoverWrapperProps {
  user?: IUser
  children: Array<ReactElement | string> | ReactElement | string
}

const PopoverWrapper = ({ user, children }: PopoverWrapperProps) => {
  return (
    <Popover autoFocus placement="bottom-end">
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
        <PopoverBody p="4">{children}</PopoverBody>
      </PopoverContent>
    </Popover>
  )
}

export default PopoverWrapper
