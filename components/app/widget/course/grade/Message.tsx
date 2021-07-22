import { Avatar, HStack, Icon, Text } from '@chakra-ui/react'
import { RiBookLine } from 'react-icons/ri'
import { dateFormatter } from '../../../../../utils/formatter'
import TextLink from '../../../../common/action/link/TextLink'

interface RecentCourseCommentProps {
  created: string
  course: ICourse
}

const RecentCourseComment = ({ course, created }: RecentCourseCommentProps) => {
  return (
    <HStack w="full" spacing="3" alignItems="flex-start">
      <Avatar
        size="xs"
        icon={<Icon as={RiBookLine} w="3.5" h="3.5" />}
        color="gray.500"
        bg="gray.200"
        _dark={{
          color: 'gray.400',
          bg: 'gray.700',
        }}
      />
      <Text w="full">
        <Text
          as="span"
          whiteSpace="nowrap"
          color="gray.600"
          _dark={{
            color: 'gray.500',
          }}
          title={dateFormatter({ date: created })}
        >
          {dateFormatter({ date: created, calendar: true })}
        </Text>
        <Text px="2" as="span">
          <TextLink href={`/courses/${course.course_id}`}>
            {course.name}
          </TextLink>
        </Text>
        <Text as="span" whiteSpace="nowrap">
          出分了
        </Text>
      </Text>
    </HStack>
  )
}

export default RecentCourseComment
