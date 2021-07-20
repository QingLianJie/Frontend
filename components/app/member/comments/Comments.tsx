import {
  Box,
  Center,
  Grid,
  GridItem,
  Heading,
  HStack,
  Icon,
  Text,
  VStack,
} from '@chakra-ui/react'
import { RiDiscussLine, RiFilterLine } from 'react-icons/ri'
import useProfile from '../../../../hooks/useProfile'
import { dateFormatter } from '../../../../utils/formatter'
import ProfileCourseComment from './Comment'
import ProfileCommentFilter from './Filter'

interface MemberCommentsProps {
  name: string | string[] | undefined
}

const MemberComments = ({ name }: MemberCommentsProps) => {
  const username = name as string
  const { profile, isLoading, isError, isNotFound } = useProfile(username)

  const hasComment = () => profile?.comments && profile?.comments.length !== 0

  return (
    <Grid
      h="full"
      gridTemplateColumns={{ base: '1fr', md: 'repeat(3, 1fr)' }}
      gap={{ base: 4, sm: 8, md: 12, lg: 16 }}
    >
      <GridItem
        w="full"
        h="full"
        colSpan={{ base: 1, md: hasComment() ? 2 : 3 }}
      >
        {hasComment() ? (
          <>
            <HStack spacing="3">
              <Icon as={RiDiscussLine} w="5" h="5" ms="2" />
              <Text fontSize="lg" fontWeight="600">
                {profile?.comments.length} 个课程评论
              </Text>
            </HStack>

            <VStack mt="8">
              {profile?.comments.map((comment, index) => (
                <ProfileCourseComment comment={comment} key={index} />
              ))}
            </VStack>
          </>
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
          <HStack spacing="3">
            <Icon as={RiFilterLine} w="5" h="5" ms="2" />
            <Text fontSize="lg" fontWeight="600">
              筛选
            </Text>
          </HStack>
          <ProfileCommentFilter />
        </GridItem>
      )}
    </Grid>
  )
}

export default MemberComments
