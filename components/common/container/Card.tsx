import { As, Box } from '@chakra-ui/react'
import { ReactNode } from 'react'

interface CardContainerProps {
  as?: As
  children: ReactNode | ReactNode[]
}

const CardContainer = ({ as, children }: CardContainerProps) => {
  return (
    <Box
      as={as}
      pos="relative"
      borderWidth="1px"
      rounded="md"
      py="4"
      px="6"
      w="full"
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
