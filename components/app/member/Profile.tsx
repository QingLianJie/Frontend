import {
  Badge,
  Box,
  Grid,
  Heading,
  HStack,
  Icon,
  Skeleton,
  Text,
  VStack,
} from '@chakra-ui/react'
import { FC, ReactNode } from 'react'
import {
  RiBookOpenLine,
  RiDiscussLine,
  RiMailLine,
  RiProfileLine,
} from 'react-icons/ri'
import useProfile from '../../../hooks/useProfile'
import ProfileAvatar from './Avatar'
import ProfileBind from './modal/Bind'
import ProfileEditAvatar from './modal/EditAvatar'
import ProfileUnbind from './modal/Unbind'

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

      <VStack py="4" spacing="2" align="start">
        <Skeleton isLoaded={!isLoading} px="4" pb="3" w="full">
          <Heading size="lg" fontWeight="600">
            {isError
              ? isNotFound
                ? '用户不存在'
                : '获取信息失败'
              : decodeURIComponent(name as string)}
          </Heading>
        </Skeleton>

        {profile?.self ? (
          <>
            <InfoItem isLoading={isLoading} icon={RiBookOpenLine}>
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
            </InfoItem>

            <InfoItem isLoading={isLoading} icon={RiMailLine}>
              {profile?.email ? profile.email : '未绑定邮箱'}
            </InfoItem>
          </>
        ) : (
          <InfoItem isLoading={isLoading} icon={RiDiscussLine}>
            {isNotFound
              ? '不存在的用户不能评论'
              : profile?.comments && profile?.comments.length !== 0
              ? `发布过 ${profile.comments.length} 个课程评论`
              : '未发布过课程评论'}
          </InfoItem>
        )}

        <InfoItem isLoading={isLoading} icon={RiProfileLine}>
          UID {profile?.pk || '未知'}
        </InfoItem>

        {profile?.self && (
          <Skeleton isLoaded={!isLoading} w="full">
            <VStack spacing="3" w="full" mt="4">
              {profile?.heu_username ? <ProfileUnbind /> : <ProfileBind />}
            </VStack>
          </Skeleton>
        )}
      </VStack>
    </Grid>
  )
}

export default MemberProfile

interface InfoItemProps {
  isLoading: boolean | undefined
  icon: FC
  children: ReactNode | ReactNode[]
}

const InfoItem = ({ isLoading, icon, children }: InfoItemProps) => {
  return (
    <Skeleton isLoaded={!isLoading} px="4" w="full">
      <HStack spacing="3">
        <Icon as={icon} color="gray.500" w="5" h="5" />
        <Text
          w="full"
          d="flex"
          alignItems="center"
          color="gray.600"
          _dark={{ color: 'gray.400' }}
        >
          {children}
        </Text>
      </HStack>
    </Skeleton>
  )
}
