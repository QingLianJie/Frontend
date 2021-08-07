import {
  Button,
  Center,
  Heading,
  HStack,
  Icon,
  Spacer,
  Spinner,
  Text,
  useToast,
  VStack,
  Wrap,
  WrapItem,
} from '@chakra-ui/react'
import Head from 'next/head'
import { RiTableLine } from 'react-icons/ri'
import { mutate } from 'swr'
import Timetable from '../components/app/timetable/Table'
import ButtonLink from '../components/common/action/link/ButtonLink'
import CardContainer from '../components/common/container/Card'
import MainContainer from '../components/common/container/Main'
import useTimetable from '../hooks/useTimetable'
import useUser from '../hooks/useUser'
import { toastConfig } from '../utils/config/toast'
import { getTerm } from '../utils/date/get-term'

const TimetablePage = () => {
  const toast = useToast()
  const { user, isError: isUserError, isLoading: isUserLoading } = useUser()
  const { timetable, isLoading, isError } = useTimetable()

  const baseURL = process.env.NEXT_PUBLIC_BASE_API_URL

  const handleFetchTimetable = () => {
    fetch(`${baseURL}/api/my/timetable`, {
      method: 'POST',
      body: JSON.stringify({ term: getTerm() }),
      mode: 'cors',
      credentials: 'include',
      headers: {
        'content-type': 'application/json',
      },
    })
      .then(async res => {
        if (res.ok) {
          toast({
            title: '已发送获取数据请求',
            description: '获取数据需要一些时间，请稍等片刻并刷新页面查看结果',
            ...toastConfig.ok,
          })
          mutate(`${baseURL}/api/my/timetable`)
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
    <>
      <Head>
        <title>课表 - 清廉街</title>
      </Head>
      <MainContainer gray title="课表">
        {isUserLoading ? (
          <Center w="full" flexDir="column" flex="1">
            <Spinner thickness="4px" color="pink.400" size="xl" />
          </Center>
        ) : isUserError || !user ? (
          <Center w="full" flexDir="column" flex="1">
            <VStack spacing="3">
              <Text fontSize="3xl">想要看课表？</Text>
              <Text fontSize="lg" textAlign="center">
                登录并且绑定 HEU 账号后才能查看自己的课表
              </Text>
              <HStack spacing="3" py="4">
                <ButtonLink href="/login?from=/timetable" color="green">
                  去登录
                </ButtonLink>
                <ButtonLink href="/signup?from=/timetable" color="blue">
                  去注册
                </ButtonLink>
              </HStack>
            </VStack>
          </Center>
        ) : !user.heu_username ? (
          <Center w="full" flexDir="column" flex="1">
            <VStack spacing="3">
              <Text fontSize="3xl">想要看课表？</Text>
              <Text fontSize="lg" textAlign="center">
                去个人主页绑定 HEU 账号后才能查看课表
              </Text>
              <HStack spacing="3" py="4">
                <ButtonLink href={`/@${user.username}`} color="blue">
                  去个人主页绑定账号
                </ButtonLink>
              </HStack>
            </VStack>
          </Center>
        ) : (
          <CardContainer>
            <Wrap spacing="4" justify="space-between">
              <WrapItem alignItems="center" py="1">
                <Icon as={RiTableLine} w="5" h="5" ms="1" me="3" />
                <Heading as="p" fontSize="lg" fontWeight="600">
                  我的课表
                </Heading>
              </WrapItem>

              <WrapItem alignItems="center" py="1">
                <Button size="sm" onClick={handleFetchTimetable}>
                  更新课表
                </Button>
              </WrapItem>
            </Wrap>
            {Array.isArray(timetable?.result) ? (
              <>
                <Spacer h="4" />
                <Timetable />
              </>
            ) : (
              <Center w="full" flexDir="column" h="50vh" pb="4">
                <Text color="gray.500">还没有数据，点击右上角按钮获取数据</Text>
              </Center>
            )}
          </CardContainer>
        )}
      </MainContainer>
    </>
  )
}

export default TimetablePage
