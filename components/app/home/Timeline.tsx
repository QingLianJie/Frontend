import { Alert, AlertIcon, Center, Fade, Spinner } from '@chakra-ui/react'
import { Fragment } from 'react'
import { RiTimeLine } from 'react-icons/ri'
import useTimeline from '../../../hooks/useTimeline'
import GroupContainer from '../../common/container/Group'
import ListContainer from '../../common/container/List'
import CourseComment from '../course/comment/Card'
import RecentCourseGrade from './message/RecentCourseGrade'

const Timeline = () => {
  const { timeline, isLoading, isError } = useTimeline()
  const baseURL = process.env.NEXT_PUBLIC_BASE_API_URL

  return (
    <GroupContainer title="最近" icon={RiTimeLine}>
      {isError ? (
        <Alert status="error" rounded="md">
          <AlertIcon />
          获取数据失败，请稍后再试
        </Alert>
      ) : isLoading ? (
        <Center w="full" h="50vh">
          <Spinner thickness="4px" color="pink.400" size="xl" />
        </Center>
      ) : (
        <Fade in>
          <ListContainer divider>
            {timeline.map((item, index) => (
              <Fragment key={index}>
                {item.hasOwnProperty('user') ? (
                  <CourseComment
                    comment={item as ICourseComment}
                    url={`${baseURL}/api/recent/comments`}
                  />
                ) : (
                  <RecentCourseGrade
                    created={item.created}
                    course={item.course as ICourse}
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
