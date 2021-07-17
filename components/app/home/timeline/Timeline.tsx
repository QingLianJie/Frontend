import {
  Alert,
  AlertIcon,
  CircularProgress,
  Divider,
  VStack,
} from '@chakra-ui/react'
import { RiTimeLine } from 'react-icons/ri'

import useTimeline from '../../../../hooks/useTimeline/useTimeline'
import HomeGroup from '../Group'
import RecentCourseComment from './activities/RecentCourseComment'
import RecentCourseGrade from './activities/RecentCourseGrade'

const Timeline = () => {
  const { timeline, isLoading, isError } = useTimeline()

  return (
    <HomeGroup title={'时间线'} icon={RiTimeLine}>
      <VStack spacing="4" w="full" my="-2" ms="1.5">
        {isError ? (
          <Alert status="error" rounded="md">
            <AlertIcon />
            获取数据失败
          </Alert>
        ) : isLoading ? (
          <CircularProgress isIndeterminate color="pink.400" my="16" />
        ) : (
          timeline.map((item, index) => (
            <>
              {index !== 0 && <Divider />}
              {item.hasOwnProperty('user') ? (
                <RecentCourseComment
                  key={index}
                  comment={item as ICourseComment}
                />
              ) : (
                <RecentCourseGrade
                  key={index}
                  created={item.created}
                  course={item.course}
                />
              )}
            </>
          ))
        )}
      </VStack>
    </HomeGroup>
  )
}

export default Timeline
