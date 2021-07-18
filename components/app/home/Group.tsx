import { Box, Icon, Text, VStack, HStack } from '@chakra-ui/react'
import { FC } from 'react'
import { ReactNode } from 'react'

interface HomeGroupProps {
  title?: string
  icon?: FC
  children: ReactNode | ReactNode[]
}

const HomeGroup = ({ title, icon, children }: HomeGroupProps) => {
  return (
    <VStack align="start" w="full" spacing={{ base: 8, md: 10 }}>
      {title && (
        <HStack spacing="3">
          {icon && <Icon ms="2" w="5" h="5" as={icon} />}
          <Text as="h2" fontSize="lg" fontWeight="600">
            {title}
          </Text>
        </HStack>
      )}

      <Box w="full">{children}</Box>
    </VStack>
  )
}

export default HomeGroup
