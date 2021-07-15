import { HStack, StackDivider } from '@chakra-ui/react'
import { ReactNode } from 'react'

interface HorizontalContainerProps {
  center?: boolean
  divider?: boolean
  children: ReactNode | ReactNode[]
}

const HorizontalContainer = ({
  center,
  divider,
  children,
}: HorizontalContainerProps) => {
  return (
    <HStack
      divider={divider ? <StackDivider /> : undefined}
      justify={center ? 'center' : 'unset'}
      my="3"
    >
      {children}
    </HStack>
  )
}

export default HorizontalContainer
