import { Box } from '@chakra-ui/react'
import useProfile from '../../../hooks/useProfile'

interface MemberCommentsProps {
  name: string | string[] | undefined
}

const MemberComments = ({ name }: MemberCommentsProps) => {
  const username = name as string
  const { profile, isLoading, isError, isNotFound } = useProfile(username)

  return (
    <>
      <Box p="4">此处应有用户发表的课程评论</Box>
    </>
  )
}

export default MemberComments
