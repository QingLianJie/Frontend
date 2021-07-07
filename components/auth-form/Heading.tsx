import { Heading } from '@chakra-ui/react'
import { ReactNode, ReactNodeArray } from 'react'

interface AuthHeadingProps {
  children: ReactNode | ReactNodeArray
}

const AuthHeading = ({ children }: AuthHeadingProps) => {
  return (
    <Heading
      as="h2"
      fontSize="2xl"
      fontWeight="normal"
      mt="4"
      mb="12"
      textAlign="center"
    >
      {children}
    </Heading>
  )
}

export default AuthHeading
