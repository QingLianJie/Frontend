import { Container, Flex, Text } from '@chakra-ui/react'

const Footer = () => {
  return (
    <Flex as="footer" px={{ base: 6, md: 8, lg: 12 }} py="8">
      <Container
        w="full"
        maxW="container.xl"
        mx="auto"
        d="flex"
        px={{ base: 0, md: 4 }}
        alignItems="center"
        justifyContent="space-between"
      >
        <Text fontSize="sm" color="gray.500">
          清廉街 © 2021
        </Text>
        <Text fontSize="sm" color="gray.500">
          黑ICP备2021003925号-1
        </Text>
      </Container>
    </Flex>
  )
}

export default Footer
