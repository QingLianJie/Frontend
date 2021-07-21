import { Alert, AlertIcon, CircularProgress } from '@chakra-ui/react'
import { Fragment } from 'react'
import { RiTimeLine } from 'react-icons/ri'
import useTimeline from '../../../hooks/useTimeline/useTimeline'
import GroupContainer from '../../common/container/Group'
import ListContainer from '../../common/container/List'
import CourseComment from '../widget/course/comment/Card'
import RecentCourseGrade from '../widget/course/grade/Message'

const Timeline = () => {
  const { timeline, isLoading, isError } = useTimeline()

  return (
    <GroupContainer title="最近" icon={RiTimeLine}>
      <ListContainer divider>
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
      </ListContainer>
    </GroupContainer>
  )
}

export default Timeline
