import { Badge, Heading, Skeleton, Text, VStack } from '@chakra-ui/react'
import useProfile from '../../../hooks/useProfile'
import ProfileAvatar from './Avatar'
import ProfileBind from './modals/Bind'
import ProfileEditAvatar from './modals/EditAvatar'
import ProfileEdit from './modals/EditProfile'
import ProfileUnbind from './modals/Unbind'

interface MemberProfileProps {
  name: string | string[] | undefined
}

const MemberProfile = ({ name }: MemberProfileProps) => {
  const username = name as string
  const { profile, isLoading, isError, isNotFound } = useProfile(username)

  return (
    <>
      {profile?.self ? (
        <ProfileEditAvatar profile={profile} />
      ) : (
        <ProfileAvatar profile={profile} />
      )}

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

        {profile?.self && (
          <>
            <Skeleton isLoaded={!isLoading} px="4" w="full">
              <Text
                w="full"
                d="flex"
                alignItems="center"
                justifyContent="center"
              >
                {profile?.heu_username ? (
                  <>
                    <Badge me="2" colorScheme="green" fontSize="sm">
                      HEU
                    </Badge>
                    {profile.heu_username}
                  </>
                ) : (
                  '未绑定 HEU 账号'
                )}
              </Text>
            </Skeleton>
            <Skeleton isLoaded={!isLoading} w="full">
              <VStack spacing="3" w="full" mt="3">
                <ProfileEdit profile={profile} />
                {profile?.heu_username ? <ProfileUnbind /> : <ProfileBind />}
              </VStack>
            </Skeleton>
          </>
        )}
      </VStack>
    </>
  )
}

export default MemberProfile
