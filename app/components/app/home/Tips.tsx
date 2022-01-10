import type { SystemProps } from '@chakra-ui/react'
import { Icon, Link, Text, VStack } from '@chakra-ui/react'
import type { IconType } from 'react-icons'
import { HomeCard } from '~/components/common/containers/HomeCard'
import { tipsLinks } from '~/contents/links/tips-links'

interface HomeTipsProps extends SystemProps {}

export const HomeTips = (props: HomeTipsProps) => (
  <HomeCard title="帮助" {...props}>
    <VStack w="full" px="0" pb="4" pt="2" align="flex-start" spacing="0">
      {tipsLinks.map(tip => (
        <HomeTipsLink {...tip} key={tip.name} />
      ))}
      <Text
        px="6"
        pt="4"
        pb="2"
        fontSize="sm"
        lineHeight="tall"
        color="gray.500"
        _dark={{ color: 'gray.400' }}
      >
        更多相关内容，可以到语雀
        <Link
          href="https://www.yuque.com/lifeni/qing"
          isExternal
          color="blue.500"
          _dark={{ color: 'blue.400' }}
          textUnderlineOffset="0.25rem"
        >
          「清廉街」
        </Link>
        知识库看看。
      </Text>
    </VStack>
  </HomeCard>
)

interface HomeTipsLinkProps {
  href: string
  name: string
  icon: IconType
  color: string
}

const HomeTipsLink = ({ href, name, icon, color }: HomeTipsLinkProps) => (
  <Link
    href={href}
    key={name}
    title={name}
    w="full"
    isExternal
    d="flex"
    alignItems="center"
    gap="4"
    px="6"
    py="2"
    _hover={{
      textDecor: 'none',
      bg: 'gray.200',
    }}
    _dark={{
      _hover: {
        bg: 'gray.600',
      },
    }}
  >
    <Icon as={icon} aria-label={name} color={`${color}.500`} fontSize="xl" />
    <Text isTruncated>{name}</Text>
  </Link>
)
