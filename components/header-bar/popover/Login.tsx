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
import { RefObject, useRef } from 'react'
import { RiUserLine } from 'react-icons/ri'

interface ButtonLinkProps {
  text: string
  href: string
  color: string
  ref?: RefObject<HTMLButtonElement>
}

const ButtonLink = ({ text, href, color, ref }: ButtonLinkProps) => {
  return (
    <LinkBox w="full" _focus={{ boxShadow: 'outline' }}>
      <Button colorScheme={color} isFullWidth ref={ref}>
        <NextLink href={href} passHref>
          <LinkOverlay>
            <Text>{text}</Text>
          </LinkOverlay>
        </NextLink>
      </Button>
    </LinkBox>
  )
}

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
            <ButtonLink
              text="登录"
              href="/login"
              color="green"
              ref={initialFocusRef}
            />
            <ButtonLink text="注册" href="/signup" color="blue" />
          </ButtonGroup>
        </PopoverBody>
      </PopoverContent>
    </Popover>
  )
}

export default LoginPopover
