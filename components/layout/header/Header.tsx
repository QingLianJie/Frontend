import {
  Box,
  Container,
  Fade,
  Flex,
  Heading,
  SkeletonCircle,
  Spacer,
  Text,
} from '@chakra-ui/react'
import useUser from '../../../hooks/useUser'
import HeaderDrawer from './drawer/Drawer'
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
      px={{ base: '6', md: '8', lg: '12' }}
      py="3.5"
      alignItems="center"
      borderBottomWidth="1px"
      pos="sticky"
      top="0"
      zIndex="100"
      backdropFilter="blur(12px)"
      sx={{
        bg: 'white',
        '@supports ((-webkit-backdrop-filter: none) or (backdrop-filter: none)) ':
          {
            bg: 'whiteAlpha.700',
            _dark: {
              bg: '#1a202c88',
            },
          },
      }}
      _dark={{
        bg: 'gray.800',
      }}
    >
      <Container
        w="full"
        maxW="container.xl"
        mx="auto"
        d="flex"
        alignItems="center"
      >
        <Box d={{ base: 'flex', lg: 'none' }}>
          <HeaderDrawer />
        </Box>

        <Text as="h1" fontWeight="600" ms={{ base: 2, lg: 0 }} fontSize="lg">
          {title}
        </Text>

        <Box d={{ base: 'none', lg: 'flex' }}>
          <HeaderNav />
        </Box>

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
      </Container>
    </Flex>
  )
}

export default Header
