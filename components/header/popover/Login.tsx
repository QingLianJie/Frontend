import { Box, ButtonGroup, Text } from '@chakra-ui/react'
import ButtonLink from '../../ui/link/ButtonLink'
import PopoverWrapper from './Wrapper'

const LoginPopover = () => {
  return (
    <PopoverWrapper>
      <Box mb="3" px="1">
        <Text lineHeight="1.75">
          这里是 <strong>清廉街</strong>，
        </Text>
        <Text lineHeight="1.75">考虑登录一下吗？</Text>
      </Box>

      <ButtonGroup spacing="3" d="flex" justifyContent="flex-end" size="sm">
        <ButtonLink href="/login" color="green">
          登录
        </ButtonLink>
        <ButtonLink href="/signup" color="blue">
          注册
        </ButtonLink>
      </ButtonGroup>
    </PopoverWrapper>
  )
}

export default LoginPopover
