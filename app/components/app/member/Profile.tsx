import { Avatar, HStack, Icon, Text, Tooltip, VStack } from '@chakra-ui/react'
import { type IconType } from 'react-icons'
import { RiDiscussLine, RiMailLine, RiUserLine } from 'react-icons/ri'
import { useLoaderData } from 'remix'
import { Card } from '~/components/common/Card'
import { AVATAT_BASE_URL } from '~/const'
import { type MemberLoader } from '~/routes/member/index'
import { calcEmailMd5 } from '~/utils/math'

export const Profile = () => {
  const { member, comments } = useLoaderData<MemberLoader>()

  const name = member ? member.name : '陌生人'
  const id = member ? member.id : 'Unknown ID'
  const email = (member && member.email) || '没有邮箱'

  const isNoComments = comments?.length === 0

  return (
    <Card>
      <VStack p="6" w="full" spacing="2">
        <HStack spacing="6" pt="1" pb="4" w="full">
          <Tooltip
            hasArrow
            label={
              member && member.email
                ? '头像获取自 Gravatar'
                : '没有获取到 Gravatar 头像'
            }
            px="2.5"
            py="1.5"
            placement="bottom"
          >
            <Avatar
              aria-label={member ? member.name : '陌生人'}
              src={
                member && member.email
                  ? `${AVATAT_BASE_URL}${calcEmailMd5(member.email)}?d=404`
                  : undefined
              }
              icon={<Icon as={RiUserLine} fontSize="3xl" />}
              size="lg"
              bg="gray.100"
              color="gray.500"
              _hover={{
                color: 'gray.700',
              }}
              _dark={{
                bg: 'gray.700',
                color: 'gray.400',
                _hover: {
                  color: 'gray.200',
                },
              }}
              transition="all 0.2s"
            />
          </Tooltip>

          <VStack w="full" align="flex-start" spacing="0" overflow="hidden">
            <Text
              fontSize="lg"
              fontWeight="bold"
              isTruncated
              lineHeight="taller"
            >
              {name}
            </Text>
            <Text
              w="full"
              isTruncated
              fontSize="smd"
              color="gray.500"
              _dark={{ color: 'gray.400' }}
            >
              {`UID ${id}`}
            </Text>
          </VStack>
        </HStack>

        <ProfileInfo text={email} icon={RiMailLine} />
        <ProfileInfo
          text={
            isNoComments
              ? '没有发表过评论'
              : `发表了 ${comments?.length} 条评论`
          }
          icon={RiDiscussLine}
        />
      </VStack>
    </Card>
  )
}

interface ProfileInfoProps {
  text: string
  icon: IconType
}

const ProfileInfo = ({ text, icon }: ProfileInfoProps) => (
  <Text
    w="full"
    d="flex"
    alignItems="center"
    color="gray.500"
    fontSize="smd"
    _dark={{ color: 'gray.400' }}
  >
    <Icon as={icon} fontSize="mdl" mr="3.5" />
    <Text as="span" isTruncated title={text}>
      {text}
    </Text>
  </Text>
)
