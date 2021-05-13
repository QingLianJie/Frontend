import { Container, Flex } from '@chakra-ui/layout'
import Head from 'next/head'
import { BookOpen, Calendar, Clipboard, UploadCloud } from 'react-feather'
import LinkTile from '../components/LinkTile'
import { HeaderBar } from '../components/NavBar'

const Index = () => {
  return (
    <>
      <Head>
        <title>清廉街</title>
      </Head>
      <HeaderBar title="清廉街" />
      <Container maxW="container.lg">
        <Flex justifyContent="center" flexWrap="wrap">
          <LinkTile
            href="/scores"
            icon={Clipboard}
            text="成绩"
            color="rgba(72,187,120,1)"
          />
          <LinkTile
            href="/timetable"
            icon={Calendar}
            text="课表"
            color="rgba(66,153,225,1)"
          />
          <LinkTile
            href="/courses"
            icon={BookOpen}
            text="课程"
            color="rgba(245,101,101,1)"
          />
          <LinkTile
            href="/report"
            icon={UploadCloud}
            text="报备"
            color="rgba(236,201,75,1)"
          />
        </Flex>
      </Container>
    </>
  )
}

export default Index
