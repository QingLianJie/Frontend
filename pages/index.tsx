import { Box, Grid } from '@chakra-ui/layout'
import { Masonry } from 'masonic'
import Head from 'next/head'
import { PostCard } from '../components/Card'
import Footer from '../components/Footer'
import Header from '../components/Header'
import { AppIconLink } from '../components/Link'
import Main from '../components/Main'
import { homeLink } from '../data/links'
import meta from '../data/meta'

const items = Array.from(Array(10), () => {
  const text = `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Etiam sagittis velit eu placerat pretium. Phasellus blandit magna in leo lobortis sagittis. Nunc interdum facilisis augue, ac imperdiet purus porttitor id. Vivamus ut neque vel leo vulputate efficitur. Donec luctus, urna ac tempus rutrum, nunc ipsum tristique ante, nec viverra turpis eros vitae turpis. Praesent congue a odio faucibus aliquam. Etiam et quam nunc. Fusce posuere molestie efficitur. Suspendisse ut dolor lacus. Nullam finibus nunc magna, ut vulputate nibh accumsan quis. Proin egestas non dolor et tincidunt. Aenean semper eros quam, ac volutpat purus fermentum in. In accumsan mollis nunc facilisis faucibus. Etiam non interdum ipsum, vitae euismod dui. Fusce sagittis condimentum ullamcorper. Phasellus sit amet dictum tellus, vel facilisis nulla.`

  const sentence = text.split('. ')

  return {
    id: 0,
    title: sentence[Math.round(Math.random() * sentence.length)],
    content: sentence[Math.round(Math.random() * sentence.length)],
    date: '2021 年 5 月 16 日',
  }
})

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
          pt={{ base: 0, lg: 2 }}
          pb={{ base: 0, md: 8, lg: 12 }}
          gap={{ base: 0, lg: 1 }}
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

        <Box pt="6" pb={{ base: 0, lg: 6 }}>
          <Masonry items={items} render={PostCard} columnWidth={320} />
        </Box>

        <Footer fill />
      </Main>
    </>
  )
}

export default Index
