import { AspectRatio, Avatar, Tooltip } from '@chakra-ui/react'
import { RiUserLine } from 'react-icons/ri'

interface ProfileAvatarProps {
  profile?: IProfile | undefined
  action?: () => void
}

const ProfileAvatar = ({ profile, action }: ProfileAvatarProps) => {
  return (
    <Tooltip
      hasArrow
      label={profile?.self ? '编辑头像' : profile?.username}
      aria-label={profile?.self ? '编辑头像' : profile?.username}
      fontSize="md"
      px="3"
      py="1.5"
      rounded="md"
      arrowSize={15}
      gutter={15}
    >
      <AspectRatio
        ratio={1}
        maxW={{ base: '50vw', sm: '65vw' }}
        mx={{ base: 0, sm: 'auto' }}
      >
        <Avatar
          name={!profile?.image ? '' : profile?.username || '用户头像'}
          icon={<RiUserLine size="50%" />}
          src={
            profile?.image
              ? `${process.env.NEXT_PUBLIC_BASE_AVATAR_URL}${profile.image}`
              : undefined
          }
          borderWidth="1px"
          borderColor="gray.200"
          color="gray.400"
          bg="gray.100"
          _dark={{
            color: 'gray.400',
            bg: 'gray.700',
            borderColor: 'whiteAlpha.300',
          }}
          onClick={action}
          cursor={action ? 'pointer' : 'initial'}
        />
      </AspectRatio>
    </Tooltip>
  )
}

export default ProfileAvatar
