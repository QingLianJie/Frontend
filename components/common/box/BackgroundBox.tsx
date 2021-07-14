import { Flex } from '@chakra-ui/react'
import { forwardRef, ReactNode } from 'react'

interface BackgroundBoxProps {
  children?: ReactNode | ReactNode[]
}

const BackgroundBox = ({ children }: BackgroundBoxProps, ref: any) => {
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

export default forwardRef(BackgroundBox)
