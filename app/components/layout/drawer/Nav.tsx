import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Icon,
  Link,
  Spacer,
  Text,
  VStack,
  type SystemProps,
} from '@chakra-ui/react'
import { type ReactNode } from 'react'
import { type IconType } from 'react-icons'
import { RiBuildingLine, RiGlobalLine } from 'react-icons/ri'
import { NavLink as RemixLink } from 'remix'
import { navLinks } from '~/contents/links/nav/nav'

export const DrawerNav = () => (
  <VStack as="nav" spacing="0">
    {navLinks.map(link =>
      link.type === 'LINK' ? (
        <DrawerNavLink {...link} key={link.name} />
      ) : (
        <DrawerNavAccordion {...link} key={link.name}>
          {link.children.map(item => (
            <DrawerNavAccordionItem {...item} key={item.name} />
          ))}
        </DrawerNavAccordion>
      )
    )}
  </VStack>
)

const DrawerNavItemStyles: SystemProps = {
  w: 'full',
  px: '3',
  py: '2.5',
  d: 'flex',
  alignItems: 'center',
  gap: '5',
  rounded: 'md',
  whiteSpace: 'nowrap',
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
      bg: 'gray.800',
    },
  },
}

interface DrawerNavItemIconProps {
  icon: IconType
  name: string
  color: string
}

const DrawerNavItemIcon = ({ icon, name, color }: DrawerNavItemIconProps) => (
  <Icon as={icon} aria-label={name} color={`${color}.500`} fontSize="xl" />
)

interface DrawerNavItemProps {
  href: string
  name: string
  long?: string
  icon?: IconType
  color?: string
  lan?: boolean
}

const DrawerNavLink = ({
  href,
  color = 'gray',
  icon,
  name,
  long = name,
}: DrawerNavItemProps) => (
  <Link as={RemixLink} to={href} {...DrawerNavItemStyles}>
    {icon && <DrawerNavItemIcon icon={icon} name={long} color={color} />}
    {long}
  </Link>
)

interface DrawerNavAccordionProps {
  name: string
  long: string
  color: string
  icon: IconType
  children: ReactNode
}

const DrawerNavAccordion = ({
  name,
  long,
  color,
  icon,
  children,
}: DrawerNavAccordionProps) => (
  <Accordion allowToggle w="full">
    <AccordionItem border="none" w="full">
      <AccordionButton {...DrawerNavItemStyles}>
        <DrawerNavItemIcon icon={icon} name={long} color={color} />
        {long}
        <Spacer />
        <AccordionIcon
          fontSize="xl"
          mr="2.5"
          color="gray.500"
          _dark={{
            color: 'gray.400',
          }}
        />
      </AccordionButton>
      <AccordionPanel py="2" px="0">
        <VStack spacing="0">{children}</VStack>
      </AccordionPanel>
    </AccordionItem>
  </Accordion>
)

const DrawerNavAccordionItem = ({ href, name, lan }: DrawerNavItemProps) => (
  <Link
    href={href}
    d="flex"
    alignItems="center"
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
    <Icon
      as={lan ? RiBuildingLine : RiGlobalLine}
      aria-label="外部链接"
      mr="5"
      fontSize="xl"
      color="gray.500"
      title={lan ? '需要校园网' : '无需校园网'}
    />
    <Text as="span" w="full" isTruncated>
      {name}
    </Text>
  </Link>
)
