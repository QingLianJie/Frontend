import {
  Box,
  Divider,
  HStack,
  Icon,
  Link,
  Text,
  Tooltip,
  VStack,
  Wrap,
  WrapItem,
} from '@chakra-ui/react'
import { RiBookOpenLine, RiSpyLine, RiUserLine } from 'react-icons/ri'
import { Link as RemixLink } from 'remix'
import { Card } from '~/components/common/Card'
import { type IComment, type ICourse } from '~/types'
import { calcRate } from '~/utils/math'
import { relativeTime } from '~/utils/time'

interface FeedCommentProps {
  comments: IComment[]
}

export const FeedComment = ({ comments }: FeedCommentProps) => {
  const course = comments[0].course

  return (
    <Card>
      <VStack align="flex-start" w="full" px="4" pt="6" pb="6" spacing="5">
        <CourseInfo course={course} />
        <Divider transition="all 0.2s" />
        <VStack align="flex-start" w="full" py="1" spacing="4">
          {comments.map(comment => (
            <CommentItem comment={comment} key={comment.id} />
          ))}
        </VStack>
      </VStack>
    </Card>
  )
}

interface CourseInfoProps {
  course: ICourse
}

const CourseInfo = ({ course }: CourseInfoProps) => (
  <VStack align="flex-start" w="full" px="1" spacing="2">
    <HStack w="full" pb="3" justify="space-between" transition="all 0.2s">
      <Link
        as={RemixLink}
        to={`/courses/${course.id}`}
        d="flex"
        px="1"
        rounded="sm"
        alignItems="center"
        fontWeight="bold"
        color="purple.500"
        _hover={{
          color: 'purple.700',
        }}
        _dark={{
          color: 'blue.400',
          _hover: {
            color: 'blue.300',
          },
        }}
      >
        <Icon as={RiBookOpenLine} aria-label="课程名" fontSize="lg" mr="3" />
        {course.name}
      </Link>
      <Text
        px="1"
        fontSize="smd"
        color="gray.500"
        _dark={{
          color: 'gray.400',
        }}
      >
        {course.id}
      </Text>
    </HStack>
    <Wrap w="full" justify="flex-start" spacing="2" px="1" fontSize="smd">
      <WrapItem pr="2">{course.type}</WrapItem>
      <WrapItem pr="2">
        学分
        <Text as="span" pl="2">
          {course.credit}
        </Text>
      </WrapItem>
      <WrapItem pr="2">
        学时
        <Text as="span" pl="2">
          {course.period}
        </Text>
      </WrapItem>
      <WrapItem pr="2">{course.test}</WrapItem>
      <WrapItem pr="2">{course.category}</WrapItem>
    </Wrap>
    <Wrap w="full" justify="flex-start" spacing="2" px="1" fontSize="smd">
      <WrapItem pr="2">
        <Tooltip
          hasArrow
          label={`${course.statistics.excellent} / ${course.statistics.total}`}
          px="2.5"
          py="1.5"
          placement="top"
        >
          <Text>
            优秀率
            <Text
              as="strong"
              pl="2"
              color="green.500"
              _dark={{ color: 'green.400' }}
            >
              {calcRate(course.statistics.excellent / course.statistics.total)}
            </Text>
          </Text>
        </Tooltip>
      </WrapItem>
      <WrapItem pr="2">
        <Tooltip
          hasArrow
          label={`${course.statistics.fail} / ${course.statistics.total}`}
          px="2.5"
          py="1.5"
          placement="top"
        >
          <Text>
            挂科率
            <Text
              as="strong"
              pl="2"
              color="red.500"
              _dark={{ color: 'red.400' }}
            >
              {calcRate(course.statistics.fail / course.statistics.total)}
            </Text>
          </Text>
        </Tooltip>
      </WrapItem>
    </Wrap>
  </VStack>
)

interface CommentItemProps {
  comment: IComment
}

const CommentItem = ({ comment }: CommentItemProps) => (
  <VStack w="full" align="flex-start" spacing="3" px="2">
    <HStack w="full" align="center" spacing="3">
      <Text
        fontSize="smd"
        d="flex"
        alignItems="center"
        color="gray.500"
        _dark={{ color: 'gray.400' }}
      >
        <Icon
          as={comment.author.id === -1 ? RiSpyLine : RiUserLine}
          aria-label="用户标识"
          fontSize="lg"
          mr="3"
          color="gray.500"
          _dark={{ color: 'gray.400' }}
        />
        {comment.author.name}
      </Text>
      <Text fontSize="smd" color="gray.500" _dark={{ color: 'gray.400' }}>
        {relativeTime(comment.date)}
      </Text>
    </HStack>

    <Box pl="2">
      <Text
        lineHeight="tall"
        fontSize="md"
        pl="5"
        mx="1px"
        borderLeftWidth="1px"
        transition="all 0.2s"
      >
        {comment.content}
      </Text>
    </Box>
  </VStack>
)
