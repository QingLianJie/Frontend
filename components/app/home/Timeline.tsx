import {
  Alert,
  AlertIcon,
  Center,
  CircularProgress,
  Fade,
} from '@chakra-ui/react'
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
      {isError ? (
        <Alert status="error" rounded="md">
          <AlertIcon />
          获取数据失败
        </Alert>
      ) : isLoading ? (
        <Fade in>
          <Center w="full" h="full">
            <CircularProgress isIndeterminate color="pink.400" my="16" />
          </Center>
        </Fade>
      ) : (
        <Fade in>
          <ListContainer divider>
            {timeline.map((item, index) => (
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
            ))}
          </ListContainer>
        </Fade>
      )}
    </GroupContainer>
  )
}

export default Timeline
