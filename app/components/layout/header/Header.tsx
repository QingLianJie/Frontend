import type { SystemProps } from '@chakra-ui/react'
import {
  Avatar as ChakraAvatar,
  Flex,
  Heading,
  Icon,
  Link,
  Tooltip,
} from '@chakra-ui/react'
import { useScroll } from 'ahooks'
import type { ReactNode } from 'react'
import { RiSpyLine, RiUserLine } from 'react-icons/ri'
import {
  Link as RemixLink,
  useLoaderData,
  useLocation,
  useSearchParams,
} from 'remix'
import { SwitchTheme } from '~/components/common/actions/SwitchTheme'
import { AVATAT_BASE_URL } from '~/const'
import { RootLoader } from '~/root'
import { calcEmailMd5 } from '~/utils/math'
import { Drawer } from '../drawer/Drawer'
import { HeaderNav } from './Nav'

interface HeaderProps {
  title?: string
}

export const Header = ({ title = '清廉街' }: HeaderProps) => {
  const scroll = useScroll()
  const isTop = scroll && scroll?.top < 48
  const isNotTop = scroll && scroll?.top >= 4

  return (
    <Flex
      as="header"
      position="fixed"
      top="0 "
      left="0"
      w="full"
      align="center"
      justify="stretch"
      px={{ base: '6', sm: '8' }}
      pt={{ base: '5', md: isNotTop ? '2' : '5' }}
      pb={{ base: '5', md: isNotTop ? '2' : '5' }}
      gap="8"
      zIndex="100"
      backdropFilter={{ base: 'none', md: isNotTop ? 'blur(12px)' : 'none' }}
      bg={{ base: 'transparent', md: '#EDF2F788' }}
      _dark={{ bg: { base: 'transparent', md: '#17192388' } }}
      transition="all 0.2s"
      pointerEvents={{ base: 'none', md: 'auto' }}
    >
      <Section align="left" d={{ base: 'flex', md: 'none' }}>
        <Drawer />
      </Section>
      <Section
        align={{ base: 'center', md: 'left' }}
        visibility={{
          base: scroll ? (isTop ? 'visible' : 'hidden') : 'visible',
          md: 'visible',
        }}
        opacity={{
          base: scroll ? (isTop ? '1' : '0') : '1',
          md: '1',
        }}
        transform={{
          base: scroll
            ? isTop
              ? 'translateY(0)'
              : 'translateY(-36px)'
            : 'none',
          md: 'none',
        }}
        transition="all 0.2s"
      >
        <RemixLink to="/">
          <Heading
            as="h1"
            fontSize="1.125rem"
            whiteSpace="nowrap"
            pointerEvents="auto"
          >
            {title}
          </Heading>
        </RemixLink>
      </Section>

      <Section align="center" d={{ base: 'none', md: 'flex' }}>
        <HeaderNav />
      </Section>
      <Section align="right">
        <SwitchTheme hasTooltip d={{ base: 'none', md: 'flex' }} />
        <Avatar />
      </Section>
    </Flex>
  )
}

type AlignType = 'left' | 'center' | 'right'

interface HeaderSectionProps extends SystemProps {
  align?: AlignType | { base: AlignType; md: AlignType }
  children: ReactNode
}

const Section = ({
  align = 'center',
  children,
  ...props
}: HeaderSectionProps) => (
  <Flex
    align="center"
    justify={align}
    flex="1"
    px={{ base: '0', md: '2' }}
    gap="4"
    {...props}
  >
    {children}
  </Flex>
)

const Avatar = () => {
  const { pathname } = useLocation()
  const { member } = useLoaderData<RootLoader>()

  const [params] = useSearchParams()
  const from = params.get('from')

  return (
    <Tooltip
      hasArrow
      placement="bottom-end"
      label={member ? `已登录到 ${member.name}` : '考虑登录到「清廉街」吗'}
      px="2.5"
      py="1.5"
      maxW="48"
      pointerEvents="auto"
    >
      <Link
        as={RemixLink}
        to={member ? `/member` : `/member/login?from=${from ?? pathname}`}
        rounded="full"
        pointerEvents="auto"
      >
        <ChakraAvatar
          aria-label={member ? member.name : '陌生人'}
          src={
            member && member.email
              ? `${AVATAT_BASE_URL}${calcEmailMd5(member.email)}?d=404`
              : undefined
          }
          icon={<Icon as={member ? RiUserLine : RiSpyLine} fontSize="xl" />}
          size="md"
          bg="gray.200"
          color="gray.500"
          _hover={{
            color: 'gray.700',
          }}
          _dark={{
            bg: 'gray.800',
            color: 'gray.400',
            _hover: {
              color: 'gray.200',
            },
          }}
          cursor="pointer"
          transition="all 0.2s"
        />
      </Link>
    </Tooltip>
  )
}
