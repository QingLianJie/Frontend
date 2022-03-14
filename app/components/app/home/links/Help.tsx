import { Icon, Link, Text, VStack, type SystemProps } from '@chakra-ui/react'
import { type IconType } from 'react-icons'
import { Card } from '~/components/common/Card'
import { helpLinks } from '~/contents/links/external/help'

interface HelpProps extends SystemProps {}

export const Help = (props: HelpProps) => (
  <Card title="帮助" {...props}>
    <VStack w="full" px="0" pb="4" pt="2" align="flex-start" spacing="0">
      {helpLinks.map(link => (
        <HelpLink {...link} key={link.name} />
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
          color="purple.500"
          _hover={{ color: 'purple.700' }}
          _dark={{
            color: 'blue.400',
            _hover: {
              color: 'blue.300',
            },
          }}
          textUnderlineOffset="0.25rem"
        >
          「清廉街」
        </Link>
        知识库看看。
      </Text>
    </VStack>
  </Card>
)

interface HelpLinkProps {
  href: string
  name: string
  icon: IconType
  color: string
}

const HelpLink = ({ href, name, icon, color }: HelpLinkProps) => (
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
        bg: 'gray.700',
      },
    }}
  >
    <Icon as={icon} aria-label={name} color={`${color}.500`} fontSize="xl" />
    <Text isTruncated>{name}</Text>
  </Link>
)
