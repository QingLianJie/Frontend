import { Card, CardActionArea, Chip, Stack, Typography } from '@mui/material'
import 'github-markdown-css/github-markdown.css'
import { type Note as NoteType } from '../../types'
import { circultBoard, texture, wiggle } from '../../utils/patterns'
import { relativeTime } from '../../utils/time'

interface NoteProps {
  note: NoteType
}

export const Note = ({ note }: NoteProps) => {
  const image =
    note.type === '更新'
      ? circultBoard
      : note.type === '公告'
      ? wiggle
      : texture

  return (
    <Card variant="outlined">
      <CardActionArea
        href={note.href}
        target="_blank"
        rel="noopener noreferrer"
      >
        <Stack
          p={2}
          spacing={0.5}
          sx={{ backgroundPosition: '-1rem -1rem', backgroundImage: image }}
        >
          <Stack
            direction="row"
            spacing={1}
            alignItems="center"
            justifyContent="space-between"
          >
            <Typography variant="body2" color="text.secondary">
              {relativeTime(note.date)} 发布
            </Typography>
            <Chip
              variant="outlined"
              label={note.type}
              size="small"
              color="primary"
              sx={{
                height: 'auto',
                fontSize: 'caption.fontSize',
                backgroundColor: 'background.paper',
              }}
            />
          </Stack>
          <Typography
            variant="body1"
            component="span"
            fontWeight="fontWeightBold"
          >
            {note.title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {note.description}
          </Typography>
        </Stack>
      </CardActionArea>
    </Card>
  )
}
