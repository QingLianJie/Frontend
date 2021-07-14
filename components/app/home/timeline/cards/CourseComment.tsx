import { Avatar, Box, Flex, HStack, Text, VStack } from '@chakra-ui/react'
import { dateFormatter } from '../../../../../utils/formatter'
import TextLink from '../../../../common/link/TextLink'

interface CourseCommentCardProps {
  author: string
  course: {
    name: string
    id: string
  }
  content: string
  date: string
  anonymous: boolean
}

const CourseCommentCard = ({
  author,
  date,
  content,
  course,
  anonymous,
}: CourseCommentCardProps) => {
  return (
    <VStack align="start" w="full" px="0.5" py="1">
      <HStack w="full" py="1" spacing="3">
        <Avatar
          size="xs"
          name={anonymous ? undefined : author}
          color="gray.600"
          bg="gray.300"
          _dark={{
            color: 'gray.300',
            bg: 'gray.600',
          }}
        />
        <Flex align="start" wrap="wrap" w="full">
          <Text whiteSpace="nowrap" me="2">
            {author}
          </Text>
          <Text
            whiteSpace="nowrap"
            me="2"
            color="gray.600"
            _dark={{
              color: 'gray.500',
            }}
          >
            评论了课程
          </Text>
          <TextLink href={`/courses/${course.id}`}>{course.name}</TextLink>
        </Flex>
      </HStack>
      <Box w="full" ps="8">
        <Box borderWidth="1px" rounded="md" p="4" px="6" w="full">
          <Text fontSize="lg" pt="0.5" pb="2">
            {content}
          </Text>
          <Text as="time" fontSize="sm" color="gray.500">
            {dateFormatter(date)}
          </Text>
        </Box>
      </Box>
    </VStack>
  )
}

export default CourseCommentCard
