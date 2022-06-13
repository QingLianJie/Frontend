import { Alert, Button } from '@mui/material'

export const Important = () => (
  <Alert
    variant="outlined"
    severity="warning"
    action={
      <Button
        color="inherit"
        size="small"
        sx={{ fontWeight: 'fontWeightBold' }}
      >
        了解更多
      </Button>
    }
  >
    新版「清廉街」修改了数据获取方式，学校数据不再经过「清廉街」服务器处理。推荐
    <strong> 安装用户脚本 </strong>或者<strong> 下载 App </strong>
    来获取成绩和课表数据。
  </Alert>
)
