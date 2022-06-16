import { Container, Grid } from '@mui/material'
import { blue } from '@mui/material/colors'
import { useAtom } from 'jotai'
import { type NextPage } from 'next'
import { Footer, Header } from '../components/base/Layout'
import { Loading } from '../components/base/Loading'
import { Meta } from '../components/Container'
import { Extensions } from '../components/university/Extensions'
import { Portal } from '../components/university/Portal'
import { fetcherAtom } from '../contexts/bridge'
import { bindAtom } from '../contexts/sessions'
import { pageLoadedAtom } from '../contexts/toggle'

const Schedule: NextPage = () => {
  const [fetcher] = useAtom(fetcherAtom)
  const [bindHEU] = useAtom(bindAtom)
  const [isLoaded] = useAtom(pageLoadedAtom)

  const isBind = fetcher && bindHEU

  return (
    <Container
      maxWidth="lg"
      sx={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}
    >
      <Meta title="课表 - 清廉街" />
      <Header title="课表" />
      {!isLoaded ? (
        <Loading color={blue[500]} />
      ) : isBind ? (
        <Grid container spacing={2}>
          <Grid item xs={12} sm={12} md={8} lg={9}></Grid>
          <Grid
            container
            item
            spacing={2}
            xs={12}
            sm={12}
            md={4}
            lg={3}
            alignItems="start"
            alignContent="start"
            justifyContent="start"
          >
            <Grid item xs={12} sm={6} md={12}>
              <Extensions />
            </Grid>
          </Grid>
        </Grid>
      ) : (
        <Portal type="课表" />
      )}
      <Footer />
    </Container>
  )
}

export default Schedule
