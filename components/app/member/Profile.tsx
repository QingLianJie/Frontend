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
          src={user?.image ? user.image : undefined}
          size="full"
          mx="1"
          color="gray.400"
          _dark={{
            color: 'white',
            bg: 'gray.700',
          }}
        />
      </AspectRatio>

      <VStack py="8" spacing="2.5">
        <Skeleton isLoaded={!isLoading} px="4" mb="3">
          <Heading size="lg" textAlign="center" fontWeight="600">
            {isError ? (isNotFound ? '用户不存在' : '获取信息失败') : name}
          </Heading>
        </Skeleton>

        {user?.email && (
          <>
            <Skeleton isLoaded={!isLoading} px="4">
              <Text
                textAlign="center"
                fontSize="lg"
                d="flex"
                alignItems="center"
              >
                {user?.heu_username ? (
                  <>
                    <Badge me="2" colorScheme="green">
                      已绑定 HEU
                    </Badge>
                    {user.heu_username}
                  </>
                ) : (
                  '未绑定 HEU 账号'
                )}
              </Text>
            </Skeleton>
            <Skeleton isLoaded={!isLoading} px="4">
              <Text textAlign="center">{user?.email || '登录后查看邮箱'}</Text>
            </Skeleton>
            <Skeleton isLoaded={!isLoading} w="full">
              <VStack spacing="3" w="full" mt="3">
                <Button isFullWidth colorScheme="blue">
                  编辑资料
                </Button>
                {user?.heu_username ? (
                  <Button isFullWidth colorScheme="red">
                    解绑 HEU 账号
                  </Button>
                ) : (
                  <Button isFullWidth colorScheme="green">
                    绑定 HEU 账号
                  </Button>
                )}
              </VStack>
            </Skeleton>
          </>
        )}
      </VStack>
    </>
  )
}

export default MemberProfile
