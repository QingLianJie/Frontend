import { VStack, Text, Icon, Link } from '@chakra-ui/react'
import type { IconType } from 'react-icons'
import { tips } from '~/contents/links/tips-links'
import { HomeCard } from '~/libs/common/containers/HomeCard'

export const HomeTips = () => (
  <HomeCard title="帮助">
    <VStack w="full" px="0" pb="4" pt="2" align="flex-start" spacing="0">
      {tips.map(tip => (
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
        更多内容，可以到语雀
        <Link
          href="https://www.yuque.com/lifeni/qing"
          isExternal
          color="blue.500"
          _hover={{ textDecor: 'none' }}
          _dark={{ color: 'blue.400' }}
          mx="1"
        >
          「清廉街」知识库
        </Link>
        看看。
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
    isExternal
    d="flex"
    alignItems="center"
    gap="4"
    w="full"
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
    <Text>{name}</Text>
  </Link>
)
