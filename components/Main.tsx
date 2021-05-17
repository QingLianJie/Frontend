import { Container } from '@chakra-ui/react'

const Main = ({ children }) => {
  return (
    <>
      <Container
        w="100%"
        maxW="full"
        minH="100vh"
        p="0"
        d="flex"
        flexDir="column"
      >
        {children}
      </Container>
    </>
  )
}

export default Main
