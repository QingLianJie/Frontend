import { Box, Flex, Icon, Text } from '@chakra-ui/react'

const ButtonTile = ({ text, icon, color }) => {
  return (
    <Box
      as="button"
      margin="2"
      paddingX="4"
      paddingY="4"
      display="flex"
      flexDirection="column"
      justifyContent="space-between"
      alignItems="center"
      rounded="md"
      borderWidth="1px"
      _hover={{
        textDecoration: 'none',
        _hover: {
          shadow: 'xl',
        },
      }}
      transition="all 0.2s"
    >
      <Flex justifyContent="center" w="100%" margin="2" padding="2">
        <Icon as={icon} w="8" h="8" color={color} />
      </Flex>
      <Flex justifyContent="center" w="100%" margin="1" paddingY="1">
        <Text fontSize="lg">{text}</Text>
      </Flex>
    </Box>
  )
}

export default ButtonTile
