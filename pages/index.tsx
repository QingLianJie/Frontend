import { Box, Container, Flex, SimpleGrid } from '@chakra-ui/layout'
import Head from 'next/head'
import LinkTile from '../components/LinkTile'
import { HeaderBar } from '../components/NavBar'
import router from '../data/router'

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
              {router.map(
                r =>
                  r.name !== 'home' && (
                    <LinkTile
                      key={r.name}
                      href={r.href}
                      icon={r.icon}
                      text={r.text}
                      color={r.color}
                    />
                  )
              )}
            </Flex>
          </Box>
          <Box as="section"></Box>
        </SimpleGrid>
      </Container>
    </>
  )
}

export default Index
