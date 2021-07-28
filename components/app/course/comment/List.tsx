import { Alert, AlertIcon, Spacer, Text } from '@chakra-ui/react'
import { RiDiscussLine } from 'react-icons/ri'
import useCourse from '../../../../hooks/useCourse'
import useUser from '../../../../hooks/useUser'
import CardContainer from '../../../common/container/Card'
import GroupContainer from '../../../common/container/Group'
import ListContainer from '../../../common/container/List'
import CourseComment from '../../widget/course/comment/Card'
import CourseCommentInput from './Input'

interface CourseCommentListProps {
  id: string
}

const CourseCommentList = ({ id }: CourseCommentListProps) => {
  const { user, isLoading: isUserLoading } = useUser()
  const { courseInfo, isLoading, isError } = useCourse(id)

  return (
    <GroupContainer title="课程评论" icon={RiDiscussLine}>
      {isUserLoading ? null : user?.self ? (
        <CourseCommentInput id={id} />
      ) : (
        <Alert status="info" rounded="md">
          <AlertIcon />
          登录后才能发表评论
        </Alert>
      )}

      <Spacer h="4" />

      {isError ? null : isLoading ? null : courseInfo.comments.length === 0 ? (
        <CardContainer>
          <Text color="gray.500" lineHeight="1.75">
            这个课程还没有评论，
          </Text>
          <Text color="gray.500" lineHeight="1.75">
            有什么想说的吗？
          </Text>
          <Text color="gray.500" lineHeight="1.75">
            欢迎写一些有帮助的评论。
          </Text>
        </CardContainer>
      ) : (
        <ListContainer divider>
          {courseInfo.comments.map((comment, index) => (
            <CourseComment lite comment={comment} key={index} />
          ))}
        </ListContainer>
      )}
    </GroupContainer>
  )
}

export default CourseCommentList
