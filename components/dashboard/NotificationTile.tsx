import {
  Avatar,
  Button,
  ButtonGroup,
  Flex,
  Heading,
  Spacer,
  Text,
} from '@chakra-ui/react'

const NotificationTile = () => {
  return (
    <Flex
      as="article"
      flexDirection="column"
      borderWidth="1px"
      rounded="md"
      margin="2"
      padding="6"
    >
      <Text fontSize="sm" color="gray.500">
        2021 年 5 月 14 日
      </Text>
      <Heading as="h1" size="md" marginY="3">
        这是一则通知
      </Heading>
      <Text>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat.
      </Text>
    </Flex>
  )
}

export default NotificationTile
