import {
  Avatar,
  Icon,
  Popover,
  PopoverArrow,
  PopoverBody,
  PopoverContent,
  PopoverTrigger,
} from '@chakra-ui/react'
import { ReactElement } from 'react'
import { RiSpyLine, RiUserLine } from 'react-icons/ri'
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
          src={
            user?.email
              ? `${process.env.NEXT_PUBLIC_BASE_GRAVATAR_URL}${md5(
                  user.email
                )}?d=retro`
              : undefined
          }
          icon={
            !user ? (
              <Icon as={RiSpyLine} w="3.5" h="3.5" />
            ) : (
              <Icon as={RiUserLine} w="3.5" h="3.5" />
            )
          }
          w="10"
          h="10"
          mx="1"
          cursor="pointer"
          color="gray.600"
          bg="gray.200"
          _dark={{
            color: 'gray.400',
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

export default PopoverWrapper
