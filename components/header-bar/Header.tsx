import { Flex, Heading, Spacer } from '@chakra-ui/react'
import useUser from '../../hooks/useUser'
import LoginPopover from './popover/Login'
import UserPopover from './popover/User'

interface HeaderProps {
  title?: string
}

const Header = ({ title = '清廉街' }: HeaderProps) => {
  const { isFinished } = useUser()

  return (
    <Flex
      as="header"
      mb="6"
      px={{ base: '6', lg: '12' }}
      py="4"
      alignItems="center"
      borderBottomWidth="1px"
      pos="sticky"
      top="0"
      zIndex="100"
      bg="whiteAlpha.800"
      style={{ backdropFilter: 'blur(12px)' }}
      _dark={{
        bg: 'blackAlpha.200',
      }}
    >
      <Heading as="h1" size="md">
        {title}
      </Heading>
      <Spacer />
      {isFinished ? <UserPopover /> : <LoginPopover />}
    </Flex>
  )
}

export default Header
