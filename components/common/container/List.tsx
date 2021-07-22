import { Divider, VStack } from '@chakra-ui/react'
import { ReactNode } from 'react'

interface ListContainerProps {
  divider?: boolean
  children: ReactNode | ReactNode[]
}

const ListContainer = ({ divider, children }: ListContainerProps) => {
  return (
    <VStack
      spacing="4"
      w="full"
      ms="1.5"
      py="1"
      divider={divider ? <Divider /> : undefined}
    >
      {children}
    </VStack>
  )
}

export default ListContainer
