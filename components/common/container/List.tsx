import { Divider, VStack } from '@chakra-ui/react'
import { ReactNode } from 'react'

interface ListContainerProps {
  spacing?: number | string
  divider?: boolean
  children: ReactNode | ReactNode[]
}

const ListContainer = ({
  spacing = 4,
  divider,
  children,
}: ListContainerProps) => {
  return (
    <VStack
      spacing={spacing}
      w="full"
      divider={divider ? <Divider /> : undefined}
    >
      {children}
    </VStack>
  )
}

export default ListContainer
