import { Grid, Stack } from '@mui/material'
import { type Note as NoteType } from '../../types'
import { Extension } from './Extension'
import { Guide } from './Guide'
import { Important } from './Important'

interface PortalProps {
  note: NoteType
}

export const Portal = ({ note }: PortalProps) => (
  <Grid container spacing={2} alignItems="stretch" sx={{ height: '100%' }}>
    <Grid item xs={12}>
      <Important />
    </Grid>
    <Grid item xs={12} sm={6} md={4} lg={3}>
      <Stack spacing={2}>
        <Extension />
      </Stack>
    </Grid>
    <Grid item xs={12} sm={6} md={8} lg={9}>
      <Guide />
    </Grid>
  </Grid>
)
