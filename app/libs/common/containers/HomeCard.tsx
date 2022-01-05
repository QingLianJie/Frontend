import type { SystemProps } from '@chakra-ui/react'
import { Heading, VStack } from '@chakra-ui/react'
import type { ReactNode } from 'react'

interface HomeCardProps extends SystemProps {
  title?: string
  children: ReactNode
}

const HomeCard = ({ title, children, ...props }: HomeCardProps) => (
  <VStack
    w="full"
    align="flex-start"
    rounded="md"
    bg="white"
    _dark={{ bg: 'gray.700' }}
    transition="all 0.2s"
    {...props}
  >
    {title && (
      <Heading as="h2" px="6" pt="6" fontSize="md" lineHeight="base">
        {title}
      </Heading>
    )}
    {children}
  </VStack>
)

export default HomeCard
