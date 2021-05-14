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
      margin="2"
      padding="6"
    >
      <Avatar bg="teal.500" w="10" h="10" marginRight="6" />
      <Flex flexDirection="column" justifyContent="center">
        <Text fontSize="xl" marginY="0.25">
          未登录
        </Text>
      </Flex>
      <Spacer />
      <ButtonGroup spacing="4">
        <Button colorScheme="blue">登录</Button>
        <Button colorScheme="green">注册</Button>
      </ButtonGroup>
    </Flex>
  )
}

export default UserTile
