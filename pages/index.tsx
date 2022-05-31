import { Container, Grid } from '@mui/material'
import type { NextPage } from 'next'
import { Footer, Header } from '../components/common/Layout'
import { Meta } from '../components/Container'
import { Apps } from '../components/home/Apps'
import { Comment } from '../components/home/Comment'
import { Links } from '../components/home/Links'
import { Search } from '../components/home/Search'
import { type Comments } from '../types'

interface HomeProps {
  comments: Comments
}

const Home: NextPage<HomeProps> = ({ comments }: HomeProps) => (
  <Container
    maxWidth="lg"
    sx={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}
  >
    <Meta />
    <Header title="清廉街" />
    <Grid container spacing={2} alignItems="start">
      <Grid container item xs={12} md={6} spacing={2}>
        <Search />
        <Apps />
        <Links />
      </Grid>
      <Grid container item xs={12} md={6} spacing={2}>
        {comments.map(comment => (
          <Comment comment={comment} key={comment.date} />
        ))}
      </Grid>
    </Grid>
    <Footer />
  </Container>
)

export async function getServerSideProps() {
  const comments = (await import('./api/comments.json')).default
  return { props: { comments } }
}

export default Home
