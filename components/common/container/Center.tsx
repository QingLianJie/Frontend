import { Flex } from '@chakra-ui/react'
import { ReactNode } from 'react'

interface CenterContainerProps {
  screen?: boolean
  children: ReactNode | ReactNode[]
}

const CenterContainer = ({ screen, children }: CenterContainerProps) => {
  return (
    <Flex
      as="main"
      minH={screen ? '100vh' : 'unset'}
      flexDir="column"
      alignItems="center"
      justifyContent="center"
    >
      {children}
    </Flex>
  )
}

export default CenterContainer
