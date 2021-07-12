import { Fade, Flex, Heading, SkeletonCircle, Spacer } from '@chakra-ui/react'
import useUser from '../../hooks/useUser'
import HeaderNav from './nav/Nav'
import LoginPopover from './popover/Login'
import MemberPopover from './popover/Member'

interface HeaderProps {
  title?: string
  data?: IUser
}

const Header = ({ title = '清廉街' }: HeaderProps) => {
  const { isLoading, isError } = useUser()

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

      <HeaderNav />
      <Spacer />

      {isLoading ? (
        <SkeletonCircle size="10" mx="1" />
      ) : isError ? (
        <Fade in>
          <LoginPopover />
        </Fade>
      ) : (
        <Fade in>
          <MemberPopover />
        </Fade>
      )}
    </Flex>
  )
}

export default Header
