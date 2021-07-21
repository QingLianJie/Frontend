import { Avatar, Box, HStack, Icon, Text, VStack } from '@chakra-ui/react'
import { RiSpyLine, RiUserLine } from 'react-icons/ri'
import { dateFormatter } from '../../../../../utils/formatter'
import TextLink from '../../../../common/action/link/TextLink'

interface CourseCommentProps {
  comment: ICourseComment
}

const CourseComment = ({ comment }: CourseCommentProps) => {
  return (
    <VStack align="start" w="full" p="0" spacing="3">
      <HStack w="full" py="0.5" spacing="3" alignItems="flex-start">
        <Avatar
          size="xs"
          src={
            comment.anonymous
              ? undefined
              : `${process.env.NEXT_PUBLIC_BASE_AVATAR_URL}${comment.user.image}`
              ? `${process.env.NEXT_PUBLIC_BASE_AVATAR_URL}${comment.user.image}`
              : undefined
          }
          icon={
            comment.anonymous ? (
              <Icon as={RiSpyLine} w="3.5" h="3.5" />
            ) : (
              <Icon as={RiUserLine} w="3.5" h="3.5" />
            )
          }
          color="gray.500"
          bg="gray.200"
          _dark={{
            color: 'gray.400',
            bg: 'gray.700',
          }}
        />
        <Text w="full">
          {comment.anonymous ? (
            <Text as="span" whiteSpace="nowrap">
              {comment.user.username}
            </Text>
          ) : (
            <TextLink href={`/@${comment.user.username}`}>
              {comment.user.username}
            </TextLink>
          )}

          <Text
            as="span"
            whiteSpace="nowrap"
            mx="2"
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
        </Text>
      </HStack>
      <Box w="full" ps={{ base: 0, md: 8 }}>
        <Box
          borderWidth="1px"
          rounded="md"
          py="4"
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
          <Text
            as="time"
            fontSize="sm"
            color="gray.500"
            d="inline-block"
            pb="0.5"
            title={dateFormatter({ date: comment.created })}
          >
            {dateFormatter({ date: comment.created, calendar: true })}
          </Text>
        </Box>
      </Box>
    </VStack>
  )
}

export default CourseComment
