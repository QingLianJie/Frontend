import { Flex, Text } from '@chakra-ui/react'

const Footer = () => {
  return (
    <Flex
      as="footer"
      paddingX="4"
      paddingY="8"
      flexDirection="column"
      alignItems="center"
      justifyContent="flex-end"
      flex="1"
    >
      <Text fontSize="md" color="gray.500" fontWeight="bold">
        Working In Progress
      </Text>
    </Flex>
  )
}

export default Footer
