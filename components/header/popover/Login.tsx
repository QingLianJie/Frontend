import { Box, ButtonGroup, Text } from '@chakra-ui/react'
import { useRouter } from 'next/router'
import ButtonLink from '../../ui/link/ButtonLink'
import PopoverWrapper from './Container'

const LoginPopover = () => {
  const router = useRouter()

  return (
    <PopoverWrapper>
      <Box mb="3" px="1">
        <Text lineHeight="1.75">
          这里是 <strong>清廉街</strong>，
        </Text>
        <Text lineHeight="1.75">考虑登录一下吗？</Text>
      </Box>

      <ButtonGroup spacing="3" d="flex" justifyContent="flex-end" size="sm">
        <ButtonLink href={`/login?from=${router.asPath}`} color="green" full>
          登录
        </ButtonLink>
        <ButtonLink href={`/signup?from=${router.asPath}`} color="blue" full>
          注册
        </ButtonLink>
      </ButtonGroup>
    </PopoverWrapper>
  )
}

export default LoginPopover
