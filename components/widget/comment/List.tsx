import {
  Alert,
  AlertIcon,
  CircularProgress,
  Divider,
  VStack,
} from '@chakra-ui/react'
import { Fragment } from 'react'
import CourseComment from './Comment'

interface CommentListProps {
  comments: ICourseComment[]
}

const CommentList = ({ comments }: CommentListProps) => {
  return (
    <VStack spacing="4" w="full" ms="1.5">
      {comments.map((comment, index) => (
        <Fragment key={index}>
          {index !== 0 && <Divider />}
          <CourseComment comment={comment} />
        </Fragment>
      ))}
    </VStack>
  )
}

export default CommentList
