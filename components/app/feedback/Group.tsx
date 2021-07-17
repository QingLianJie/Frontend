import { Badge, Box, HStack, Text, VStack } from '@chakra-ui/react'
import { ReactNode } from 'react'

interface FeedbackGroupProps {
  index: string
  title: string
  description: string
  recommend?: boolean
  children: ReactNode | ReactNode[]
}

const FeedbackGroup = ({
  index,
  title,
  description,
  recommend,
  children,
}: FeedbackGroupProps) => {
  return (
    <VStack align="start" pb="2">
      <Text fontSize="xl" fontWeight="600" d="flex" alignItems="center">
        {index}. {title}
        {recommend && (
          <Badge colorScheme="green" ms="2">
            推荐
          </Badge>
        )}
      </Text>
      <Text pt="1.5" pb="3">
        {description}
      </Text>
      <HStack spacing="3">{children}</HStack>
    </VStack>
  )
}

export default FeedbackGroup
