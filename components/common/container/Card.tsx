import { As, Box } from '@chakra-ui/react'
import { ReactNode } from 'react'

interface CardContainerProps {
  as?: As
  full?: boolean
  children: ReactNode | ReactNode[]
}

const CardContainer = ({ as, full, children }: CardContainerProps) => {
  return (
    <Box
      as={as}
      pos="relative"
      borderWidth="1px"
      rounded="md"
      py="4"
      px="6"
      w="full"
      minH={full ? 'full' : 'auto'}
      bg="white"
      _dark={{
        bg: 'gray.800',
      }}
      overflow="hidden"
    >
      {children}
    </Box>
  )
}

export default CardContainer
