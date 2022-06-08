import { CategoryRounded, SchoolRounded } from '@mui/icons-material'
import {
  Button,
  ButtonGroup,
  Card,
  Divider,
  Stack,
  Typography,
  useMediaQuery,
  useTheme,
} from '@mui/material'
import { blue, green } from '@mui/material/colors'

export const Guide = () => {
  const theme = useTheme()
  const isMobile = useMediaQuery(theme.breakpoints.down('md'))

  return (
    <Card variant="outlined" sx={{ height: '100%' }}>
      <Stack
        direction={{ xs: 'column', md: 'row' }}
        divider={<Divider orientation={isMobile ? 'horizontal' : 'vertical'} />}
        sx={{ height: '100%' }}
      >
        <Stack
          spacing={1}
          alignItems="center"
          justifyContent="center"
          sx={{ flex: 1, px: 3, py: 4 }}
        >
          <CategoryRounded
            sx={{
              fontSize: 'h2.fontSize',
              mb: { xs: 2, md: 3 },
              color: green[500],
            }}
          />
          <Typography
            variant="h2"
            fontSize="h6.fontSize"
            fontWeight="fontWeightBold"
            textAlign="center"
          >
            1. 安装用户脚本或 App
          </Typography>
          <Typography variant="body1" textAlign="center" sx={{ pb: 1 }}>
            当前没有检测到已安装的用户脚本或 App
          </Typography>
          <Stack
            spacing={1}
            direction={{ xs: 'row', sm: 'column', md: 'row' }}
            flexWrap="wrap"
            alignItems="center"
          >
            <Button variant="outlined">用户脚本</Button>
            <Button variant="outlined">Android App</Button>
          </Stack>
        </Stack>
        <Stack
          spacing={1}
          alignItems="center"
          justifyContent="center"
          sx={{ flex: 1, px: 3, py: 4 }}
        >
          <SchoolRounded
            sx={{
              fontSize: 'h2.fontSize',
              mb: { xs: 2, md: 3 },
              color: blue[500],
            }}
          />
          <Typography
            variant="h2"
            fontSize="h6.fontSize"
            fontWeight="fontWeightBold"
            textAlign="center"
          >
            2. 添加 HEU 账号
          </Typography>
          <Typography variant="body1" textAlign="center" sx={{ pb: 1 }}>
            当前浏览器中没有记录 HEU 账号
          </Typography>
          <Button variant="outlined">添加 HEU 账号</Button>
        </Stack>
      </Stack>
    </Card>
  )
}
