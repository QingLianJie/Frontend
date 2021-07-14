import { Box, Text, VStack } from '@chakra-ui/react'
import { ReactNode, ReactNodeArray } from 'react'

interface HomeGroupProps {
  title: string
  children: ReactNode | ReactNodeArray
}

const HomeGroup = ({ title, children }: HomeGroupProps) => {
  return (
    <VStack align="start" w="full" spacing="6">
      <Text as="h2" fontSize="lg" fontWeight="600" px="4">
        {title}
      </Text>
      <Box w="full">{children}</Box>
    </VStack>
  )
}

export default HomeGroup
