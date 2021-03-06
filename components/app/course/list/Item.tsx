import { Badge, HStack, Icon, Text, Wrap, WrapItem } from '@chakra-ui/react'
import { RiFlagLine, RiTimeLine } from 'react-icons/ri'
import ListLink from '../../../common/action/link/ListLink'

interface CourseListItemProps {
  course?: ICourse
}

const CourseListItem = ({ course }: CourseListItemProps) => {
  return (
    <ListLink href={`/courses/${course?.course_id}`}>
      <Wrap
        spacing="2"
        align={{ base: 'flex-start', lg: 'center' }}
        direction={{ base: 'column', lg: 'row' }}
      >
        <WrapItem pe="2">
          <Text color="gray.500" fontSize="sm">
            {course?.course_id}
          </Text>
        </WrapItem>

        <WrapItem pe="2">
          <Text>{course?.name}</Text>
        </WrapItem>

        <WrapItem pe="2" ms="auto">
          <HStack spacing="4">
            <Text color="gray.500" fontSize="sm">
              {course?.attributes}
            </Text>

            <Text color="gray.500" fontSize="sm">
              {course?.assessment_method}
            </Text>

            <Text color="gray.500" fontSize="sm" d="flex" alignItems="center">
              <Icon as={RiFlagLine} w="4" h="4" me="1.5" />
              {course?.credit} 学分
            </Text>

            <Text color="gray.500" fontSize="sm" d="flex" alignItems="center">
              <Icon as={RiTimeLine} w="4" h="4" me="1.5" />
              {course?.total_time} 学时
            </Text>
          </HStack>
        </WrapItem>

        <WrapItem flex="1" justifyContent="flex-end">
          <Badge my="1" px="1.5" py="0.5" color="gray.500">
            {course?.count} 人学过
          </Badge>
        </WrapItem>
      </Wrap>
    </ListLink>
  )
}

export default CourseListItem
