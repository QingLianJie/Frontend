import { Fragment } from 'react'
import { RiTimeLine } from 'react-icons/ri'
import GroupContainer from '../../common/container/Group'
import ListContainer from '../../common/container/List'
import CourseComment from '../widget/course/comment/Card'
import RecentCourseGrade from '../widget/course/grade/Message'

interface TimelineProps {
  timeline: (ICourseComment | IRecentCourseGrade)[]
}

const Timeline = ({ timeline }: TimelineProps) => {
  return (
    <GroupContainer title="最近" icon={RiTimeLine}>
      <ListContainer divider>
        {timeline.map((item, index) => (
          <Fragment key={index}>
            {item.hasOwnProperty('user') ? (
              <CourseComment comment={item as ICourseComment} />
            ) : (
              <RecentCourseGrade created={item.created} course={item.course} />
            )}
          </Fragment>
        ))}
      </ListContainer>
    </GroupContainer>
  )
}

export default Timeline
