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
      borderWidth="1px"
      rounded="md"
      py="4"
      px="6"
      w="full"
      bg="white"
      _dark={{
        bg: 'gray.800',
      }}
    >
      {children}
    </Box>
  )
}

export default CardContainer
