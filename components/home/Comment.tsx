import { ArrowForwardOutlined, BookOutlined } from '@mui/icons-material'
import {
  Button,
  Card,
  CardActions,
  CardContent,
  Divider,
  Grid,
  Stack,
  Typography,
} from '@mui/material'
import { useRouter } from 'next/router'
import { Fragment } from 'react'
import { type Group } from '../../types'
import { relativeTime } from '../../utils/time'

interface CommentProps {
  group: Group
}

export const Comment = ({ group }: CommentProps) => {
  const router = useRouter()

  return (
    <Card variant="outlined" sx={{ display: 'flex', flexDirection: 'column' }}>
      <CardContent sx={{ p: 0, flex: 1 }}>
        {group.comments.map(comment => (
          <Fragment>
            <Stack p={2} spacing={1} key={comment.id}>
              <Stack direction="row" spacing={1.5} alignItems="center">
                <Typography variant="body2" color="textSecondary">
                  {comment.author.name}
                </Typography>
                <Typography variant="body2" color="textSecondary">
                  {relativeTime(comment.date)}
                </Typography>
              </Stack>
              <Typography variant="body1">{comment.content}</Typography>
            </Stack>
            <Divider />
          </Fragment>
        ))}
      </CardContent>
      <CardActions sx={{ p: 0 }}>
        <Button
          size="large"
          variant="text"
          fullWidth
          sx={{ justifyContent: 'start', px: 1.75 }}
          color="secondary"
          onClick={() => router.push(`/courses/${group.course.id}`)}
        >
          <BookOutlined fontSize="small" />
          <Typography
            variant="button"
            sx={{ px: 1, flex: 1, textAlign: 'start' }}
          >
            {group.course.name}
          </Typography>
          <ArrowForwardOutlined fontSize="small" />
        </Button>
      </CardActions>
    </Card>
  )
}
