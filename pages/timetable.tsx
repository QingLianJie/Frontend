import {
  Button,
  Center,
  Heading,
  HStack,
  Icon,
  Spacer,
  Spinner,
  Text,
  VStack,
  Wrap,
  WrapItem,
} from '@chakra-ui/react'
import Head from 'next/head'
import { RiTableLine } from 'react-icons/ri'
import Timetable from '../components/app/timetable/Table'
import ButtonLink from '../components/common/action/link/ButtonLink'
import CardContainer from '../components/common/container/Card'
import MainContainer from '../components/common/container/Main'
import useUser from '../hooks/useUser'

const TimetablePage = () => {
  const { user, isError, isLoading } = useUser()

  return (
    <>
      <Head>
        <title>课表 - 清廉街</title>
      </Head>
      <MainContainer gray title="课表">
        {isLoading ? (
          <Center w="full" flexDir="column" flex="1">
            <Spinner thickness="4px" color="pink.400" size="xl" />
          </Center>
        ) : isError || !user ? (
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
                <Button size="sm">更新课表</Button>
              </WrapItem>
            </Wrap>
            <Spacer h="4" />

            <Timetable />
          </CardContainer>
        )}
      </MainContainer>
    </>
  )
}

export default TimetablePage
