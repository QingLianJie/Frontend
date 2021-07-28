import {
  Avatar,
  Badge,
  Box,
  HStack,
  Icon,
  Text,
  VStack,
} from '@chakra-ui/react'
import { RiSpyLine, RiUserLine } from 'react-icons/ri'
import { dateFormatter } from '../../../../../utils/formatter'
import TextLink from '../../../../common/action/link/TextLink'

interface CourseCommentProps {
  lite?: boolean
  comment: ICourseComment
}

const CourseComment = ({ lite, comment }: CourseCommentProps) => {
  return (
    <VStack align="start" w="full" p="0" spacing="3.5">
      <HStack w="full" spacing="3" px="0.5">
        <Avatar
          w="6"
          h="6"
          src={
            comment.anonymous
              ? undefined
              : comment.user.image
              ? `${process.env.NEXT_PUBLIC_BASE_AVATAR_URL}${comment.user.image}`
              : undefined
          }
          icon={
            comment.anonymous ? (
              <Icon as={RiSpyLine} w="60%" h="60%" />
            ) : (
              <Icon as={RiUserLine} w="60%" h="60%" />
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
            <Text
              as="span"
              whiteSpace="nowrap"
              color="gray.600"
              _dark={{
                color: 'gray.500',
              }}
              fontWeight="600"
            >
              {comment.user.username}
            </Text>
          ) : (
            <Text as="span" fontWeight="600">
              <TextLink href={`/@${comment.user.username}`}>
                {comment.user.username}
              </TextLink>
            </Text>
          )}

          {!lite && (
            <>
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
              <TextLink href={`/courses/${comment.course?.course_id}`}>
                {comment.course?.name}
              </TextLink>
            </>
          )}
        </Text>
        {comment.show && (
          <Badge px="1.5" py="0.5" ms="3" color="gray.500">
            成绩 {comment.score}
          </Badge>
        )}
      </HStack>
      <Box w="full" ps={lite ? '0' : { base: 0, md: 8 }}>
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
