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
          src={user?.image ? user.image : undefined}
          icon={
            !user ? (
              <Icon as={RiSpyLine} w="5" h="5" />
            ) : (
              <Icon as={RiUserLine} w="5" h="5" />
            )
          }
          w="10"
          h="10"
          mx="1"
          cursor="pointer"
          color="gray.500"
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
