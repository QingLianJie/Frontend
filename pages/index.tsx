import { Box, Container, SimpleGrid } from '@chakra-ui/react'
import Head from 'next/head'
import ButtonTile from '../components/dashboard/ButtonTile'
import LinkTile from '../components/dashboard/LinkTile'
import NotificationTile from '../components/dashboard/NotificationTile'
import UserTile from '../components/dashboard/UserTile'
import Footer from '../components/Footer'
import { HeaderBar } from '../components/NavBar'
import { buttons, links } from '../data/meta'

const Index = () => {
  return (
    <>
      <Head>
        <title>清廉街</title>
      </Head>
      <Container maxW="container.lg" paddingY="2">
        <HeaderBar />
        <SimpleGrid columns={{ base: 1, lg: 2 }} spacing={0}>
          <Box as="section">
            <UserTile />
            <SimpleGrid columns={{ base: 3, sm: 4, md: 6, lg: 4 }}>
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
            </SimpleGrid>
          </Box>
          <Box as="section" display="flex" flexDirection="column">
            <NotificationTile />
            <NotificationTile />
          </Box>
        </SimpleGrid>
        <Footer />
      </Container>
    </>
  )
}

export default Index
