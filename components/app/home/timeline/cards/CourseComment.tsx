import { Avatar, Box, Flex, HStack, Text, VStack } from '@chakra-ui/react'
import { dateFormatter } from '../../../../../utils/formatter'
import TextLink from '../../../../common/link/TextLink'

interface CourseCommentCardProps {
  comment: ICourseComment
}

const CourseCommentCard = ({ comment }: CourseCommentCardProps) => {
  return (
    <VStack align="start" w="full" px="0" py="1">
      <HStack w="full" py="1" spacing="3">
        <Avatar
          size="xs"
          name={comment.anonymous ? undefined : comment.user.username}
          src={
            comment.anonymous
              ? undefined
              : comment.user.image
              ? comment.user.image
              : undefined
          }
          color="gray.600"
          bg="gray.300"
          _dark={{
            color: 'gray.300',
            bg: 'gray.600',
          }}
        />
        <Flex align="start" wrap="wrap" w="full">
          <Text whiteSpace="nowrap" me="2">
            {comment.user.username}
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
          <TextLink href={`/courses/${comment.course.course_id}`}>
            {comment.course.name}
          </TextLink>
        </Flex>
      </HStack>
      <Box w="full" ps="8">
        <Box
          borderWidth="1px"
          rounded="md"
          p="4"
          px="6"
          w="full"
          bg="white"
          _dark={{
            bg: 'gray.800',
          }}
        >
          <Text fontSize="lg" pt="0.5" pb="2">
            {comment.content}
          </Text>
          <Text as="time" fontSize="sm" color="gray.500">
            {dateFormatter(comment.created)}
          </Text>
        </Box>
      </Box>
    </VStack>
  )
}

export default CourseCommentCard
