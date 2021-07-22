import { Badge, HStack, Icon, Spacer, Text } from '@chakra-ui/react'
import { RiFlagLine, RiTimeLine } from 'react-icons/ri'
import CardLink from '../../../../common/action/link/CardLink'

interface CourseListItemProps {
  course: ICourse
}

const CourseListItem = ({ course }: CourseListItemProps) => {
  return (
    <CardLink href={`/courses/${course.course_id}`}>
      <HStack spacing="4">
        <Text fontWeight="600">{course.name}</Text>

        <Text color="gray.500" fontSize="sm">
          {course.attributes}
        </Text>
        <Text color="gray.500" fontSize="sm">
          {course.course_id}
        </Text>
        <Text color="gray.500" fontSize="sm" d="flex" alignItems="center">
          <Icon as={RiFlagLine} w="4" h="4" me="1.5" />
          {course.credit} 学分
        </Text>
        <Text color="gray.500" fontSize="sm" d="flex" alignItems="center">
          <Icon as={RiTimeLine} w="4" h="4" me="1.5" />
          {course.total_time} 学时
        </Text>
        <Text color="gray.500" fontSize="sm">
          {course.assessment_method}
        </Text>
        <Spacer />
        <Badge px="1.5" py="0.5">
          {course.count} 人学过
        </Badge>
      </HStack>
    </CardLink>
  )
}

export default CourseListItem
