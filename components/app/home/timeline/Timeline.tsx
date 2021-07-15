import {
  Alert,
  AlertIcon,
  CircularProgress,
  Divider,
  VStack,
} from '@chakra-ui/react'
import { RiTimeLine } from 'react-icons/ri'
import useCourseComments from '../../../../hooks/useCourseComments'
import HomeGroup from '../Group'
import CourseCommentCard from './cards/CourseComment'

const Timeline = () => {
  const { comments, isLoading, isError } = useCourseComments()

  return (
    <HomeGroup title={'时间线'} icon={RiTimeLine}>
      <VStack spacing="3" w="full" my="-2" ms="1.5">
        {isError ? (
          <Alert status="error" rounded="md">
            <AlertIcon />
            获取课程评论失败
          </Alert>
        ) : isLoading ? (
          <CircularProgress isIndeterminate color="pink.400" my="16" />
        ) : (
          comments.map((comment, index) => (
            <>
              {index !== 0 && <Divider />}
              <CourseCommentCard
                key={index}
                author={comment.username}
                course={{ id: comment.course_id, name: comment.course_name }}
                content={comment.content}
                date={comment.created}
                anonymous={comment.anonymous}
              />
            </>
          ))
        )}
      </VStack>
    </HomeGroup>
  )
}

export default Timeline
