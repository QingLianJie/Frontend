import {
  Avatar,
  Box,
  Button,
  ButtonGroup,
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
  LinkBox,
  LinkOverlay,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Popover,
  PopoverArrow,
  PopoverBody,
  PopoverContent,
  PopoverTrigger,
  Spacer,
  Text,
  useDisclosure,
} from '@chakra-ui/react'
import { default as NextLink } from 'next/link'
import { RiMenuFill } from 'react-icons/ri'
import meta from '../data/meta'
import { IHeaderDrawLinkProps, IHeaderProps } from '../next-env'

const HeaderLink = ({ href, icon, text, color }) => {
  return (
    <NextLink href={href} passHref>
      <Link
        pos="relative"
        d="flex"
        alignItems="center"
        px="3"
        py="1.5"
        rounded="md"
        _hover={{
          textDecoration: 'none',
          _hover: {
            bg: 'gray.100',
          },
        }}
        _focus={{ boxShadow: 'outline' }}
      >
        <Icon as={icon} w="5" h="5" mr="3" color={color} />
        <Text fontSize="md" mr="1">
          {text}
        </Text>
      </Link>
    </NextLink>
  )
}

const HeaderDrawerLink = ({
  href,
  icon,
  text,
  color,
  small,
}: IHeaderDrawLinkProps) => {
  return (
    <NextLink href={href} passHref>
      <Link
        pos="relative"
        d="flex"
        alignItems="center"
        px={small ? '2' : '3'}
        py={small ? '1' : '3'}
        rounded="md"
        _hover={{
          textDecoration: 'none',
        }}
        _focus={{ boxShadow: 'outline' }}
      >
        <Icon as={icon} w="5" h="5" mr={small ? '3' : '4'} color={color} />
        <Text fontSize="md">{text}</Text>
      </Link>
    </NextLink>
  )
}

const HeaderDrawer = () => {
  const { isOpen, onOpen, onClose } = useDisclosure()

  return (
    <>
      <IconButton
        d={{ base: 'flex', md: 'none' }}
        alignItems="center"
        justifyContent="center"
        mr="2"
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
          <DrawerBody py="6">
            <HeaderDrawerLink
              href="/"
              icon={meta['home'].icon}
              text={meta['home'].text}
              color={meta['home'].color}
            />
            <HeaderDrawerLink
              href="/scores"
              icon={meta['scores'].icon}
              text={meta['scores'].text}
              color={meta['scores'].color}
            />
            <HeaderDrawerLink
              href="/timetable"
              icon={meta['timetable'].icon}
              text={meta['timetable'].text}
              color={meta['timetable'].color}
            />
            <HeaderDrawerLink
              href="/courses"
              icon={meta['courses'].icon}
              text={meta['courses'].text}
              color={meta['courses'].color}
            />
            <HeaderDrawerLink
              href="/report"
              icon={meta['report'].icon}
              text={meta['report'].text}
              color={meta['report'].color}
            />
            <HeaderDrawerLink
              href="/feedback"
              icon={meta['feedback'].icon}
              text={meta['feedback'].text}
              color={meta['feedback'].color}
            />
            <HeaderDrawerLink
              href="/open-source"
              icon={meta['open-source'].icon}
              text={meta['open-source'].text}
              color={meta['open-source'].color}
            />
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  )
}

const Header = ({ title, showNav }: IHeaderProps) => {
  return (
    <Flex as="header" px="4" py="6" alignItems="center">
      {showNav && <HeaderDrawer />}

      <Heading as="h1" size="md" px="1">
        {title}
      </Heading>

      <Spacer />

      {showNav && (
        <Flex
          as="nav"
          alignItems="center"
          px="3"
          d={{ base: 'none', md: 'flex' }}
        >
          <HeaderLink
            href="/"
            icon={meta['home'].icon}
            text={meta['home'].text}
            color={meta['home'].color}
          />
          <HeaderLink
            href="/scores"
            icon={meta['scores'].icon}
            text={meta['scores'].text}
            color={meta['scores'].color}
          />
          <HeaderLink
            href="/timetable"
            icon={meta['timetable'].icon}
            text={meta['timetable'].text}
            color={meta['timetable'].color}
          />
          <HeaderLink
            href="/courses"
            icon={meta['courses'].icon}
            text={meta['courses'].text}
            color={meta['courses'].color}
          />

          <Menu>
            <MenuButton
              pos="relative"
              px="4"
              py="2"
              rounded="md"
              _hover={{
                textDecoration: 'none',
                _hover: {
                  bg: 'gray.100',
                },
              }}
              _focus={{ boxShadow: 'outline' }}
              aria-label={meta['more'].text}
            >
              <Box d="flex" alignItems="center">
                <Icon
                  as={meta['more'].icon}
                  w="5"
                  h="5"
                  color={meta['more'].color}
                />
              </Box>
            </MenuButton>
            <MenuList minW="unset">
              <MenuItem>
                <HeaderDrawerLink
                  href="/report"
                  icon={meta['report'].icon}
                  text={meta['report'].text}
                  color={meta['report'].color}
                  small
                />
              </MenuItem>
              <MenuItem>
                <HeaderDrawerLink
                  href="/feedback"
                  icon={meta['feedback'].icon}
                  text={meta['feedback'].text}
                  color={meta['feedback'].color}
                  small
                />
              </MenuItem>
              <MenuItem>
                <HeaderDrawerLink
                  href="/open-source"
                  icon={meta['open-source'].icon}
                  text={meta['open-source'].text}
                  color={meta['open-source'].color}
                  small
                />
              </MenuItem>
            </MenuList>
          </Menu>
        </Flex>
      )}

      <Spacer />

      <Popover placement="bottom-end">
        <PopoverTrigger>
          <Avatar bg="gray.300" w="8" h="8" cursor="pointer" />
        </PopoverTrigger>
        <PopoverContent minW="unset" w="auto">
          <PopoverArrow />

          <PopoverBody p="4">
            <Box mb="3" px="1">
              <Text>
                这里是 <strong>清廉街</strong>，
              </Text>
              <Text>考虑登录一下吗？</Text>
            </Box>

            <ButtonGroup
              spacing="3"
              d="flex"
              justifyContent="flex-end"
              size="sm"
            >
              <LinkBox w="full" _focus={{ boxShadow: 'outline' }}>
                <Button colorScheme="green" isFullWidth>
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
    </Flex>
  )
}

export default Header
