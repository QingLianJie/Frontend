import { Link, VStack } from '@chakra-ui/react'
import { schoolLinks } from '~/contents/links/school-links'
import HomeCard from '~/libs/common/HomeCard'

const Links = () => (
  <HomeCard title="学校">
    <VStack align="flex-start" spacing="0" w="full" pt="2" pb="4">
      {schoolLinks.map(link => (
        <Link
          href={link.href}
          key={link.name}
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
        </Link>
      ))}
    </VStack>
  </HomeCard>
)

export default Links
