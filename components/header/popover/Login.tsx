import {
  Avatar,
  Box,
  ButtonGroup,
  Popover,
  PopoverArrow,
  PopoverBody,
  PopoverContent,
  PopoverTrigger,
  Text,
} from '@chakra-ui/react'
import { RiUserLine } from 'react-icons/ri'
import ButtonLink from '../../ui/link/ButtonLink'

const LoginPopover = () => {
  return (
    <Popover placement="bottom-end">
      <PopoverTrigger>
        <Avatar
          bg="gray.100"
          icon={<RiUserLine />}
          w="10"
          h="10"
          mx="1"
          cursor="pointer"
          _dark={{
            color: 'white',
            bg: 'gray.700',
          }}
        />
      </PopoverTrigger>
      <PopoverContent minW="unset" w="auto">
        <PopoverArrow />

        <PopoverBody p="5">
          <Box mb="3.5" px="1">
            <Text lineHeight="1.75">
              这里是 <strong>清廉街</strong>，
            </Text>
            <Text lineHeight="1.75">考虑登录一下吗？</Text>
          </Box>

          <ButtonGroup spacing="4" d="flex" justifyContent="flex-end" size="sm">
            <ButtonLink href="/login" color="green">
              登录
            </ButtonLink>
            <ButtonLink href="/signup" color="blue">
              注册
            </ButtonLink>
          </ButtonGroup>
        </PopoverBody>
      </PopoverContent>
    </Popover>
  )
}

export default LoginPopover
