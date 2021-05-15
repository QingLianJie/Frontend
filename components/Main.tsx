import { Container } from '@chakra-ui/react'

const Main = ({ children }) => {
  return (
    <>
      <Container
        maxW="container.lg"
        paddingY="2"
        minH="100vh"
        display="flex"
        flexDirection="column"
      >
        {children}
      </Container>
    </>
  )
}

export default Main
