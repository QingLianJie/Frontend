import {
  Avatar,
  Badge,
  Box,
  ButtonGroup,
  HStack,
  Text,
  VStack,
} from '@chakra-ui/react'
import { RiLinksLine } from 'react-icons/ri'
import useStudent from '../../../hooks/useStudent'
import useUser from '../../../hooks/useUser'
import ButtonLink from '../../common/link/ButtonLink'
import HomeGroup from './Group'

const Overview = () => {
  const { user } = useUser()
  const { student } = useStudent()

  return (
    <HomeGroup title="快捷方式" icon={RiLinksLine}>
      <Box w="full" mb="4" p="4" rounded="md" borderWidth="1px">
        <HStack align="center" spacing="4" p="1" w="full">
          <Avatar
            size="md"
            name={user?.username}
            color="gray.400"
            bg="gray.200"
            _dark={{
              color: 'white',
              bg: 'gray.600',
            }}
          />
          <VStack align="start" justify="start" spacing="0.5">
            <Text d="flex" alignItems="center" fontSize="lg" fontWeight="600">
              {user?.username || '未登录'}
              {student?.heu_username ? (
                <Badge ms="3" colorScheme="green">
                  HEU
                </Badge>
              ) : null}
            </Text>
            <Text color="gray.500" fontSize="sm">
              {student?.heu_username || '未绑定 HEU 账号'}
            </Text>
          </VStack>
        </HStack>

        <ButtonGroup w="full" mt="4" size="sm">
          {user ? (
            <ButtonLink href={`/@${user?.username}`} full color="blue">
              查看个人主页
            </ButtonLink>
          ) : (
            <ButtonLink href={`/login`} full color="green">
              去登录
            </ButtonLink>
          )}
        </ButtonGroup>
      </Box>
    </HomeGroup>
  )
}

export default Overview
