import { Container, Grid, Stack } from '@mui/material'
import { green } from '@mui/material/colors'
import { useAtom } from 'jotai'
import { type NextPage } from 'next'
import { Footer, Header } from '../components/base/Layout'
import { Loading } from '../components/base/Loading'
import { Meta } from '../components/Container'
import { ScoresCalc } from '../components/scores/Calc'
import { ScoresFilter } from '../components/scores/Filter'
import { ScoresList } from '../components/scores/List'
import { ScoresNote } from '../components/scores/Note'
import { ScoresStatistics } from '../components/scores/Statistics'
import { Extensions } from '../components/university/Extensions'
import { Portal } from '../components/university/Portal'
import { Statistics } from '../components/university/Statistics'
import { pageLoadedAtom } from '../contexts/boolean'
import { bindAtom, fetcherAtom } from '../contexts/university'

const Scores: NextPage = () => {
  const [fetcher] = useAtom(fetcherAtom)
  const [bindHEU] = useAtom(bindAtom)
  const [isLoaded] = useAtom(pageLoadedAtom)

  const isBind = fetcher && bindHEU

  return (
    <Container
      maxWidth="lg"
      sx={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}
    >
      <Meta title="成绩 - 清廉街" />
      <Header title="成绩" />
      {!isLoaded ? (
        <Loading color={green[500]} />
      ) : isBind ? (
        <Grid container spacing={2}>
          <Grid container item spacing={2} xs={12} sm={12} md={8} lg={9}>
            <Grid item xs={12} sm={4}>
              <Stack spacing={2}>
                <ScoresStatistics />
                <ScoresCalc />
              </Stack>
            </Grid>
            <Grid item xs={12} sm={8}>
              <Stack spacing={2}>
                <ScoresFilter />
                <ScoresList />
              </Stack>
            </Grid>
          </Grid>
          <Grid
            container
            item
            spacing={2}
            xs={12}
            md={4}
            lg={3}
            alignItems="start"
            alignContent="start"
            justifyContent="start"
          >
            <Grid item xs={12} sm={6} md={12}>
              <Stack spacing={2}>
                <Extensions />
                <Statistics type="成绩" />
              </Stack>
            </Grid>
            <Grid item xs={12} sm={6} md={12}>
              <ScoresNote />
            </Grid>
          </Grid>
        </Grid>
      ) : (
        <Portal type="成绩" />
      )}
      <Footer />
    </Container>
  )
}

export default Scores
