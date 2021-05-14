import { Box, Container, Flex, SimpleGrid } from '@chakra-ui/layout'
import Head from 'next/head'
import ButtonTile from '../components/dashboard/ButtonTile'
import LinkTile from '../components/dashboard/LinkTile'
import UserTile from '../components/dashboard/UserTile'
import { HeaderBar } from '../components/NavBar'
import { buttons, links } from '../data/meta'

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
            <UserTile />
            <Flex flexWrap="wrap" justifyContent="center">
              {links.map(
                link =>
                  link.name !== 'home' && (
                    <LinkTile
                      key={link.name}
                      href={link.href}
                      icon={link.icon}
                      text={link.text}
                      color={link.color}
                    />
                  )
              )}
              {buttons.map(button => (
                <ButtonTile
                  key={button.name}
                  icon={button.icon}
                  text={button.text}
                  color={button.color}
                />
              ))}
            </Flex>
          </Box>
          <Box as="section"></Box>
        </SimpleGrid>
      </Container>
    </>
  )
}

export default Index
