import type { SystemProps } from '@chakra-ui/react'
import { Link, VStack } from '@chakra-ui/react'
import { Card } from '~/components/common/containers/Card'
import { LANTag } from '~/components/common/widgets/LANTag'
import { schoolLinks } from '~/contents/links/school-links'

interface ExternalLinksProps extends SystemProps {
  id: string
}

export const ExternalLinks = ({ id, ...props }: ExternalLinksProps) => (
  <Card title="学校" id={id} {...props}>
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
              bg: 'gray.700',
            },
          }}
        >
          {link.name}
          {link.lan && <LANTag />}
        </Link>
      ))}
    </VStack>
  </Card>
)
