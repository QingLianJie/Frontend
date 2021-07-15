import {
  Avatar,
  Popover,
  PopoverArrow,
  PopoverBody,
  PopoverContent,
  PopoverTrigger,
} from '@chakra-ui/react'
import { ReactElement } from 'react'
import { md5 } from '../../../../utils/md5'

interface PopoverWrapperProps {
  user?: IUser
  children: Array<ReactElement | string> | ReactElement | string
}

const PopoverWrapper = ({ user, children }: PopoverWrapperProps) => {
  return (
    <Popover placement="bottom-end">
      <PopoverTrigger>
        <Avatar
          name={user ? user.username : undefined}
          src={
            user
              ? `${process.env.NEXT_PUBLIC_BASE_GRAVATAR_URL}${md5(
                  user.email
                )}?d=retro`
              : undefined
          }
          w="10"
          h="10"
          mx="1"
          cursor="pointer"
          color="gray.400"
          bg="gray.200"
          _dark={{
            color: 'white',
            bg: 'gray.600',
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

export default PopoverWrapper
