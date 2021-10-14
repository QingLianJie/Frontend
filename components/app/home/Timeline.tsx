import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Alert,
  AlertIcon,
  Center,
  Fade,
  Spinner,
  Text,
} from '@chakra-ui/react'
import React from 'react'
import { RiTimeLine } from 'react-icons/ri'
import { BASE_API_URL } from '../../../data/api-config'
import useTimeline from '../../../hooks/useTimeline'
import GroupContainer from '../../common/container/Group'
import ListContainer from '../../common/container/List'
import CourseComment from '../course/comment/Card'
import RecentCourseGrade from './message/RecentCourseGrade'

interface ItemProps {
  item: ICourseComment[] | IRecentCourseGrade[]
}

const Item = ({ item }: ItemProps) => {
  const baseURL = BASE_API_URL

  if (item[0].hasOwnProperty('user')) {
    return (
      <ListContainer divider>
        {item.map((a, index) => (
          <CourseComment
            key={index}
            comment={a as ICourseComment}
            url={`${baseURL}/api/recent/comments`}
          />
        ))}
      </ListContainer>
    )
  } else {
    if (item.length > 3) {
      return (
        <ListContainer divider>
          {item.slice(0, 3).map((a, index) => (
            <RecentCourseGrade
              key={index}
              created={a.created}
              course={a.course as ICourse}
            />
          ))}
          <Accordion allowToggle w="full">
            <AccordionItem border="none" w="full" my="-2">
              <AccordionButton p="1">
                <Text
                  flex="1"
                  fontSize="sm"
                  display="flex"
                  alignItems="center"
                  color="gray.500"
                >
                  <AccordionIcon me="4" />
                  查看更多出分课程
                </Text>
              </AccordionButton>

              <AccordionPanel pt="4" pb="2" px="0">
                <ListContainer divider>
                  {item.slice(3, item.length).map((a, index) => (
                    <RecentCourseGrade
                      key={index}
                      created={a.created}
                      course={a.course as ICourse}
                    />
                  ))}
                </ListContainer>
              </AccordionPanel>
            </AccordionItem>
          </Accordion>
        </ListContainer>
      )
    }
    return (
      <ListContainer divider>
        {item.map((a, index) => (
          <RecentCourseGrade
            key={index}
            created={a.created}
            course={a.course as ICourse}
          />
        ))}
      </ListContainer>
    )
  }
}

const Timeline = () => {
  const { timeline, isLoading, isError } = useTimeline()

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
              <Item key={index} item={item} />
            ))}
          </ListContainer>
        </Fade>
      )}
    </GroupContainer>
  )
}

export default Timeline
