import { Box, Card, Chip, Stack, Typography } from '@mui/material'
import { type Note as NoteType } from '../../types'
import { relativeTime } from '../../utils/time'
import 'github-markdown-css/github-markdown.css'
import { fontFamily } from '../../utils/theme'

interface NoteProps {
  note: NoteType
}

export const Note = ({ note }: NoteProps) => (
  <Card variant="outlined">
    <Stack spacing={1.5} sx={{ p: 2 }}>
      <Stack direction="row" spacing={1.5} alignItems="center">
        <Chip
          variant="outlined"
          label={note.tag}
          size="small"
          color="primary"
        />
        <Typography variant="body2" color="text.secondary">
          发布于 {relativeTime(note.date)}
        </Typography>
      </Stack>
      <Box
        className="markdown-body"
        dangerouslySetInnerHTML={{ __html: note.content }}
        sx={{ '&.markdown-body': { fontFamily } }}
      />
    </Stack>
  </Card>
)
