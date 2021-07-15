import { Flex } from '@chakra-ui/react'
import { ReactNode } from 'react'

interface ScreenContainerProps {
  gray?: boolean
  children: ReactNode | ReactNode[]
}

const ScreenContainer = ({ gray, children }: ScreenContainerProps) => {
  return (
    <Flex
      minH="100vh"
      flexDir="column"
      bg={gray ? 'gray.50' : 'transparent'}
      _dark={{
        bg: gray ? 'gray.900' : 'transparent',
      }}
    >
      {children}
    </Flex>
  )
}

export default ScreenContainer
