import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Icon,
  Link,
  Spacer,
  SystemProps,
  VStack,
} from '@chakra-ui/react'
import type { ReactNode } from 'react'
import type { IconType } from 'react-icons'
import { NavLink as RemixLink } from 'remix'
import { navLinks } from '~/contents/nav-links'

const NavItemStyles: SystemProps = {
  w: 'full',
  px: '3',
  py: '2.5',
  d: 'flex',
  alignItems: 'center',
  gap: '4',
  rounded: 'md',
  whiteSpace: 'nowrap',
  fontWeight: 'bold',
  textAlign: 'start',
  bg: 'transparent',
  _hover: {
    bg: 'gray.100',
    textDecor: 'none',
  },
  _active: {
    bg: 'gray.200',
  },
  _dark: {
    _hover: {
      bg: 'gray.800',
    },
    _active: {
      bg: 'gray.700',
    },
  },
}

interface NavItemIconProps {
  icon: IconType
  text: string
  color: string
}

const NavItemIcon = ({ icon, text, color }: NavItemIconProps) => (
  <Icon as={icon} aria-label={text} color={`${color}.500`} fontSize="xl" />
)

interface NavItemProps {
  href: string
  color?: string
  icon?: IconType
  children: string
}

const NavLink = ({ href, color = 'gray', icon, children }: NavItemProps) => (
  <Link as={RemixLink} to={href} {...NavItemStyles}>
    {icon && <NavItemIcon icon={icon} text={children} color={color} />}
    {children}
  </Link>
)

interface NavMenuProps {
  text: string
  color: string
  icon: IconType
  children: ReactNode
}

const NavAccordion = ({ text, color, icon, children }: NavMenuProps) => (
  <Accordion allowToggle w="full">
    <AccordionItem border="none" w="full">
      <AccordionButton {...NavItemStyles}>
        <NavItemIcon icon={icon} text={text} color={color} />
        {text}
        <Spacer />
        <AccordionIcon
          fontSize="xl"
          me="2.5"
          color="gray.500"
          _dark={{
            color: 'gray.400',
          }}
        />
      </AccordionButton>
      <AccordionPanel py="1" ms="5">
        <VStack spacing="0">{children}</VStack>
      </AccordionPanel>
    </AccordionItem>
  </Accordion>
)

const NavAccordionItem = ({ href, children }: NavItemProps) => (
  <Link
    href={href}
    isExternal
    w="full"
    px="3"
    py="2"
    rounded="md"
    _hover={{
      textDecor: 'none',
    }}
    isTruncated
  >
    {children}
  </Link>
)

const Nav = () => (
  <VStack as="nav" spacing="0">
    {navLinks.map(link =>
      link.type === 'LINK' ? (
        <NavLink {...link} key={link.text}>
          {link.text}
        </NavLink>
      ) : (
        <NavAccordion {...link} key={link.text}>
          {link.children.map(item => (
            <NavAccordionItem {...item} key={item.text}>
              {item.text}
            </NavAccordionItem>
          ))}
        </NavAccordion>
      )
    )}
  </VStack>
)

export default Nav
