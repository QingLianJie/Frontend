import { Grid, Stack } from '@mui/material'
import { Guide } from './Guide'
import { Important } from './Important'
import { Extension } from './Extension'

export const Portal = () => (
  <Grid container spacing={2} alignItems="stretch" sx={{ height: '100%' }}>
    <Grid item xs={12} sm={6} md={4} lg={3} spacing={2}>
      <Stack spacing={2}>
        <Important />
        <Extension />
      </Stack>
    </Grid>
    <Grid item xs={12} sm={6} md={8} lg={9}>
      <Guide />
    </Grid>
  </Grid>
)
