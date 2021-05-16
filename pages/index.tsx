import { Grid } from '@chakra-ui/layout'
import Head from 'next/head'
import Footer from '../components/Footer'
import Header from '../components/Header'
import { AppIconLink } from '../components/Link'
import Main from '../components/Main'
import { homeLink } from '../data/links'
import meta from '../data/meta'

const Index = () => {
  return (
    <>
      <Head>
        <title>清廉街</title>
      </Head>
      <Main>
        <Header title="清廉街" />
        <Grid
          templateColumns="repeat(auto-fit, 84px)"
          justifyContent="center"
          px="4"
          py={{ base: 2, lg: 8 }}
        >
          {homeLink.map(link => (
            <AppIconLink
              key={link}
              href={meta[link].href}
              icon={meta[link].icon}
              text={meta[link].text}
              color={meta[link].color}
            />
          ))}
        </Grid>

        <Footer fill />
      </Main>
    </>
  )
}

export default Index
