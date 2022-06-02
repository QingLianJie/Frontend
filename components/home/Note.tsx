import { ArrowForwardOutlined, SmsOutlined } from '@mui/icons-material'
import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  Chip,
  Divider,
  Stack,
  Typography,
} from '@mui/material'
import 'github-markdown-css/github-markdown.css'
import { Fragment } from 'react'
import { type Note as NoteType } from '../../types'
import { circultBoard, wiggle, texture } from '../../utils/background'
import { fontFamily } from '../../utils/theme'
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
      <Stack
        p={2}
        spacing={0.5}
        sx={{ backgroundPosition: '-1rem -1rem', backgroundImage: image }}
      >
        <Typography
          variant="body1"
          component="span"
          fontWeight="fontWeightBold"
        >
          {note.title}
        </Typography>
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
      </Stack>
      <Divider />
      <CardContent>
        <Box
          className="markdown-body"
          dangerouslySetInnerHTML={{ __html: note.html }}
          sx={{
            '&.markdown-body': {
              fontFamily,
              lineHeight: 'body.lineHeight',
              color: 'inherit',
              backgroundColor: 'transparent',
            },
          }}
        />
      </CardContent>
      {note.action && (
        <Fragment>
          <Divider />
          <CardActions sx={{ p: 0 }}>
            <Button
              size="large"
              variant="text"
              fullWidth
              sx={{ justifyContent: 'start', px: 1.75, py: 1.25 }}
              color="primary"
              href={note.action.href}
              target="_blank"
              rel="noopener noreferrer"
            >
              <SmsOutlined fontSize="small" />
              <Typography
                variant="button"
                sx={{ px: 1.5, flex: 1, textAlign: 'start' }}
              >
                {note.action.title}
              </Typography>
              <ArrowForwardOutlined fontSize="small" />
            </Button>
          </CardActions>
        </Fragment>
      )}
    </Card>
  )
}
