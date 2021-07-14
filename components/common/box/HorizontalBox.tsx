import { HStack, StackDivider } from '@chakra-ui/react'
import { ReactNode } from 'react'

interface HorizontalBoxProps {
  center?: boolean
  divider?: boolean
  children: ReactNode | ReactNode[]
}

const HorizontalBox = ({ center, divider, children }: HorizontalBoxProps) => {
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

export default HorizontalBox
