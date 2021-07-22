import { Text, VStack } from '@chakra-ui/react'
import { RiDiscussLine } from 'react-icons/ri'
import useCourse from '../../../hooks/useCourse'
import GroupContainer from '../../common/container/Group'
import ListContainer from '../../common/container/List'
import CourseComment from '../widget/course/comment/Card'

interface CourseCommentListProps {
  id: string
}

const CourseCommentList = ({ id }: CourseCommentListProps) => {
  const { courseInfo, isLoading, isError } = useCourse(id)

  return (
    <GroupContainer title="课程评论" icon={RiDiscussLine}>
      {isError ? null : isLoading ? null : courseInfo.comments.length === 0 ? (
        <VStack align="start" px="2" py="0.5">
          <Text color="gray.500">这个课程还没有评论，</Text>
          <Text color="gray.500">有什么想说的吗，</Text>
          <Text color="gray.500">欢迎写一些有帮助的评论。</Text>
        </VStack>
      ) : (
        <ListContainer divider>
          {courseInfo.comments.map((comment, index) => (
            <CourseComment lite comment={comment} key="index" />
          ))}
        </ListContainer>
      )}
    </GroupContainer>
  )
}

export default CourseCommentList
