import {
  Box,
  Divider,
  HStack,
  Icon,
  Link,
  Text,
  VStack,
} from '@chakra-ui/react'
import { RiBookOpenLine, RiSpyLine, RiUserLine } from 'react-icons/ri'
import { Link as RemixLink } from 'remix'
import { Card } from '~/components/common/containers/Card'
import { CoursePopover } from '~/components/common/widgets/popovers/Course'
import { relativeTime } from '~/utils/time'

interface FeedCommentProps {
  comments: IComment[]
}

export const FeedComment = ({ comments }: FeedCommentProps) => {
  const course = comments[0].course

  return (
    <Card>
      <VStack align="flex-start" w="full" px="4" pt="5" pb="5" spacing="4">
        <HStack
          w="full"
          px="2"
          rounded="md"
          justify="space-between"
          transition="all 0.2s"
        >
          <CourseLink course={course} />
          <Text
            fontSize="smd"
            color="gray.500"
            _dark={{
              color: 'gray.400',
            }}
          >
            {course.statistics.total} 人学过
          </Text>
        </HStack>
        <Divider transition="all 0.2s" />
        <VStack align="flex-start" w="full" py="1" spacing="4">
          {comments.map(comment => (
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
                <Text
                  fontSize="smd"
                  color="gray.500"
                  _dark={{ color: 'gray.400' }}
                >
                  {relativeTime(comment.date)}
                </Text>
              </HStack>

              <Box>
                <Text
                  lineHeight="tall"
                  fontSize="md"
                  borderLeftWidth="1px"
                  ml="2"
                  pl="5"
                  transition="all 0.2s"
                >
                  {comment.content}
                </Text>
              </Box>
            </VStack>
          ))}
        </VStack>
      </VStack>
    </Card>
  )
}

interface CourseLinkProps {
  course: ICourse
}

const CourseLink = ({ course }: CourseLinkProps) => (
  <CoursePopover course={course}>
    <Link
      as={RemixLink}
      to={`/courses/${course.id}`}
      d="flex"
      alignItems="center"
      fontWeight="bold"
      fontSize="smd"
      color="purple.500"
      _hover={{
        color: 'purple.700',
      }}
      _dark={{
        color: 'blue.400',
        _hover: {
          color: 'blue.200',
        },
      }}
    >
      <Icon as={RiBookOpenLine} aria-label="课程名" fontSize="lg" mr="3" />
      {course.name}
    </Link>
  </CoursePopover>
)
