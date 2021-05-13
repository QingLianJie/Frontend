import { Flex, Icon, LinkBox, LinkOverlay, Text } from '@chakra-ui/react'
import { default as NextLink } from 'next/link'

const LinkTile = ({ href, text, icon, color }) => {
  return (
    <LinkBox
      margin="3"
      paddingX="6"
      paddingY="4"
      display="flex"
      flexDirection="column"
      justifyContent="space-between"
      alignItems="center"
      borderWidth="1px"
      rounded="md"
    >
      <Flex justifyContent="center" w="100%" margin="2" paddingBottom="1">
        <Icon as={icon} w="8" h="8" color={color} strokeWidth="1.5" />
      </Flex>
      <Flex justifyContent="center" w="100%" margin="1">
        <NextLink href={href} passHref>
          <LinkOverlay>
            <Text fontSize="md">{text}</Text>
          </LinkOverlay>
        </NextLink>
      </Flex>
    </LinkBox>
  )
}

export default LinkTile
