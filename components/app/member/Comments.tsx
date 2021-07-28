import {
  Box,
  Center,
  Fade,
  Grid,
  GridItem,
  Spinner,
  Text,
} from '@chakra-ui/react'
import { RiDiscussLine, RiSearchLine } from 'react-icons/ri'
import useProfile from '../../../hooks/useProfile'
import GroupContainer from '../../common/container/Group'
import ListContainer from '../../common/container/List'
import CourseComment from '../widget/course/comment/Card'
import CourseCommentFilter from '../widget/course/comment/Filter'

interface MemberCommentsProps {
  name: string | string[] | undefined
}

const MemberComments = ({ name }: MemberCommentsProps) => {
  const username = name as string
  const { profile, isLoading, isError } = useProfile(username)

  const hasComment = () => profile?.comments && profile?.comments.length !== 0

  return isError ? (
    <Center w="full" h="full">
      <Text color="gray.500" fontSize="lg">
        数据加载失败
      </Text>
    </Center>
  ) : isLoading ? (
    <Center w="full" h="full">
      <Spinner thickness="4px" color="pink.400" size="xl" />
    </Center>
  ) : (
    <Grid
      h="full"
      gridTemplateColumns={{ base: '1fr', md: 'repeat(3, 1fr)' }}
      gap={{ base: 4, sm: 8, md: 12 }}
    >
      <GridItem
        w="full"
        h="full"
        colSpan={{ base: 1, md: hasComment() ? 2 : 3 }}
      >
        {profile && hasComment() ? (
          <Fade in>
            <GroupContainer
              title={`${profile?.comments.length} 个课程评论`}
              icon={RiDiscussLine}
            >
              <Box ps="1.5">
                <ListContainer divider>
                  {profile?.comments.map((comment, index) => (
                    <CourseComment comment={comment} key={index} />
                  ))}
                </ListContainer>
              </Box>
            </GroupContainer>
          </Fade>
        ) : (
          <Center w="full" h="full">
            <Text color="gray.500" fontSize="lg">
              还没有发布过课程评论
            </Text>
          </Center>
        )}
      </GridItem>
      {hasComment() && (
        <GridItem colSpan={{ base: 1, md: 1 }}>
          <GroupContainer title="搜索" icon={RiSearchLine}>
            <CourseCommentFilter />
          </GroupContainer>
        </GridItem>
      )}
    </Grid>
  )
}

export default MemberComments
