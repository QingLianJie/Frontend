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
import { BASE_AVATAR_URL } from '../../../../data/api-config'

interface PopoverWrapperProps {
  user?: IUser
  children: Array<ReactElement | string> | ReactElement | string
}

const PopoverWrapper = ({ user, children }: PopoverWrapperProps) => {
  return (
    <Popover placement="bottom-end">
      <PopoverTrigger>
        <Avatar
          name={!user?.image ? '' : user?.username || '用户头像'}
          src={
            user?.image
              ? `${BASE_AVATAR_URL}${user.image}`
              : undefined
          }
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
          color="gray.400"
          bg="gray.100"
          borderWidth="1px"
          borderColor="gray.200"
          _dark={{
            color: 'gray.400',
            bg: 'gray.700',
            borderColor: 'whiteAlpha.300',
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
