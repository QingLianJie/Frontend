import { HelpOutlineOutlined, WarningRounded } from '@mui/icons-material'
import {
  Button,
  Card,
  CardActions,
  CardContent,
  Divider,
  IconButton,
  Stack,
  Typography,
} from '@mui/material'
import { texture } from '../../utils/patterns'
import { Tooltip } from '../base/Tooltip'

export const Important = () => (
  <Card variant="outlined">
    <Stack
      direction="row"
      spacing={1.5}
      alignItems="center"
      sx={{
        pl: 2,
        pr: 1,
        py: 1,
        backgroundImage: texture,
        backgroundPosition: '-1rem -1rem',
      }}
    >
      <WarningRounded color="warning" fontSize="small" />
      <Typography
        variant="h2"
        fontSize="body1.fontSize"
        fontWeight="fontWeightBold"
        sx={{ display: 'flex', alignItems: 'center', flex: 1 }}
      >
        重要更新
      </Typography>
      <Tooltip title="了解更多" placement="top">
        <IconButton aria-label="了解更多">
          <HelpOutlineOutlined color="secondary" fontSize="small" />
        </IconButton>
      </Tooltip>
    </Stack>
    <Divider />
    <Stack spacing={1} sx={{ p: 2 }}>
      <Typography variant="body2">
        新版「清廉街」修改了数据获取方式，涉及到学校的数据不再经过「清廉街」服务器进行处理。
      </Typography>
      <Typography variant="body2">
        因此推荐
        <strong> 安装用户脚本 </strong>或者<strong> 下载 App </strong>
        来获取成绩和课表数据。
      </Typography>
    </Stack>
  </Card>
)
