import { Card, Stack } from '@mui/material'
import { useAtom } from 'jotai'
import { scoresAtom } from '../../contexts/scores'

export const ScoresStatistics = () => {
  const [scores] = useAtom(scoresAtom)

  return (
    <Card variant="outlined">
      <Stack spacing={2} sx={{ p: 2 }}>
        成绩统计（TODO）
      </Stack>
    </Card>
  )
}
