import {
  Avatar,
  Badge,
  Box,
  ButtonGroup,
  HStack,
  Skeleton,
  Text,
  VStack,
} from '@chakra-ui/react'
import { RiLinksLine } from 'react-icons/ri'
import useStudent from '../../../hooks/useStudent'
import useUser from '../../../hooks/useUser'
import { md5 } from '../../../utils/md5'
import ButtonLink from '../../common/link/ButtonLink'
import HomeGroup from './Group'

const Overview = () => {
  const { user, isError: isUserError, isLoading: isUserLoading } = useUser()
  const {
    student,
    isError: isStudentError,
    isLoading: isStudentLoading,
  } = useStudent()

  return (
    <HomeGroup title="快捷方式" icon={RiLinksLine}>
      <Box w="full" mb="4" p="4" rounded="md" borderWidth="1px">
        <HStack align="center" spacing="4" p="1" w="full">
          <Skeleton isLoaded={!isUserLoading}>
            <Avatar
              size="md"
              name={!isUserError ? user?.username : ''}
              src={
                user && !isUserError
                  ? `https://www.gravatar.com/avatar/${md5(user.email)}?d=404`
                  : undefined
              }
              color="gray.400"
              bg="gray.200"
              _dark={{
                color: 'white',
                bg: 'gray.600',
              }}
            />
          </Skeleton>
          <VStack align="start" justify="start" spacing="0.5">
            <Skeleton isLoaded={!isUserLoading}>
              <Text d="flex" alignItems="center" fontSize="lg" fontWeight="600">
                {!isUserError ? user?.username : '未登录'}
                {!isStudentError && student?.heu_username ? (
                  <Badge ms="3" colorScheme="green">
                    HEU
                  </Badge>
                ) : null}
              </Text>
            </Skeleton>
            <Skeleton isLoaded={!isStudentLoading}>
              <Text color="gray.500" fontSize="sm">
                {!isStudentError ? student?.heu_username : '未绑定 HEU 账号'}
              </Text>
            </Skeleton>
          </VStack>
        </HStack>

        <Skeleton isLoaded={!isUserLoading}>
          <ButtonGroup w="full" mt="4" size="sm">
            {!isUserError && user ? (
              <ButtonLink href={`/@${user?.username}`} full color="blue">
                查看个人主页
              </ButtonLink>
            ) : (
              <ButtonLink href={`/login`} full color="green">
                去登录
              </ButtonLink>
            )}
          </ButtonGroup>
        </Skeleton>
      </Box>
    </HomeGroup>
  )
}

export default Overview
