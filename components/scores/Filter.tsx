import { Card, Stack } from '@mui/material'
import { useAtom } from 'jotai'
import { scoresAtom } from '../../contexts/scores'

export const ScoresFilter = () => {
  const [scores] = useAtom(scoresAtom)

  return (
    <Card variant="outlined">
      <Stack spacing={2} sx={{ p: 2 }}></Stack>
    </Card>
  )
}
