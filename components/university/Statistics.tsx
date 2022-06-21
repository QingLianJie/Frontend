import {
  InsertChartOutlined,
  CheckOutlined,
  CloseOutlined,
  TableChartOutlined,
} from '@mui/icons-material'
import {
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  Chip,
  Divider,
  Icon,
  Stack,
  Typography,
} from '@mui/material'
import { green, red } from '@mui/material/colors'
import { useAtom } from 'jotai'
import { fetcherModalAtom } from '../../contexts/boolean'
import { schedulesAtom } from '../../contexts/schedules'
import { scoresAtom } from '../../contexts/scores'
import { texture } from '../../utils/patterns'

interface StatisticsProps {
  type: '成绩' | '课表'
}

export const Statistics = ({ type }: StatisticsProps) => {
  const [, setOpen] = useAtom(fetcherModalAtom)
  const [scores] = useAtom(scoresAtom)
  const [schedules] = useAtom(schedulesAtom)

  return (
    <Card variant="outlined">
      <CardActionArea onClick={() => setOpen(true)}>
        <Stack
          spacing={0.5}
          sx={{
            p: 2,
            backgroundPosition: '-1rem -1rem',
            backgroundImage: texture,
          }}
        >
          <Stack
            direction="row"
            spacing={1}
            alignItems="center"
            justifyContent="space-between"
          >
            <Typography
              variant="body1"
              component="h2"
              fontWeight="fontWeightBold"
            >
              未获取学校数据
            </Typography>
            <Chip
              variant="outlined"
              label="数据"
              size="small"
              color="primary"
              sx={{
                height: 'auto',
                fontSize: 'caption.fontSize',
                lineHeight: 1.65,
                backgroundColor: 'background.paper',
              }}
            />
          </Stack>

          <Typography variant="body2" sx={{ color: 'text.secondary' }}>
            点此从学校网站上获取数据
          </Typography>
        </Stack>
      </CardActionArea>

      <Divider />
      <Stack spacing={1.5} sx={{ p: 2 }}>
        <Stack direction="row" spacing={1.5}>
          <InsertChartOutlined
            fontSize="small"
            sx={{ color: scores ? green[500] : red[500] }}
          />
          <Typography
            variant="body2"
            fontWeight="fontWeightBold"
            sx={{ color: scores ? green[500] : red[500], flex: 1 }}
          >
            {scores ? '已获取成绩数据' : '无成绩数据'}
          </Typography>
          <Icon
            component={scores ? CheckOutlined : CloseOutlined}
            fontSize="small"
            sx={{ color: scores ? green[500] : red[500] }}
          />
        </Stack>
        <Stack direction="row" spacing={1.5}>
          <TableChartOutlined
            fontSize="small"
            sx={{ color: schedules ? green[500] : red[500] }}
          />
          <Typography
            variant="body2"
            fontWeight="fontWeightBold"
            sx={{ color: schedules ? green[500] : red[500], flex: 1 }}
          >
            {schedules ? '已获取课表数据' : '无课表数据'}
          </Typography>
          <Icon
            component={schedules ? CheckOutlined : CloseOutlined}
            fontSize="small"
            sx={{ color: schedules ? green[500] : red[500] }}
          />
        </Stack>
      </Stack>
    </Card>
  )
}
