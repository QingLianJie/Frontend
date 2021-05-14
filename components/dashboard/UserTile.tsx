import {
  Avatar,
  Button,
  ButtonGroup,
  Flex,
  Spacer,
  Text,
} from '@chakra-ui/react'

const UserTile = () => {
  return (
    <Flex
      alignItems="center"
      borderWidth="1px"
      rounded="md"
      margin={{ base: '2', lg: '3' }}
      padding="6"
    >
      <Avatar bg="gray.300" w="10" h="10" marginRight="6" />
      <Flex flexDirection="column" justifyContent="center">
        <Text fontSize="xl" marginY="0.25">
          未登录用户
        </Text>
      </Flex>
      <Spacer />
      <ButtonGroup spacing="6">
        <Button colorScheme="blue">登录</Button>
        <Button colorScheme="green">注册</Button>
      </ButtonGroup>
    </Flex>
  )
}

export default UserTile
