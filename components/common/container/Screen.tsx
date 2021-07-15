import { Flex } from '@chakra-ui/react'
import { ReactNode } from 'react'

interface ScreenContainerProps {
  children: ReactNode | ReactNode[]
}

const ScreenContainer = ({ children }: ScreenContainerProps) => {
  return (
    <Flex minH="100vh" flexDir="column">
      {children}
    </Flex>
  )
}

export default ScreenContainer
