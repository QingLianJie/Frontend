import { Flex } from '@chakra-ui/react'
import { forwardRef, ReactNode } from 'react'

interface BackgroundContainerProps {
  children?: ReactNode | ReactNode[]
}

const BackgroundContainer = (
  { children }: BackgroundContainerProps,
  ref: any
) => {
  return (
    <Flex
      as="div"
      ref={ref}
      pos="fixed"
      left="0"
      top="0"
      minW="100vw"
      minH="100vh"
      zIndex="-1"
      aria-hidden="true"
    >
      {children}
    </Flex>
  )
}

export default forwardRef(BackgroundContainer)
