import type { SystemProps } from '@chakra-ui/react'
import { Link, VStack } from '@chakra-ui/react'
import { HomeCard } from '~/components/common/containers/HomeCard'
import { LANTag } from '~/components/common/tags/LANTag'
import { schoolLinks } from '~/contents/links/school-links'

interface HomeLinksProps extends SystemProps {
  id: string
}

export const HomeLinks = ({ id, ...props }: HomeLinksProps) => (
  <HomeCard title="学校" id={id} {...props}>
    <VStack align="flex-start" spacing="0" w="full" pt="2" pb="4">
      {schoolLinks.map(link => (
        <Link
          href={link.href}
          key={link.name}
          title={link.name}
          w="full"
          px="6"
          py="2"
          isTruncated
          isExternal
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
          {link.name}
          {link.lan && <LANTag />}
        </Link>
      ))}
    </VStack>
  </HomeCard>
)
