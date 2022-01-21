import { Button, HStack, Icon, Link, Text, VStack } from '@chakra-ui/react'
import { RiBookOpenLine, RiDeleteBinLine } from 'react-icons/ri'
import { Link as RemixLink } from 'remix'
import { Card } from '~/components/common/Card'
import { CoursePopover } from '~/components/common/popovers/Course'
import { ICourse } from '~/types'
import { calendarTime } from '~/utils/time'

interface CommentProps {
  content: string
  date: string
  course: ICourse
}

export const Comment = ({ content, date, course }: CommentProps) => (
  <Card>
    <VStack w="full" spacing="3" pt="6" pb="5" px="5" align="flex-start">
      <Text fontSize="sm" px="1" color="gray.500" _dark={{ color: 'gray.400' }}>
        {calendarTime(date)}
      </Text>
      <Text lineHeight="tall" px="1">
        {content}
      </Text>
      <HStack w="full" justifyContent="space-between" alignItems="center">
        \
        <CoursePopover course={course}>
          <Link
            as={RemixLink}
            to={`/courses/${course.id}`}
            d="flex"
            rounded="sm"
            px="1"
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
                color: 'blue.300',
              },
            }}
          >
            <Icon
              as={RiBookOpenLine}
              aria-label="课程名"
              fontSize="mdl"
              mr="3"
            />
            {course.name}
          </Link>
        </CoursePopover>
        <Button
          variant="link"
          fontSize="smd"
          rounded="sm"
          h="auto"
          p="1"
          py="0"
          lineHeight="tall"
          color="red.500"
          _dark={{
            color: 'red.400',
            _hover: {
              color: 'red.300',
            },
          }}
          _hover={{ color: 'red.700', textDecor: 'none' }}
        >
          <Icon as={RiDeleteBinLine} aria-label="删除" fontSize="mdl" mr="3" />
          删除
        </Button>
      </HStack>
    </VStack>
  </Card>
)
