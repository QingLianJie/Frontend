import { Box, Card, Divider, Grid, Stack, Typography } from '@mui/material'
import { range } from 'lodash'
import { Fragment } from 'react'
import { Extensions } from './Extensions'
import { FAQ } from './FAQ'
import { Guide } from './Guide'
import { Important } from './Important'

interface PortalProps {
  type: '成绩' | '课表'
}

export const Portal = ({ type }: PortalProps) => (
  <Fragment>
    <Grid container spacing={2}>
      <Grid item xs={12} sm={12} md={8} lg={9}>
        <Important />
        <Placeholder type={type} />
      </Grid>
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
        <Grid item xs={12} sm={6} md={12}>
          <Guide />
        </Grid>
      </Grid>
    </Grid>
    <FAQ />
  </Fragment>
)
const Placeholder = ({ type }: PortalProps) => (
  <Box sx={{ position: 'relative' }}>
    {type === '成绩' ? <ScoresSkeleton /> : <SchedulesSkeleton />}
    <Stack
      spacing={{ xs: 1, sm: 0.5, lg: 0 }}
      sx={{
        position: 'absolute',
        left: '50%',
        top: '46%',
        width: '100%',
        p: 2,
        maxWidth: { xs: '16rem', sm: 'unset' },
        zIndex: 1,
        transform: 'translate(-50%, -50%)',
        opacity: 0.2,
        userSelect: 'none',
      }}
    >
      <Typography
        variant="body1"
        color="text.secondary"
        fontSize={{
          xs: 'h5.fontSize',
          sm: 'h4.fontSize',
          md: 'h3.fontSize',
          lg: 'h2.fontSize',
        }}
        fontWeight="fontWeightBold"
        textAlign="center"
      >
        {type === '成绩' ? '无成绩数据' : '无课表数据'}
      </Typography>
      <Typography
        variant="body1"
        color="text.secondary"
        fontSize={{ xs: 'body1.fontSize', md: 'h6.fontSize' }}
        fontWeight="fontWeightBold"
        textAlign="center"
      >
        请安装相应插件并添加 HEU 账号后继续
      </Typography>
    </Stack>
  </Box>
)

const ScoresSkeleton = () => (
  <Stack sx={{ mt: 2, mb: { xs: 0, lg: 2 } }}>
    <Grid container spacing={2}>
      <Grid item xs={12} sm={4}>
        <Stack spacing={2}>
          <Card variant="outlined" sx={{ height: 80 }} />
          <Card
            variant="outlined"
            sx={{ height: 200, display: { xs: 'none', sm: 'flex' } }}
          />
          <Card
            variant="outlined"
            sx={{ height: 80, display: { xs: 'none', sm: 'flex' } }}
          />
        </Stack>
      </Grid>
      <Grid item xs={12} sm={8}>
        <Stack spacing={2}>
          <Card variant="outlined" sx={{ height: 45 }} />
          <Card variant="outlined">
            <Stack divider={<Divider />}>
              {range(8).map(i => (
                <Box sx={{ height: 45 }} key={i} />
              ))}
            </Stack>
          </Card>
        </Stack>
      </Grid>
    </Grid>
  </Stack>
)

const SchedulesSkeleton = () => (
  <Stack sx={{ mt: 2, mb: { xs: 0, lg: 2 } }}>
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <Card variant="outlined" sx={{ height: 50 }} />
      </Grid>
      <Grid item xs={12}>
        <Card variant="outlined">
          <Stack divider={<Divider />}>
            {range(6).map(i => (
              <Stack
                direction="row"
                divider={
                  <Divider orientation="vertical" sx={{ height: 'auto' }} />
                }
                key={i}
              >
                {range(8).map(j => (
                  <Box sx={{ flex: 1, height: 50 }} key={j} />
                ))}
              </Stack>
            ))}
          </Stack>
        </Card>
      </Grid>
    </Grid>
  </Stack>
)
