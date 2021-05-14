import {
  Avatar,
  Button,
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
        <Text fontSize="xl" marginY="0.25">
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
            <NextLink href="/register" passHref>
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

export default UserTile
