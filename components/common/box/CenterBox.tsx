import { Flex } from '@chakra-ui/react'
import { ReactNode } from 'react'

interface CenterBoxProps {
  screen?: boolean
  children: ReactNode | ReactNode[]
}

const CenterBox = ({ screen, children }: CenterBoxProps) => {
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

export default CenterBox
