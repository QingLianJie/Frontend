import { Button } from '@chakra-ui/button'
import {
  Badge,
  Container,
  Flex,
  Heading,
  Text,
  VStack,
} from '@chakra-ui/layout'
import Head from 'next/head'
import { useState } from 'react'
import Footer from '../../components/Footer'
import Header from '../../components/Header'
import Main from '../../components/Main'

type ReportState = false | 'auto' | 'once'

const AutoReportPage = () => {
  const [report, setReport] = useState<ReportState>(false)

  return (
    <>
      <Head>
        <title>报备 | 清廉街</title>
      </Head>
      <Main>
        <Header title="报备" nav />
        <Flex
          flex="1"
          flexDir="column"
          justifyContent="center"
          alignItems="center"
          py="6"
        >
          <Container maxW="96">
            <Heading
              as="h2"
              fontSize="2xl"
              my="6"
              d="flex"
              alignItems="center"
              justifyContent="center"
            >
              自动报备
              {report ? (
                <Badge
                  py="1.5"
                  px="2"
                  fontSize="0.65em"
                  ml="4"
                  colorScheme="green"
                >
                  {report === 'once' ? '已开启一次' : '已开启'}
                </Badge>
              ) : (
                <Badge
                  py="1.5"
                  px="2"
                  fontSize="0.65em"
                  ml="4"
                  colorScheme="gray"
                >
                  已关闭
                </Badge>
              )}
            </Heading>
            {report ? (
              report === 'once' ? (
                <Text
                  fontSize="md"
                  w="full"
                  textAlign="center"
                  lineHeight="1.75"
                >
                  系统将在 <strong>明天 0:05</strong> 自动进出校报备，报备时间为
                  <strong>当日 6:00 ~ 22:00</strong>。
                </Text>
              ) : (
                <Text
                  fontSize="md"
                  w="full"
                  textAlign="center"
                  lineHeight="1.75"
                >
                  系统将在 <strong>每天 0:05</strong> 自动进出校报备，报备时间为
                  <strong>当日 6:00 ~ 22:00</strong>。
                </Text>
              )
            ) : (
              <Text fontSize="md" w="full" textAlign="center" lineHeight="1.75">
                开启后将在 <strong>每天 0:05</strong> 自动进出校报备，报备时间为
                <strong>当日 6:00 ~ 22:00</strong>，是否开启？
              </Text>
            )}

            <VStack my="6" spacing="4">
              {report ? (
                <Button
                  colorScheme="red"
                  isFullWidth
                  onClick={() => setReport(false)}
                >
                  关闭自动报备
                </Button>
              ) : (
                <>
                  <Button
                    colorScheme="yellow"
                    isFullWidth
                    onClick={() => setReport('auto')}
                  >
                    开启
                  </Button>
                  <Button isFullWidth onClick={() => setReport('once')}>
                    只开启一次
                  </Button>
                </>
              )}
            </VStack>
          </Container>
        </Flex>
        <Footer />
      </Main>
    </>
  )
}

export default AutoReportPage
