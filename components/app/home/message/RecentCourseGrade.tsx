import { Avatar, HStack, Icon, Text } from '@chakra-ui/react'
import { RiBookLine } from 'react-icons/ri'
import { dateFormatter } from '../../../../utils/formatter'
import TextLink from '../../../common/action/link/TextLink'

interface RecentCourseGradeProps {
  created: string
  course: ICourse
}

const RecentCourseGrade = ({ course, created }: RecentCourseGradeProps) => {
  return (
    <HStack w="full" spacing="3">
      <Avatar
        w="6"
        h="6"
        icon={<Icon as={RiBookLine} w="60%" h="60%" />}
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

export default RecentCourseGrade
