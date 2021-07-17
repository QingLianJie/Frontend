import { Avatar, Box, Flex, HStack, Icon, Text, VStack } from '@chakra-ui/react'
import { RiBookLine, RiBookOpenFill } from 'react-icons/ri'
import { dateFormatter } from '../../../../../utils/formatter'
import TextLink from '../../../../common/link/TextLink'

interface RecentCourseCommentProps {
  created: string
  course: ICourse
}

const RecentCourseComment = ({ course, created }: RecentCourseCommentProps) => {
  return (
    <HStack w="full" py="0" spacing="3">
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
      <Flex align="start" wrap="wrap" w="full">
        <Text
          whiteSpace="nowrap"
          me="2"
          color="gray.600"
          _dark={{
            color: 'gray.500',
          }}
        >
          {dateFormatter(created)}
        </Text>
        <TextLink href={`/courses/${course.course_id}`}>{course.name}</TextLink>
        <Text whiteSpace="nowrap" ms="2">
          出分了
        </Text>
      </Flex>
    </HStack>
  )
}

export default RecentCourseComment
