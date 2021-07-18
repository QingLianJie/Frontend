import {
  Alert,
  AlertIcon,
  CircularProgress,
  Divider,
  VStack,
} from '@chakra-ui/react'
import { Fragment } from 'react'
import { RiTimeLine } from 'react-icons/ri'

import useTimeline from '../../../../hooks/useTimeline/useTimeline'
import HomeGroup from '../Group'
import RecentCourseComment from './activities/RecentCourseComment'
import RecentCourseGrade from './activities/RecentCourseGrade'

const Timeline = () => {
  const { timeline, isLoading, isError } = useTimeline()

  return (
    <HomeGroup title="最近" icon={RiTimeLine}>
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
                <RecentCourseComment comment={item as ICourseComment} />
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
    </HomeGroup>
  )
}

export default Timeline
