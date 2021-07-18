import {
  AspectRatio,
  Avatar,
  Badge,
  Button,
  Heading,
  Skeleton,
  Text,
  VStack,
} from '@chakra-ui/react'
import { RiUserLine } from 'react-icons/ri'
import useUser from '../../../hooks/useUser'
import ProfileBind from './modals/Bind'
import ProfileUnbind from './modals/Unbind'

interface MemberProfileProps {
  name: string | string[] | undefined
}

const MemberProfile = ({ name }: MemberProfileProps) => {
  const username = name as string
  const { user, isLoading, isError, isNotFound } = useUser(username)

  return (
    <>
      <AspectRatio ratio={1} maxW="65vw" mx="auto">
        <Avatar
          bg="gray.100"
          icon={<RiUserLine size="50%" />}
          src={
            user?.image
              ? `${process.env.NEXT_PUBLIC_BASE_AVATAR_URL}${user.image}`
              : undefined
          }
          size="full"
          mx="1"
          color="gray.400"
          _dark={{
            color: 'white',
            bg: 'gray.700',
          }}
        />
      </AspectRatio>

      <VStack py="8" spacing="3" align="start">
        <Skeleton isLoaded={!isLoading} px="4" w="full">
          <Heading size="lg" fontWeight="600" textAlign="center">
            {isError
              ? isNotFound
                ? '用户不存在'
                : '获取信息失败'
              : decodeURIComponent(name as string)}
          </Heading>
        </Skeleton>

        {user?.email && (
          <>
            <Skeleton isLoaded={!isLoading} px="4" w="full">
              <Text
                w="full"
                d="flex"
                alignItems="center"
                justifyContent="center"
              >
                {user?.heu_username ? (
                  <>
                    <Badge me="2" colorScheme="green" fontSize="sm">
                      HEU
                    </Badge>
                    {user.heu_username}
                  </>
                ) : (
                  '未绑定 HEU 账号'
                )}
              </Text>
            </Skeleton>
            <Skeleton isLoaded={!isLoading} w="full">
              <VStack spacing="3" w="full" mt="3">
                <Button isFullWidth colorScheme="blue">
                  编辑资料
                </Button>
                {user?.heu_username ? <ProfileUnbind /> : <ProfileBind />}
              </VStack>
            </Skeleton>
          </>
        )}
      </VStack>
    </>
  )
}

export default MemberProfile
