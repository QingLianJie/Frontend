import { Center, HStack, Spinner, Text, VStack } from '@chakra-ui/react'
import Head from 'next/head'
import Timetable from '../components/app/timetable/Table'
import ButtonLink from '../components/common/action/link/ButtonLink'
import CardContainer from '../components/common/container/Card'
import GroupContainer from '../components/common/container/Group'
import MainContainer from '../components/common/container/Main'
import useTimetable from '../hooks/useTimetable'
import useUser from '../hooks/useUser'

const TimetablePage = () => {
  const { user, isError: isUserError, isLoading: isUserLoading } = useUser()
  const { timetable, isLoading, isError } = useTimetable()

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
          <GroupContainer>
            <CardContainer>
              {isError ? (
                <Center w="full" flexDir="column" h="50vh" pb="4">
                  <Text color="gray.500">获取数据失败</Text>
                </Center>
              ) : isLoading || !timetable ? (
                <Center w="full" flexDir="column" h="50vh" pb="4">
                  <Spinner thickness="4px" color="pink.400" size="xl" />
                </Center>
              ) : (
                <Timetable />
              )}
            </CardContainer>
          </GroupContainer>
        )}
      </MainContainer>
    </>
  )
}

export default TimetablePage
