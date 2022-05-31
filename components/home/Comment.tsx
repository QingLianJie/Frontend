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
import { type Comment as CommentType } from '../../types'
import { relativeTime } from '../../utils/time'

interface CommentProps {
  comment: CommentType
}

export const Comment = ({ comment }: CommentProps) => (
  <Grid item xs={12} sm={6} md={12} lg={6}>
    <Card
      variant="outlined"
      sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}
    >
      <CardContent sx={{ p: 0, flex: 1 }}>
        <Stack p={2} spacing={1}>
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
      </CardContent>
      <Divider />
      <CardActions sx={{ p: 0 }}>
        <Button
          size="large"
          variant="text"
          fullWidth
          sx={{ justifyContent: 'start' }}
        >
          <BookOutlined fontSize="small" />
          <Typography
            variant="button"
            sx={{ px: 1, flex: 1, textAlign: 'start' }}
          >
            {comment.course.name}
          </Typography>
          <ArrowForwardOutlined fontSize="small" />
        </Button>
      </CardActions>
    </Card>
  </Grid>
)
