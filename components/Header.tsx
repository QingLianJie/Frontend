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
import { useRef } from 'react'
import { RiMenuFill, RiUserLine } from 'react-icons/ri'
import { drawerLink, menuLink, navLink } from '../data/links'
import meta from '../data/meta'
import { IHeaderProps } from '../next-env'
import { ListIconLink, NormalIconLink } from './Link'

const HeaderDrawer = () => {
  const { isOpen, onOpen, onClose } = useDisclosure()

  return (
    <>
      <IconButton
        d={{ base: 'flex', md: 'none' }}
        alignItems="center"
        justifyContent="center"
        mr="4"
        aria-label="Menu"
        icon={<RiMenuFill />}
        onClick={onOpen}
      />
      <Drawer isOpen={isOpen} placement="left" onClose={onClose}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerHeader px="10" py="9" borderBottomWidth="1px">
            页面
          </DrawerHeader>
          <DrawerBody py="6">
            {drawerLink.map(link => (
              <ListIconLink
                key={link}
                href={meta[link].href}
                icon={meta[link].icon}
                text={meta[link].text}
                color={meta[link].color}
              />
            ))}
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  )
}

const Header = ({ title, nav }: IHeaderProps) => {
  const initialFocusRef = useRef()

  return (
    <Flex
      as="header"
      mb="6"
      px={{ base: '6', md: '12' }}
      py="5"
      alignItems="center"
      borderBottomWidth="1px"
      pos="sticky"
      top="0"
      zIndex="100"
      bg="whiteAlpha.800"
      style={{ backdropFilter: 'blur(8px)' }}
    >
      {nav && <HeaderDrawer />}

      <Heading as="h1" size="md" px="1.5">
        {title}
      </Heading>

      <Spacer />

      {nav && (
        <Flex
          as="nav"
          alignItems="center"
          px="3"
          d={{ base: 'none', md: 'flex' }}
        >
          {navLink.map(link => (
            <NormalIconLink
              key={link}
              href={meta[link].href}
              icon={meta[link].icon}
              text={meta[link].text}
              color={meta[link].color}
            />
          ))}

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
              {menuLink.map(link => (
                <MenuItem key={link} p="0">
                  <ListIconLink
                    href={meta[link].href}
                    icon={meta[link].icon}
                    text={meta[link].text}
                    color={meta[link].color}
                    small
                  />
                </MenuItem>
              ))}
            </MenuList>
          </Menu>
        </Flex>
      )}

      <Spacer />

      <Popover placement="bottom-end" initialFocusRef={initialFocusRef}>
        <PopoverTrigger>
          <Avatar
            bg="gray.100"
            icon={<RiUserLine />}
            w="10"
            h="10"
            mx="1"
            cursor="pointer"
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

            <ButtonGroup
              spacing="4"
              d="flex"
              justifyContent="flex-end"
              size="sm"
            >
              <LinkBox w="full" _focus={{ boxShadow: 'outline' }}>
                <Button colorScheme="green" isFullWidth ref={initialFocusRef}>
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
