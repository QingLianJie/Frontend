import { Box } from '@chakra-ui/react'
import { Fragment } from 'react'
import { RiTimeLine } from 'react-icons/ri'
import GroupContainer from '../../common/container/Group'
import ListContainer from '../../common/container/List'
import CourseComment from '../widget/course/comment/Card'
import RecentCourseGrade from '../widget/message/RecentCourseGrade'

interface TimelineProps {
  timeline: (ICourseComment | IRecentCourseGrade)[]
}

const Timeline = ({ timeline }: TimelineProps) => {
  return (
    <GroupContainer title="最近" icon={RiTimeLine}>
      <Box>
        <ListContainer divider>
          {timeline.map((item, index) => (
            <Fragment key={index}>
              {item.hasOwnProperty('user') ? (
                <CourseComment comment={item as ICourseComment} />
              ) : (
                <RecentCourseGrade
                  created={item.created}
                  course={item.course as ICourse}
                />
              )}
            </Fragment>
          ))}
        </ListContainer>
      </Box>
    </GroupContainer>
  )
}

export default Timeline
