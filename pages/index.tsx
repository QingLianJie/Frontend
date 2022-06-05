import {
  Box,
  Card,
  Container,
  Divider,
  Grid,
  Typography,
  useMediaQuery,
  useTheme,
} from '@mui/material'
import { groupBy, sortBy } from 'lodash'
import { type GetServerSideProps, type NextPage } from 'next'
import { Fragment } from 'react'
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
import { type Groups, type Note as NoteType } from '../types'

interface HomeProps {
  groups: Groups
  note: NoteType
}

const Home: NextPage<HomeProps> = ({ groups, note }: HomeProps) => {
  const theme = useTheme()

  const isMobile = useMediaQuery(theme.breakpoints.down('sm'))
  const isSmall = useMediaQuery(theme.breakpoints.between('sm', 'md'))
  const isMiddle = useMediaQuery(theme.breakpoints.between('md', 'lg'))
  const isPad = useMediaQuery(theme.breakpoints.between('sm', 'lg'))

  return (
    <Container
      maxWidth="lg"
      sx={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}
    >
      <Meta />
      <Header title="清廉街" />
      <Grid container spacing={2} alignItems="start">
        <Grid container item xs={12} sm={6} md={4} lg={3} spacing={2}>
          <Grid item xs={12}>
            <Search />
          </Grid>
          <NavLinks />
          {isSmall && (
            <Fragment>
              <Grid item xs={12}>
                <Card variant="outlined">
                  <FavoriteLinks hasHeader />
                </Card>
              </Grid>
              <Grid item xs={12}>
                <Card variant="outlined">
                  <ListLinks hasHeader />
                </Card>
              </Grid>
            </Fragment>
          )}
          {isMobile || isMiddle ? (
            <Fragment>
              <Grid item xs={12}>
                <TabList />
              </Grid>
              <Grid item xs={12}>
                <Note note={note} />
              </Grid>
            </Fragment>
          ) : (
            <Fragment>
              <Grid item xs={12}>
                <Note note={note} />
              </Grid>
              <Grid item xs={12}>
                <Card variant="outlined">
                  <OtherLinks hasHeader />
                </Card>
              </Grid>
            </Fragment>
          )}
        </Grid>
        <Grid item xs={12} sm={6} md={8} lg={6}>
          <Divider sx={{ mb: 2, display: { xs: 'flex', sm: 'none' } }}>
            <Typography variant="body2" color="text.secondary">
              最近课程评论
            </Typography>
          </Divider>

          <Box sx={{ columns: { xs: 1, md: 2 }, columnGap: 2 }}>
            {groups.map(group => (
              <Comment group={group} key={group.course.id} />
            ))}
          </Box>
        </Grid>
        <Grid container spacing={2} item xs={0} sm={6} md={4} lg={3}>
          {!isMobile && !isPad && (
            <Fragment>
              <Grid item xs={12}>
                <Card variant="outlined">
                  <FavoriteLinks hasHeader />
                </Card>
              </Grid>
              <Grid item xs={12}>
                <Card variant="outlined">
                  <ListLinks hasHeader />
                </Card>
              </Grid>
            </Fragment>
          )}
        </Grid>
      </Grid>
      <Footer />
    </Container>
  )
}

export default Home

export const getServerSideProps: GetServerSideProps = async () => {
  const comments = await fetch('https://api.qinglianjie.cn/api/recent/comments')
    .then(res => res.json())
    .then(data =>
      data.map((comment: any) => ({
        id: comment.id,
        content: comment.content,
        date: comment.created,
        author: comment.anonymous ? '匿名' : comment.user.username,
        course: {
          id: comment.course.course_id,
          name: comment.course.name,
          type: comment.course.attributes,
          category: comment.course.kind,
          test: comment.course.assessment_method,
          credit: comment.course.credit,
          period: comment.course.total_time,
        },
      }))
    )

  const objects = sortBy(
    groupBy(comments, f => f.course.id),
    g => g[0].id
  ).reverse()

  const groups = Object.values(objects).map(comments => ({
    course: comments[0].course,
    comments,
  }))

  const note = (await import('./api/note.json')).default as NoteType

  return { props: { groups, note } }
}
