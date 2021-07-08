import { Container, Flex } from '@chakra-ui/react'
import { FormEvent, ReactNode, ReactNodeArray } from 'react'

interface AuthFormProps {
  action: (e: FormEvent) => void
  children: ReactNode | ReactNodeArray
}

const AuthForm = ({ action, children }: AuthFormProps) => {
  return (
    <Flex
      as="main"
      minH="100vh"
      flexDir="column"
      alignItems="center"
      justifyContent="center"
    >
      <Container
        as="form"
        maxW="sm"
        px="8"
        py="12"
        display="flex"
        flexDir="column"
        justifyContent="center"
        borderWidth={{ base: 'none', sm: '1px' }}
        borderRadius="md"
        onSubmit={action}
      >
        {children}
      </Container>
    </Flex>
  )
}

export default AuthForm
