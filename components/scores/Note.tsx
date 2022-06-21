import {
  Card,
  Divider,
  List,
  ListItem,
  ListSubheader,
  Stack,
} from '@mui/material'

export const ScoresNote = () => (
  <Card variant="outlined">
    <List subheader={<ListSubheader>成绩计算方式</ListSubheader>}>
      <ListItem sx={{ fontSize: 'body2.fontSize', py: 0.5 }}>
        加权平均分计算规则：分数 × 学分数 ÷ 学分总数。
      </ListItem>
      <ListItem sx={{ fontSize: 'body2.fontSize', py: 0.5 }}>
        对于按等级评分的课程，优秀 = 95，良好 = 85，中等 = 75，及格 =
        65，不及格 = 30，其他情况（如缺考）均为 0。
      </ListItem>
    </List>
  </Card>
)
