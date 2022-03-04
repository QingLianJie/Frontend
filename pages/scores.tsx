import {
  Center,
  Grid,
  GridItem,
  HStack,
  Spacer,
  Spinner,
  Text,
  VStack,
} from '@chakra-ui/react'
import Head from 'next/head'
import { createContext, useState } from 'react'
import ScoreCalc from '../components/app/score/calc/Calc'
import ScoreList from '../components/app/score/list/List'
import ScoreInfo from '../components/app/score/Info'
import ButtonLink from '../components/common/action/link/ButtonLink'
import MainContainer from '../components/common/container/Main'
import useUser from '../hooks/useUser'
import CreditInfo from "../components/app/score/credit/Info";

interface IScoresContext {
  checkList: number[]
  setCheckList: (checkList: number[]) => void
  calcMode: boolean
  setCalcMode: (calcMode: boolean) => void
}

export const ScoresContext = createContext<IScoresContext>({
  checkList: [],
  setCheckList: () => {},
  calcMode: false,
  setCalcMode: () => {},
})

const ScoresPage = () => {
  const { user, isError, isLoading } = useUser()
  const [checkList, setCheckList] = useState<number[]>([])
  const [calcMode, setCalcMode] = useState<boolean>(false)

  return (
    <>
      <Head>
        <title>成绩 - 清廉街</title>
      </Head>
      <ScoresContext.Provider
        value={{ checkList, setCheckList, calcMode, setCalcMode }}
      >
        <MainContainer gray title="成绩">
          {isLoading ? (
            <Center w="full" flexDir="column" flex="1">
              <Spinner thickness="4px" color="pink.400" size="xl" />
            </Center>
          ) : isError || !user ? (
            <Center w="full" flexDir="column" flex="1">
              <VStack spacing="3">
                <Text fontSize="3xl">想要查成绩？</Text>
                <Text fontSize="lg" textAlign="center">
                  登录并且绑定 HEU 账号后才能查看自己的成绩
                </Text>
                <HStack spacing="3" py="4">
                  <ButtonLink href="/login?from=/scores" color="green">
                    去登录
                  </ButtonLink>
                  <ButtonLink href="/signup?from=/scores" color="blue">
                    去注册
                  </ButtonLink>
                </HStack>
              </VStack>
            </Center>
          ) : !user.heu_username ? (
            <Center w="full" flexDir="column" flex="1">
              <VStack spacing="3">
                <Text fontSize="3xl">想要查成绩？</Text>
                <Text fontSize="lg" textAlign="center">
                  去个人主页绑定 HEU 账号后才能查看成绩
                </Text>
                <HStack spacing="3" py="4">
                  <ButtonLink href={`/@${user.username}`} color="blue">
                    去个人主页绑定账号
                  </ButtonLink>
                </HStack>
              </VStack>
            </Center>
          ) : (
            <Grid
              templateColumns="repeat(3, 1fr)"
              gap={{ base: 8, md: 12 }}
              h="full"
            >
              <GridItem colSpan={{ base: 3, md: 2 }} h="full" minW="0">
                <ScoreInfo />
                <Spacer h={{ base: 6, md: 9 }} />
                <ScoreList />
                <Spacer h={{ base: 2, md: 4 }} />
                <CreditInfo />
              </GridItem>
              <GridItem colSpan={{ base: 3, md: 1 }} h="full" minW="0">
                <VStack
                  align="start"
                  spacing={{ base: 6, md: 9 }}
                  pos="sticky"
                  top="28"
                >
                  <ScoreCalc />
                </VStack>
              </GridItem>
            </Grid>
          )}
        </MainContainer>
      </ScoresContext.Provider>
    </>
  )
}

export default ScoresPage
