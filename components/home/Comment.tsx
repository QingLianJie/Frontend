import {
  ArrowForwardOutlined,
  BookOutlined,
  KeyboardArrowDownOutlined,
  KeyboardArrowUpOutlined,
} from '@mui/icons-material'
import {
  Button,
  Card,
  CardActions,
  CardContent,
  Chip,
  Collapse,
  Divider,
  Icon,
  Stack,
  Typography,
} from '@mui/material'
import { useRouter } from 'next/router'
import { Fragment, useState } from 'react'
import { TransitionGroup } from 'react-transition-group'
import { type Comment as CommentType, type Group } from '../../types'
import { texture, ticTacToe } from '../../utils/background'
import { relativeTime } from '../../utils/time'

interface CommentProps {
  group: Group
}

export const Comment = ({ group }: CommentProps) => {
  const router = useRouter()
  const [isExpand, setExpand] = useState(false)

  const isLong = group.comments.length > 4

  return (
    <Card
      variant="outlined"
      sx={{ display: 'flex', flexDirection: 'column', mb: 2 }}
    >
      <CardContent sx={{ p: 0, flex: 1 }}>
        <Stack
          p={2}
          spacing={0.5}
          sx={{ backgroundPosition: '-1rem -1rem', backgroundImage: ticTacToe }}
        >
          <Stack
            direction="row"
            spacing={1.5}
            justifyContent="space-between"
            alignItems="center"
          >
            <Typography
              variant="body1"
              component="span"
              sx={{ fontWeight: 'fontWeightBold' }}
            >
              {group.course.name}
            </Typography>

            <Chip
              variant="outlined"
              label={group.course.type}
              size="small"
              color="primary"
              sx={{
                height: 'auto',
                fontSize: 'caption.fontSize',
                backgroundColor: 'background.paper',
              }}
            />
          </Stack>

          <Stack direction="row" spacing={1.5}>
            <Typography variant="body2" color="text.secondary">
              {group.course.category}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {group.course.credit} 学分
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {group.course.period} 学时
            </Typography>
          </Stack>
        </Stack>

        <TransitionGroup>
          {group.comments.slice(0, 3).map(comment => (
            <Collapse key={comment.id}>
              <Divider />
              <Content comment={comment} />
            </Collapse>
          ))}

          {isExpand &&
            group.comments.slice(3).map(comment => (
              <Collapse key={comment.id}>
                <Divider />
                <Content comment={comment} />
              </Collapse>
            ))}
        </TransitionGroup>

        {isLong && (
          <Fragment>
            <Divider />
            <Button
              fullWidth
              size="small"
              startIcon={
                <Icon
                  component={
                    isExpand
                      ? KeyboardArrowUpOutlined
                      : KeyboardArrowDownOutlined
                  }
                  fontSize="small"
                />
              }
              sx={{
                fontSize: 'caption.fontSize',
                pr: 3,
                backgroundImage: texture,
              }}
              onClick={() => setExpand(v => !v)}
            >
              {isExpand ? '收起评论' : '展开评论'}
            </Button>
          </Fragment>
        )}
      </CardContent>
      <Divider />
      <CardActions sx={{ p: 0 }}>
        <Button
          size="large"
          variant="text"
          fullWidth
          sx={{ justifyContent: 'start', px: 1.75, py: 1.25 }}
          color="primary"
          onClick={() => router.push(`/courses/${group.course.id}`)}
        >
          <BookOutlined fontSize="small" />
          <Typography
            variant="button"
            sx={{ px: 1.5, flex: 1, textAlign: 'start' }}
          >
            查看相关课程
          </Typography>
          <ArrowForwardOutlined fontSize="small" />
        </Button>
      </CardActions>
    </Card>
  )
}

interface ContentProps {
  comment: CommentType
}

const Content = ({ comment }: ContentProps) => (
  <Stack p={2} spacing={1} key={comment.id}>
    <Stack direction="row" spacing={1.5} alignItems="center">
      <Typography variant="body2" color="textSecondary">
        {comment.author}
      </Typography>
      <Typography variant="body2" color="textSecondary">
        {relativeTime(comment.date)}
      </Typography>
    </Stack>
    <Typography variant="body1">{comment.content}</Typography>
  </Stack>
)
