import { Flex, Text } from '@chakra-ui/react'

const Footer = () => {
  return (
    <Flex
      as="footer"
      px="4"
      py="6"
      flexDirection="column"
      alignItems="center"
      justifyContent="flex-end"
    >
      <Text fontSize="md" color="gray.500" fontWeight="bold">
        Working In Progress
      </Text>
    </Flex>
  )
}

export default Footer
