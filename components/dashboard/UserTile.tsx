import {
  Avatar,
  Button,
  Box,
  ButtonGroup,
  Flex,
  LinkBox,
  LinkOverlay,
  Spacer,
  Text,
} from '@chakra-ui/react'
import { default as NextLink } from 'next/link'

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
        <Text fontSize="xl" marginY="0.5" fontWeight="bold">
          未登录
        </Text>
      </Flex>
      <Spacer />
      <ButtonGroup spacing="4">
        <LinkBox>
          <Button colorScheme="blue">
            <NextLink href="/login" passHref>
              <LinkOverlay>
                <Text>登录</Text>
              </LinkOverlay>
            </NextLink>
          </Button>
        </LinkBox>
        <LinkBox>
          <Button colorScheme="green">
            <NextLink href="/signup" passHref>
              <LinkOverlay>
                <Text>注册</Text>
              </LinkOverlay>
            </NextLink>
          </Button>
        </LinkBox>
      </ButtonGroup>
    </Flex>
  )
}

const UserTileLogged = () => {
  return (
    <Flex
      flexDirection="column"
      justifyContent="center"
      borderWidth="1px"
      rounded="md"
      margin="2"
      padding="6"
    >
      <Flex>
        <Avatar
          bg="teal.500"
          w="16"
          h="16"
          marginRight="6"
          src="https://file.lifeni.life/avatar.jpg"
        />
        <Flex flexDirection="column" justifyContent="center">
          <Text fontSize="xl" marginY="0.5" fontWeight="bold">
            一个用户
          </Text>
          <Text fontSize="sm" color="gray.500" marginY="0.5">
            已绑定：2018XXXXXX
          </Text>
        </Flex>
      </Flex>
      <Flex
        flexDirection="column"
        alignItems="flex-end"
        justifyContent="center"
        marginTop="6"
      >
        <ButtonGroup spacing="4">
          <Button>
            <Text>修改信息</Text>
          </Button>
          <Button colorScheme="red">
            <Text>退出登录</Text>
          </Button>
        </ButtonGroup>
      </Flex>
      {/*
      <ButtonGroup spacing="4">
        <Button colorScheme="red">
          <Text>退出登录</Text>
        </Button>
      </ButtonGroup> */}
    </Flex>
  )
}

export { UserTile, UserTileLogged }
