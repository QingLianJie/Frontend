import { Card, Stack } from '@mui/material'
import { useAtom } from 'jotai'
import { schedulesAtom } from '../../contexts/schedules'

export const SchedulesControls = () => {
  const [schedules] = useAtom(schedulesAtom)

  return (
    <Card variant="outlined">
      <Stack spacing={2} sx={{ p: 2 }}></Stack>
    </Card>
  )
}
