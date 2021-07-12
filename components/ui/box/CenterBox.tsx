import { Flex } from '@chakra-ui/react'
import { ReactNode, ReactNodeArray } from 'react'

interface CenterBoxProps {
  screen?: boolean
  children: ReactNode | ReactNodeArray
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
