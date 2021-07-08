import {
  Avatar,
  Box,
  Button,
  ButtonGroup,
  LinkBox,
  LinkOverlay,
  Popover,
  PopoverArrow,
  PopoverBody,
  PopoverContent,
  PopoverTrigger,
  Text,
} from '@chakra-ui/react'
import { default as NextLink } from 'next/link'
import { useRef } from 'react'
import { RiUserLine } from 'react-icons/ri'

const LoginPopover = () => {
  const initialFocusRef = useRef<HTMLButtonElement>(null)

  return (
    <Popover placement="bottom-end" initialFocusRef={initialFocusRef}>
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
            <LinkBox w="full" _focus={{ boxShadow: 'outline' }}>
              <Button colorScheme="green" isFullWidth ref={initialFocusRef}>
                <NextLink href="/login" passHref>
                  <LinkOverlay>
                    <Text>登录</Text>
                  </LinkOverlay>
                </NextLink>
              </Button>
            </LinkBox>
            <LinkBox w="full" _focus={{ boxShadow: 'outline' }}>
              <Button colorScheme="blue" isFullWidth>
                <NextLink href="/signup" passHref>
                  <LinkOverlay>
                    <Text>注册</Text>
                  </LinkOverlay>
                </NextLink>
              </Button>
            </LinkBox>
          </ButtonGroup>
        </PopoverBody>
      </PopoverContent>
    </Popover>
  )
}

export default LoginPopover
