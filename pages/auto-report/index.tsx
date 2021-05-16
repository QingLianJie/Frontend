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
import Footer from '../../components/Footer'
import Header from '../../components/Header'
import Main from '../../components/Main'

const AutoReportPage = () => {
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
              <Badge fontSize="0.75em" ml="4" colorScheme="pink">
                Beta
              </Badge>
            </Heading>
            <Text fontSize="md" w="full" textAlign="center" lineHeight="1.75">
              开启后将在 <strong>每天 0:05</strong> 自动进出校报备， 时间为
              <strong>当日 6:00 ~ 22:00</strong>，是否开启？
            </Text>
            <VStack my="6" spacing="4">
              <Button colorScheme="green" isFullWidth>
                开启
              </Button>
              <Button isFullWidth>只开启一次试试</Button>
            </VStack>
          </Container>
        </Flex>
        <Footer />
      </Main>
    </>
  )
}

export default AutoReportPage
