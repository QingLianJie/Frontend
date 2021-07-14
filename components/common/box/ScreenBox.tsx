import { Flex } from '@chakra-ui/react'
import { ReactNode } from 'react'

interface ScreenBoxProps {
  children: ReactNode | ReactNode[]
}

const ScreenBox = ({ children }: ScreenBoxProps) => {
  return (
    <Flex minH="100vh" flexDir="column">
      {children}
    </Flex>
  )
}

export default ScreenBox
