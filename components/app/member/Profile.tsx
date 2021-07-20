import {
  Badge,
  Box,
  Grid,
  Heading,
  Icon,
  Skeleton,
  Text,
  VStack,
} from '@chakra-ui/react'
import { RiBookOpenLine, RiMailLine } from 'react-icons/ri'
import useProfile from '../../../hooks/useProfile'
import ProfileAvatar from './Avatar'
import ProfileBind from './modals/Bind'
import ProfileEditAvatar from './modals/EditAvatar'
import ProfileUnbind from './modals/Unbind'

interface MemberProfileProps {
  name: string | string[] | undefined
}

const MemberProfile = ({ name }: MemberProfileProps) => {
  const username = name as string
  const { profile, isLoading, isError, isNotFound } = useProfile(username)

  return (
    <Grid
      gridTemplateColumns={{ base: '1fr', sm: 'repeat(2,1fr)', md: '1fr' }}
      alignItems="center"
      gap={{ base: 0, sm: 8, md: 4 }}
    >
      <Box>
        {profile?.self ? (
          <ProfileEditAvatar profile={profile} />
        ) : (
          <ProfileAvatar profile={profile} />
        )}
      </Box>

      <VStack py="8" spacing="2" align="start">
        <Skeleton isLoaded={!isLoading} px="4" pb="3" w="full">
          <Heading size="lg" fontWeight="600">
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
              <Text w="full" d="flex" alignItems="center">
                {profile?.email ? (
                  <>
                    <Icon as={RiMailLine} color="gray.500" me="2" w="5" h="5" />
                    {profile.email}
                  </>
                ) : (
                  '未绑定邮箱'
                )}
              </Text>
            </Skeleton>

            <Skeleton isLoaded={!isLoading} px="4" w="full">
              <Text w="full" d="flex" alignItems="center">
                {profile?.heu_username ? (
                  <>
                    <Icon
                      as={RiBookOpenLine}
                      color="gray.500"
                      me="2"
                      w="5"
                      h="5"
                    />

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
              <VStack spacing="3" w="full" mt="4">
                {profile?.heu_username ? <ProfileUnbind /> : <ProfileBind />}
              </VStack>
            </Skeleton>
          </>
        )}
      </VStack>
    </Grid>
  )
}

export default MemberProfile
