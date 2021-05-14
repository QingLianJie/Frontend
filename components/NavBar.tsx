import {
  Avatar,
  Drawer,
  DrawerBody,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
  Flex,
  Heading,
  Icon,
  IconButton,
  Link,
  Spacer,
  Text,
  useDisclosure,
} from '@chakra-ui/react'
import { default as NextLink } from 'next/link'
import {
  RiBarChartBoxFill,
  RiBookOpenFill,
  RiDashboardFill,
  RiGalleryUploadFill,
  RiMenuFill,
  RiTableFill,
} from 'react-icons/ri'

const NavBarLink = ({ href, icon, text, color }) => {
  return (
    <NextLink href={href} passHref>
      <Link
        position="relative"
        display="flex"
        alignItems="center"
        paddingX="3"
        paddingY="1.5"
        _hover={{
          textDecoration: 'none',
          _hover: {
            _before: {
              content: '""',
              position: 'absolute',
              bottom: '0',
              left: '50%',
              width: '75%',
              height: '2px',
              rounded: 'full',
              backgroundColor: color,
              transform: 'translateX(-50%)',
            },
          },
        }}
      >
        <Icon as={icon} w="5" h="5" marginRight="3" color={color} />
        <Text fontSize="md">{text}</Text>
      </Link>
    </NextLink>
  )
}

const NavBarDrawerLink = ({ href, icon, text, color }) => {
  return (
    <NextLink href={href} passHref>
      <Link
        position="relative"
        display="flex"
        alignItems="center"
        paddingX="3"
        paddingY="3"
        _hover={{
          textDecoration: 'none',
        }}
      >
        <Icon as={icon} w="5" h="5" marginRight="4" color={color} />
        <Text fontSize="md">{text}</Text>
      </Link>
    </NextLink>
  )
}

const NavBarDrawer = () => {
  const { isOpen, onOpen, onClose } = useDisclosure()

  return (
    <>
      <IconButton
        display={{ base: 'flex', md: 'none' }}
        alignItems="center"
        justifyContent="center"
        marginRight="2"
        aria-label="Menu"
        icon={<RiMenuFill />}
        onClick={onOpen}
      />
      <Drawer isOpen={isOpen} placement="left" onClose={onClose}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerHeader padding="9" borderBottomWidth="1px">
            页面
          </DrawerHeader>
          <DrawerBody paddingY="6">
            <NavBarDrawerLink
              href="/"
              icon={RiDashboardFill}
              text="主页"
              color="rgba(237,100,166)"
            />
            <NavBarDrawerLink
              href="/scores"
              icon={RiBarChartBoxFill}
              text="成绩"
              color="rgba(72,187,120,1)"
            />
            <NavBarDrawerLink
              href="/timetable"
              icon={RiTableFill}
              text="课表"
              color="rgba(66,153,225,1)"
            />
            <NavBarDrawerLink
              href="/courses"
              icon={RiBookOpenFill}
              text="课程"
              color="rgba(245,101,101,1)"
            />
            <NavBarDrawerLink
              href="/report"
              icon={RiGalleryUploadFill}
              text="报备"
              color="rgba(236,201,75,1)"
            />
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  )
}

const NavBar = ({ title }) => {
  return (
    <Flex as="header" padding="6" alignItems="center">
      <NavBarDrawer />
      <Heading as="h1" size="md" paddingX="3">
        {title}
      </Heading>
      <Spacer />
      <Flex
        as="nav"
        alignItems="center"
        paddingX="3"
        display={{ base: 'none', md: 'flex' }}
      >
        <NavBarLink
          href="/"
          icon={RiDashboardFill}
          text="主页"
          color="rgba(237,100,166)"
        />
        <NavBarLink
          href="/scores"
          icon={RiBarChartBoxFill}
          text="成绩"
          color="rgba(72,187,120,1)"
        />
        <NavBarLink
          href="/timetable"
          icon={RiTableFill}
          text="课表"
          color="rgba(66,153,225,1)"
        />
        <NavBarLink
          href="/courses"
          icon={RiBookOpenFill}
          text="课程"
          color="rgba(245,101,101,1)"
        />
        <NavBarLink
          href="/report"
          icon={RiGalleryUploadFill}
          text="报备"
          color="rgba(236,201,75,1)"
        />
      </Flex>
      <Spacer />
      <Avatar bg="gray.300" w="8" h="8" marginX="2" marginY="1" />
    </Flex>
  )
}

const HeaderBar = () => {
  return (
    <Flex
      as="header"
      flexDirection="column"
      alignItems="center"
      marginTop="3"
      paddingX="6"
      paddingY="16"
    >
      <Heading as="h1" size="lg">
        清廉街
      </Heading>
    </Flex>
  )
}

export { NavBar, HeaderBar }
