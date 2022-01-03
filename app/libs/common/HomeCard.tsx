import { Heading, VStack } from '@chakra-ui/react'
import type { ReactNode } from 'react'

interface HomeCardProps {
  title?: string
  children: ReactNode
}

const HomeCard = ({ title, children }: HomeCardProps) => (
  <VStack align="flex-start" rounded="md" bg="white" _dark={{ bg: 'gray.700' }}>
    {title && (
      <Heading as="h2" px="6" pt="6" fontSize="md" lineHeight="base">
        {title}
      </Heading>
    )}
    {children}
  </VStack>
)

export default HomeCard
