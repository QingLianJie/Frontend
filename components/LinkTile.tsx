import { Flex, Icon, LinkBox, LinkOverlay, Text } from '@chakra-ui/react'
import { default as NextLink } from 'next/link'

const LinkTile = ({ href, text, icon, color }) => {
  return (
    <LinkBox
      margin="3"
      paddingX="4"
      paddingY="4"
      display="flex"
      flexDirection="column"
      justifyContent="space-between"
      alignItems="center"
      rounded="md"
      borderWidth="1px"
    >
      <Flex justifyContent="center" w="100%" margin="2" padding="2">
        <Icon as={icon} w="8" h="8" color={color} />
      </Flex>
      <Flex justifyContent="center" w="100%" margin="1" paddingY="1">
        <NextLink href={href} passHref>
          <LinkOverlay>
            <Text fontSize="lg">{text}</Text>
          </LinkOverlay>
        </NextLink>
      </Flex>
    </LinkBox>
  )
}

export default LinkTile
