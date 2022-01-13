import {
  Avatar,
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
import { CourseCard } from '~/components/common/widgets/CourseCard'
import { calendarTime } from '~/utils/time'

interface FeedCommentProps {
  comment: IComment
}

export const FeedComment = ({ comment }: FeedCommentProps) => (
  <Card>
    <VStack align="flex-start" w="full" px="4" py="4" spacing="4">
      <HStack w="full" spacing="4" px="2" pt="2">
        <Avatar
          aria-label={comment.author.name}
          src={comment.author.avatar}
          w="10"
          h="10"
          icon={
            comment.author.id === -1 ? (
              <Icon as={RiSpyLine} fontSize="lg" />
            ) : (
              <Icon as={RiUserLine} fontSize="lg" />
            )
          }
          bg="gray.200"
          color="gray.500"
          _hover={{
            color: 'gray.700',
          }}
          _dark={{
            bg: 'gray.700',
            color: 'gray.400',
            _hover: {
              color: 'gray.200',
            },
          }}
          transition="all 0.2s"
          userSelect="none"
          pointerEvents="none"
        />
        <VStack align="flex-start" spacing="0" lineHeight="tall">
          <Text fontWeight="bold">{comment.author.name}</Text>
          <Text fontSize="sm" color="gray.500" _dark={{ color: 'gray.400' }}>
            {calendarTime(comment.date)}
          </Text>
        </VStack>
      </HStack>
      <Text lineHeight="tall" px="2" fontSize="mdl">
        {comment.content}
      </Text>
      <Divider transition="all 0.2s" />
      <HStack
        w="full"
        px="2"
        pb="1"
        rounded="md"
        justify="space-between"
        transition="all 0.2s"
      >
        <CourseCard course={comment.course}>
          <Link
            as={RemixLink}
            to={`/courses/${comment.course.id}`}
            d="flex"
            alignItems="center"
            fontWeight="bold"
            fontSize="sm"
            color="gray.500"
            _hover={{
              color: 'gray.700',
            }}
            _dark={{
              color: 'gray.400',
              _hover: {
                color: 'gray.200',
              },
            }}
          >
            <Icon
              as={RiBookOpenLine}
              aria-label="课程名"
              fontSize="md"
              mr="3"
            />
            {comment.course.name}
          </Link>
        </CourseCard>
        <Text
          fontSize="sm"
          color="gray.500"
          _dark={{
            color: 'gray.400',
          }}
        >
          {comment.course.statistics.total} 人学过
        </Text>
      </HStack>
    </VStack>
  </Card>
)
