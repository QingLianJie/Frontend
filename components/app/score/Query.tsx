import {
  Alert,
  AlertIcon,
  Badge,
  Button,
  Center,
  Fade,
  Heading,
  HStack,
  Icon,
  Spinner,
  Text,
  useToast,
  VStack,
} from '@chakra-ui/react'
import { RiBarChartBoxFill, RiRefreshLine } from 'react-icons/ri'
import { mutate } from 'swr'
import useScore from '../../../hooks/useScore'
import useUser from '../../../hooks/useUser'
import { toastConfig } from '../../../utils/config/toast'
import { dateFormatter } from '../../../utils/formatter'
import GroupContainer from '../../common/container/Group'

const ScoreQuery = () => {
  const toast = useToast()
  const { user } = useUser()
  const { scores, isLoading, isError } = useScore()
  const baseURL = process.env.NEXT_PUBLIC_BASE_API_URL

  const handleFetchScore = () => {
    fetch(`${baseURL}/api/my/scores`, {
      method: 'POST',
      mode: 'cors',
      credentials: 'include',
    })
      .then(async res => {
        if (res.ok) {
          toast({
            title: '已发送获取数据请求',
            description: '获取数据需要一些时间，请稍等片刻并刷新页面查看结果',
            ...toastConfig.ok,
          })
          mutate(`${baseURL}/api/my/scores`)
        } else {
          const data = await res.json()
          Object.values(data).forEach(d => {
            toast({
              title: '数据请求失败',
              description: d as string,
              ...toastConfig.error,
            })
          })
        }
      })
      .catch((err: Error) => {
        console.log('Fetch Score Error -', err)
        toast({
          title: '数据请求失败',
          description: err.toString(),
          ...toastConfig.error,
        })
      })
  }

  return (
    <GroupContainer>
      {isError ? (
        <Alert status="error" rounded="md">
          <AlertIcon />
          获取数据失败，请稍后再试
        </Alert>
      ) : isLoading ? (
        <Center w="full" h="50vh">
          <Spinner thickness="4px" color="pink.400" size="xl" />
        </Center>
      ) : (
        <Fade in>
          <VStack align="start" spacing="4">
            <HStack spacing="4" px="4">
              <Heading
                as="h2"
                fontSize="2xl"
                fontWeight="600"
                d="flex"
                alignItems="center"
              >
                <Icon
                  as={RiBarChartBoxFill}
                  me="4"
                  w="7"
                  h="7"
                  color="green.500"
                  _dark={{ color: 'green.400' }}
                />
                {user && `${user.username} 的`}成绩单
              </Heading>
              <Badge d="flex" alignItems="center" fontSize="sm" px="2" py="1">
                {scores.heu_username}
              </Badge>
            </HStack>
            <HStack spacing="4" px="4">
              {scores.status === 'Success' ? (
                <Text d="flex" alignItems="center" fontSize="sm">
                  数据更新于{' '}
                  {dateFormatter({
                    date: scores.created * 1000,
                    calendar: true,
                  })}
                </Text>
              ) : scores.status === 'Fail' ? (
                <Text d="flex" alignItems="center">
                  数据更新失败，请尝试重新获取
                </Text>
              ) : scores.status === 'Pending' ? (
                <Text d="flex" alignItems="center">
                  数据正在更新，请稍等片刻
                </Text>
              ) : scores.status === 'Never' ? (
                <Text d="flex" alignItems="center">
                  还没有获取过成绩数据，点击右边按钮获取
                </Text>
              ) : null}

              <Button
                size="sm"
                colorScheme="green"
                variant="link"
                onClick={handleFetchScore}
              >
                <Icon as={RiRefreshLine} me="2" w="4" h="4" />
                重新获取
              </Button>
            </HStack>
          </VStack>
        </Fade>
      )}
    </GroupContainer>
  )
}

export default ScoreQuery
