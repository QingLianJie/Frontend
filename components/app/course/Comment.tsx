import { Text } from '@chakra-ui/react'
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
        <Text>暂无评论</Text>
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
