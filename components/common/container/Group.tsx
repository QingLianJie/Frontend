import { Box, Icon, Text, VStack, HStack } from '@chakra-ui/react'
import { FC } from 'react'
import { ReactNode } from 'react'

interface GroupContainerProps {
  title?: string
  icon?: FC
  full?: boolean
  children: ReactNode | ReactNode[]
}

const GroupContainer = ({
  title,
  icon,
  full,
  children,
}: GroupContainerProps) => {
  return (
    <VStack
      align="start"
      w="full"
      h={full ? 'full' : 'initial'}
      spacing={{ base: 6, md: 9 }}
    >
      {title && (
        <HStack spacing="3">
          {icon && <Icon ms="1" w="5" h="5" as={icon} />}
          <Text as="h2" fontSize="lg" fontWeight="600">
            {title}
          </Text>
        </HStack>
      )}

      <Box w="full" h={full ? 'full' : 'initial'}>
        {children}
      </Box>
    </VStack>
  )
}

export default GroupContainer
