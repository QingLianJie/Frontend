import { Masonry } from '@mui/lab'
import {
  Button,
  Card,
  Container,
  Divider,
  Grid,
  Stack,
  Typography,
  useMediaQuery,
  useTheme,
} from '@mui/material'
import { useAtom } from 'jotai'
import { groupBy, sortBy } from 'lodash'
import { type GetServerSideProps, type NextPage } from 'next'
import { Fragment, useEffect, useState } from 'react'
import { Footer, Header } from '../components/base/Layout'
import { Meta } from '../components/Container'
import { Comment } from '../components/home/Comment'
import {
  FavoriteLinks,
  ListLinks,
} from '../components/home/links/FavoriteLinks'
import { NavLinks } from '../components/home/links/NavLinks'
import { OtherLinks } from '../components/home/links/OtherLinks'
import { TabList } from '../components/home/links/TabList'
import { Note } from '../components/home/Note'
import { Search } from '../components/home/Search'
import { linksAtom } from '../contexts/links'
import { type Comments, type Groups, type Note as NoteType } from '../types'

interface HomeProps {
  groups: Groups
  note: NoteType
}

const Home: NextPage<HomeProps> = ({ groups, note }: HomeProps) => {
  const theme = useTheme()
  const isMiddle = useMediaQuery(theme.breakpoints.between('md', 'lg'))

  const [isExpand, setExpand] = useState(false)
  const list =
    isMiddle && !isExpand
      ? groups.slice(0, Math.ceil(groups.length / 2))
      : groups

  return (
    <Container
      maxWidth="lg"
      sx={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}
    >
      <Meta />
      <Header title="清廉街" />
      <Grid container spacing={2} alignItems="start">
        <Grid container item xs={12} sm={6} md={8} lg={6} spacing={2}>
          <Search />
          <NavLinks />
          <Links note={note} />
        </Grid>
        <Grid item xs={12} sm={6} md={4} lg={6}>
          <Divider sx={{ mb: 2, display: { xs: 'flex', sm: 'none' } }}>
            <Typography variant="body2" color="text.secondary">
              最近课程评论
            </Typography>
          </Divider>
          <Masonry
            columns={{ xs: 1, sm: 1, md: 1, lg: 2 }}
            spacing={2}
            sx={{ minWidth: 'calc(100% + 16px)' }}
          >
            {list.map(group => (
              <Comment group={group} key={group.course.id} />
            ))}
            {isMiddle && !isExpand && (
              <Button
                variant="outlined"
                color="primary"
                fullWidth
                sx={{ m: 2 }}
                onClick={() => setExpand(true)}
              >
                查看更多评论
              </Button>
            )}
          </Masonry>
        </Grid>
      </Grid>
      <Footer />
    </Container>
  )
}

export default Home

export const getServerSideProps: GetServerSideProps = async () => {
  const comments = (await import('./api/comments.json')).default as Comments
  const note = (await import('./api/note.json')).default as NoteType

  const objects = sortBy(
    groupBy(comments, f => f.course.id),
    g => g[0].id
  ).reverse()

  const groups = Object.entries(objects).map(([id, comments]) => ({
    course: comments[0].course,
    comments,
  }))

  return { props: { groups, note } }
}

interface LinksProps {
  note: NoteType
}

const Links = ({ note }: LinksProps) => {
  const theme = useTheme()
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'))

  return (
    <Fragment>
      {isMobile ? (
        <Fragment>
          <Grid item xs={12}>
            <TabList />
          </Grid>
          <Grid item xs={12}>
            <Note note={note} />
          </Grid>
        </Fragment>
      ) : (
        <Grid
          item
          container
          xs={12}
          spacing={2}
          sx={{ flexWrap: { xs: 'wrap-reverse', md: 'wrap' } }}
        >
          <Grid item xs={12} md={6}>
            <Stack spacing={2}>
              <Note note={note} />
              <Card variant="outlined">
                <OtherLinks hasHeader />
              </Card>
            </Stack>
          </Grid>
          <Grid item xs={12} md={6}>
            <Stack spacing={2}>
              <Card variant="outlined">
                <FavoriteLinks hasHeader />
                <Divider />
                <ListLinks hasHeader />
              </Card>
            </Stack>
          </Grid>
        </Grid>
      )}
    </Fragment>
  )
}
