import { Button, Fade, Spacer, Text } from '@chakra-ui/react'
import { useState } from 'react'
import { RiDiscussLine } from 'react-icons/ri'
import { BASE_API_URL } from '../../../../data/api-config'
import useCourse from '../../../../hooks/useCourse'
import useUser from '../../../../hooks/useUser'
import CardContainer from '../../../common/container/Card'
import GroupContainer from '../../../common/container/Group'
import ListContainer from '../../../common/container/List'
import CourseComment from './Card'
import CourseCommentInput from './Input'

interface CourseCommentListProps {
  id: string
}

const CourseCommentList = ({ id }: CourseCommentListProps) => {
  const { user, isLoading: isUserLoading } = useUser()
  const { courseInfo, isLoading, isError } = useCourse(id)

  const [count, setCount] = useState(
    courseInfo?.comments.length < 5 ? courseInfo.comments.length : 5
  )

  const baseURL = BASE_API_URL

  return (
    <GroupContainer title="课程评论" icon={RiDiscussLine}>
      {isUserLoading ? null : user?.self ? (
        <>
          <CourseCommentInput id={id} />
          <Spacer h="4" />
        </>
      ) : null}

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
        <Fade in>
          <ListContainer divider>
            {courseInfo.comments.slice(0, count).map((comment, index) => (
              <CourseComment
                lite
                comment={comment}
                key={index}
                url={`${baseURL}/api/course/${id}`}
              />
            ))}
            {count < courseInfo.comments.length && (
              <Button onClick={() => setCount(count + 10)} isFullWidth>
                加载更多评论
              </Button>
            )}
          </ListContainer>
        </Fade>
      )}
    </GroupContainer>
  )
}

export default CourseCommentList
