import { Flex, Heading, Text } from '@chakra-ui/react'
import { IPostCardProps } from '../next-env'

const PostCard = ({ index, width, data }) => {
  const { id, title, content, date }: IPostCardProps = data

  return (
    <Flex m="2" p="6" flexDir="column" borderWidth="1px" rounded="md">
      <Text fontSize="sm" color="gray.500">
        # {index + 1} - {date}
      </Text>
      <Heading fontSize="lg" py="2">
        {title}
      </Heading>
      <Text fontSize="md">{content}</Text>
    </Flex>
  )
}

export { PostCard }
