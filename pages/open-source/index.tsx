import { ButtonGroup } from '@chakra-ui/button'
import { Img } from '@chakra-ui/image'
import { Flex, Heading } from '@chakra-ui/layout'
import Head from 'next/head'
import Footer from '../../components/Footer'
import Header from '../../components/Header'
import { NormalButtonLink } from '../../components/Link'
import Main from '../../components/Main'

const OpenSourcePage = () => {
  return (
    <>
      <Head>
        <title>开源 | 清廉街</title>
      </Head>
      <Main>
        <Header title="开源" nav />
        <Flex
          flex="1"
          flexDir="column"
          justifyContent="center"
          alignItems="center"
          py="6"
        >
          <Img src="/assets/octocat.webp" w="48" maxW="full" mb="6" />
          <Heading as="h2" fontSize="2xl" textAlign="center" lineHeight="1.75">
            前后端均开放源代码
            <br />
            代码托管在 GitHub 上
          </Heading>
          <ButtonGroup pt="6" spacing="4">
            <NormalButtonLink
              href="https://github.com/Lifeni/qinglianjie-web"
              text="前端"
              external
            />
            <NormalButtonLink
              href="https://github.com/bakapiano/qinglianjie"
              text="后端"
              external
            />
          </ButtonGroup>
        </Flex>
        <Footer />
      </Main>
    </>
  )
}

export default OpenSourcePage
