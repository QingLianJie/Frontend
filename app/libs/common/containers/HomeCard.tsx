import type { SystemProps } from '@chakra-ui/react'
import { Heading, VStack } from '@chakra-ui/react'
import type { ReactNode } from 'react'

interface HomeCardProps extends SystemProps {
  title?: string
  id?: string
  children: ReactNode
}

export const HomeCard = ({ title, id, children, ...props }: HomeCardProps) => (
  <VStack
    id={id}
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
