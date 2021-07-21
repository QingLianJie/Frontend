import {
  Alert,
  AlertIcon,
  CircularProgress,
  Divider,
  VStack,
} from '@chakra-ui/react'
import { Fragment } from 'react'
import { RiTimeLine } from 'react-icons/ri'
import useTimeline from '../../../hooks/useTimeline/useTimeline'
import CourseComment from '../../widget/comment/Comment'
import GroupContainer from '../../common/container/Group'
import RecentCourseGrade from '../../widget/grade/RecentCourseGrade'

const Timeline = () => {
  const { timeline, isLoading, isError } = useTimeline()

  return (
    <GroupContainer title="最近" icon={RiTimeLine}>
      <VStack spacing="4" w="full" ms="1.5">
        {isError ? (
          <Alert status="error" rounded="md">
            <AlertIcon />
            获取数据失败
          </Alert>
        ) : isLoading ? (
          <CircularProgress isIndeterminate color="pink.400" my="16" />
        ) : (
          timeline.map((item, index) => (
            <Fragment key={index}>
              {index !== 0 && <Divider />}
              {item.hasOwnProperty('user') ? (
                <CourseComment comment={item as ICourseComment} />
              ) : (
                <RecentCourseGrade
                  created={item.created}
                  course={item.course}
                />
              )}
            </Fragment>
          ))
        )}
      </VStack>
    </GroupContainer>
  )
}

export default Timeline
