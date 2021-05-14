import { Container, Flex, Heading, Box, SimpleGrid } from '@chakra-ui/layout'
import Head from 'next/head'
import {
  RiBarChartBoxFill,
  RiBookOpenFill,
  RiGalleryUploadFill,
  RiTableFill,
} from 'react-icons/ri'
import LinkTile from '../components/LinkTile'

import { HeaderBar } from '../components/NavBar'

const Index = () => {
  return (
    <>
      <Head>
        <title>清廉街</title>
      </Head>
      <Container maxW="container.lg">
        <HeaderBar />
        <SimpleGrid columns={{ base: 1, lg: 2 }} spacing={4}>
          <Box as="section">
            <Flex flexWrap="wrap" justifyContent="center">
              <LinkTile
                href="/scores"
                icon={RiBarChartBoxFill}
                text="成绩"
                color="rgba(72,187,120,1)"
              />
              <LinkTile
                href="/timetable"
                icon={RiTableFill}
                text="课表"
                color="rgba(66,153,225,1)"
              />
              <LinkTile
                href="/courses"
                icon={RiBookOpenFill}
                text="课程"
                color="rgba(245,101,101,1)"
              />
              <LinkTile
                href="/report"
                icon={RiGalleryUploadFill}
                text="报备"
                color="rgba(236,201,75,1)"
              />
            </Flex>
          </Box>
          <Box as="section"></Box>
        </SimpleGrid>
      </Container>
    </>
  )
}

export default Index
