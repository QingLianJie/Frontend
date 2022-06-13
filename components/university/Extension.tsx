import {
  AndroidOutlined,
  CodeOutlined,
  FileDownloadOutlined,
} from '@mui/icons-material'
import {
  Card,
  CardActionArea,
  Divider,
  Icon,
  Stack,
  Typography,
  Chip,
} from '@mui/material'
import { green, amber, pink } from '@mui/material/colors'
import { useAtom } from 'jotai'
import { bindAtom } from '../../contexts/account'
import { bindModalAtom } from '../../contexts/switch'
import { graphPaper, linesInMotion } from '../../utils/patterns'

export const Extension = () => {
  const [, setOpen] = useAtom(bindModalAtom)
  const [bindHEU] = useAtom(bindAtom)

  return (
    <Stack spacing={2}>
      <Card variant="outlined">
        <CardActionArea onClick={() => setOpen(true)}>
          <Stack
            p={2}
            spacing={0.5}
            sx={{
              backgroundPosition: '-1rem -1rem',
              backgroundImage: linesInMotion,
            }}
          >
            <Stack
              direction="row"
              spacing={1}
              alignItems="center"
              justifyContent="space-between"
            >
              <Typography variant="body2" color="text.secondary">
                HEU 账号
              </Typography>
              <Chip
                variant="outlined"
                label={bindHEU ? '已添加' : '未添加'}
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
            <Typography
              variant="body1"
              component="span"
              fontWeight="fontWeightBold"
            >
              {bindHEU ? `当前 HEU 账号：${bindHEU.id}` : '当前未添加 HEU 账号'}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {bindHEU
                ? '点此修改或移除浏览器上的 HEU 账号'
                : '点此添加 HEU 账号，获取学校数据'}
            </Typography>
          </Stack>
        </CardActionArea>
      </Card>

      <Card variant="outlined" sx={{ flex: 1 }}>
        <Stack divider={<Divider />}>
          {extensions.map(extension => (
            <Action extension={extension} key={extension.name} />
          ))}
        </Stack>
      </Card>

      <Card variant="outlined" sx={{ flex: 1 }}>
        <Action extension={join} />
      </Card>
    </Stack>
  )
}

const extensions = [
  {
    name: '用户脚本（油猴脚本）',
    description: '用于学校数据的浏览器脚本',
    href: '',
    icon: FileDownloadOutlined,
    color: amber[500],
  },
  {
    name: 'Android 应用',
    description: '自带用户脚本的套壳浏览器',
    href: '',
    icon: AndroidOutlined,
    color: green[400],
  },
]

const join = {
  name: '想要参与开发？',
  description: '欢迎感兴趣的同学加入我们',
  href: '',
  icon: CodeOutlined,
  color: pink[400],
}

interface ActionProps {
  extension: typeof extensions[number] | typeof join
}

const Action = ({ extension }: ActionProps) => (
  <CardActionArea
    href={extension.href}
    target="_blank"
    rel="noopener noreferrer"
    sx={{
      px: 2,
      py: 1.5,
      position: 'relative',
      overflow: 'hidden',
      backgroundImage: graphPaper,
      backgroundPosition: '-1rem -1rem',
    }}
  >
    <Stack direction="row" spacing={2}>
      <Icon
        component={extension.icon}
        sx={{ color: extension.color, fontSize: 'h5.fontSize' }}
      />
      <Stack spacing={0.5}>
        <Typography
          variant="body1"
          fontWeight="fontWeightBold"
          whiteSpace="nowrap"
          overflow="hidden"
          textOverflow="ellipsis"
        >
          {extension.name}
        </Typography>
        <Typography
          variant="body2"
          color="text.secondary"
          whiteSpace="nowrap"
          overflow="hidden"
          textOverflow="ellipsis"
        >
          {extension.description}
        </Typography>
      </Stack>
    </Stack>
  </CardActionArea>
)
