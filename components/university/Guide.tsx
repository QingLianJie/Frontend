import {
  CategoryOutlined,
  CheckOutlined,
  CloseOutlined,
  SchoolOutlined,
} from '@mui/icons-material'
import {
  Card,
  CardActionArea,
  Chip,
  Divider,
  Icon,
  Stack,
  Typography,
} from '@mui/material'
import { green, red } from '@mui/material/colors'
import { useAtom } from 'jotai'
import { bindAtom } from '../../contexts/session'
import { fetcherAtom } from '../../contexts/bridge'
import { texture } from '../../utils/patterns'

export const Guide = () => {
  const [fetcher] = useAtom(fetcherAtom)
  const [bindHEU] = useAtom(bindAtom)

  return (
    <Card variant="outlined">
      <CardActionArea>
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
              如何获取数据？
            </Typography>
            <Chip
              variant="outlined"
              label="提示"
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
            点此了解新版网站的数据获取方式
          </Typography>
        </Stack>
      </CardActionArea>

      <Divider />
      <Stack spacing={1.5} sx={{ p: 2 }}>
        <Stack direction="row" spacing={1.5}>
          <CategoryOutlined
            fontSize="small"
            sx={{ color: fetcher ? green[500] : red[500] }}
          />
          <Typography
            variant="body2"
            fontWeight="fontWeightBold"
            sx={{ color: fetcher ? green[500] : red[500], flex: 1 }}
          >
            {fetcher ? '已连接到插件' : '未发现可用插件'}
          </Typography>
          <Icon
            component={fetcher ? CheckOutlined : CloseOutlined}
            fontSize="small"
            sx={{ color: fetcher ? green[500] : red[500] }}
          />
        </Stack>
        <Stack direction="row" spacing={1.5}>
          <SchoolOutlined
            fontSize="small"
            sx={{ color: bindHEU ? green[500] : red[500] }}
          />
          <Typography
            variant="body2"
            fontWeight="fontWeightBold"
            sx={{ color: bindHEU ? green[500] : red[500], flex: 1 }}
          >
            {bindHEU ? '已添加 HEU 账号' : '未添加 HEU 账号'}
          </Typography>
          <Icon
            component={bindHEU ? CheckOutlined : CloseOutlined}
            fontSize="small"
            sx={{ color: bindHEU ? green[500] : red[500] }}
          />
        </Stack>
      </Stack>
    </Card>
  )
}
