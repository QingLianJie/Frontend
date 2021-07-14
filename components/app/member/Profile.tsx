import {
  AspectRatio,
  Avatar,
  Button,
  Heading,
  Skeleton,
  Text,
  VStack,
} from '@chakra-ui/react'
import { RiUserLine } from 'react-icons/ri'
import useProfile from '../../../hooks/useProfile'

interface MemberProfileProps {
  name: string | string[] | undefined
}

const MemberProfile = ({ name }: MemberProfileProps) => {
  const username = name as string
  const { profile, isLoading, isMe } = useProfile(username)
  console.log(isMe)

  return (
    <>
      <AspectRatio ratio={1} maxW="65vw" mx="auto">
        <Avatar
          bg="gray.100"
          icon={<RiUserLine size="50%" />}
          size="full"
          mx="1"
          color="gray.400"
          _dark={{
            color: 'white',
            bg: 'gray.700',
          }}
        />
      </AspectRatio>

      <VStack py="10" spacing="2.5">
        <Skeleton isLoaded={!isLoading} px="4">
          <Heading size="lg" textAlign="center" fontWeight="600">
            {name}
          </Heading>
        </Skeleton>

        <Skeleton isLoaded={!isLoading} px="4">
          <Text fontSize="md" textAlign="center">
            {(isMe && profile?.email) || '登录后查看邮箱'}
          </Text>
        </Skeleton>
      </VStack>

      <Skeleton isLoaded={!isLoading}>
        {!isMe ? (
          <Button isFullWidth>这里也许有一个功能</Button>
        ) : (
          <VStack spacing="4">
            <Button isFullWidth colorScheme="blue">
              编辑资料（还没做）
            </Button>
            <Button isFullWidth>绑定学号（也还没做）</Button>
          </VStack>
        )}
      </Skeleton>
    </>
  )
}

export default MemberProfile
