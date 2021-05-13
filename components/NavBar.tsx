import {
  Center,
  Flex,
  Heading,
  Icon,
  Link,
  Spacer,
  Text,
} from '@chakra-ui/react'
import { default as NextLink } from 'next/link'
import { BookOpen, Calendar, Clipboard, Home, UploadCloud } from 'react-feather'

const NavBarLink = ({ href, icon, text }) => (
  <NextLink href={href} passHref>
    <Link
      display="flex"
      alignItems="center"
      paddingX="3"
      paddingY="1.5"
      _hover={{ textDecoration: 'none' }}
    >
      <Icon as={icon} marginRight="3" w="4" h="4" strokeWidth="1.5" />
      <Text fontSize="md">{text}</Text>
    </Link>
  </NextLink>
)

const NavBar = ({ title }) => {
  return (
    <Flex as="header" padding="6" alignItems="center">
      <Heading as="h1" size="md" paddingX="3">
        {title}
      </Heading>
      <Spacer />
      <Flex as="nav" alignItems="center" paddingX="3">
        <NavBarLink href="/" icon={Home} text="主页" />
        <NavBarLink href="/scores" icon={Clipboard} text="成绩" />
        <NavBarLink href="/timetable" icon={Calendar} text="课表" />
        <NavBarLink href="/courses" icon={BookOpen} text="课程" />
        <NavBarLink href="/report" icon={UploadCloud} text="报备" />
      </Flex>
    </Flex>
  )
}

const HeaderBar = ({ title }) => {
  return (
    <Center as="header" marginTop="3" paddingX="6" paddingY="16">
      <Heading as="h1" size="md">
        {title}
      </Heading>
    </Center>
  )
}

export { NavBar, HeaderBar }
