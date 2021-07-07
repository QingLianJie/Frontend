import { Flex, Heading, Spacer } from '@chakra-ui/react'
import LoginPopover from './popover/Login'
import { Badge } from '@chakra-ui/react'

interface HeaderProps {
  title?: string
}

const Header = ({ title = '清廉街' }: HeaderProps) => {
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
      style={{ backdropFilter: 'blur(8px)' }}
    >
      <Heading as="h1" size="md">
        {title}
      </Heading>
      <Spacer />
      <LoginPopover />
    </Flex>
  )
}

export default Header
