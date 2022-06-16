import { HelpOutlineOutlined } from '@mui/icons-material'
import { Alert, IconButton, Stack, Typography } from '@mui/material'
import { useAtom } from 'jotai'
import { faqsModalAtom } from '../../contexts/toggle'
import { Tooltip } from '../base/Tooltip'

export const Important = () => {
  const [, setOpen] = useAtom(faqsModalAtom)

  return (
    <Alert
      variant="outlined"
      severity="warning"
      action={
        <Tooltip title="常见问题" placement="top">
          <IconButton
            aria-label="常见问题"
            color="inherit"
            size="small"
            onClick={() => setOpen(true)}
          >
            <HelpOutlineOutlined fontSize="small" />
          </IconButton>
        </Tooltip>
      }
    >
      <Stack spacing={{ xs: 0.5, lg: 0.25 }}>
        <Typography fontSize="inherit">
          新版「清廉街」<strong>修改了学校数据的获取方式</strong>。
        </Typography>
        <Typography fontSize="inherit">
          学校相关的数据（如成绩、课表等）不再经过「清廉街」服务器处理。
        </Typography>
        <Typography fontSize="inherit">
          因此需要<strong> 安装用户脚本 </strong>或者<strong> 下载 App </strong>
          来获取成绩和课表数据。
        </Typography>
      </Stack>
    </Alert>
  )
}
