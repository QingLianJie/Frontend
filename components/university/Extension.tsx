import {
  AndroidOutlined,
  ArrowForwardOutlined,
  FileDownloadOutlined,
} from '@mui/icons-material'
import { Card, CardActionArea, Icon, Stack, Typography } from '@mui/material'
import { green, amber } from '@mui/material/colors'
import { graphPaper } from '../../utils/patterns'

export const Extension = () => {
  return (
    <Stack spacing={2}>
      <Stack direction="row" spacing={2}>
        {extensions.map(extension => (
          <Card variant="outlined" sx={{ flex: 1 }}>
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
              <Stack spacing={0.5}>
                <Stack
                  direction="row"
                  spacing={1}
                  justifyContent="space-between"
                >
                  <Typography
                    variant="body1"
                    fontWeight="fontWeightBold"
                    whiteSpace="nowrap"
                    overflow="hidden"
                    textOverflow="ellipsis"
                  >
                    {extension.name}
                  </Typography>
                  <Icon
                    component={extension.icon}
                    sx={{ color: extension.color }}
                  />
                </Stack>
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
            </CardActionArea>
          </Card>
        ))}
      </Stack>
      <Card variant="outlined">
        <CardActionArea href="" target="_blank" rel="noopener noreferrer">
          <Stack
            direction="row"
            alignItems="end"
            spacing={2}
            sx={{
              p: 2,
              backgroundImage: graphPaper,
              backgroundPosition: '-1rem -1rem',
            }}
          >
            <Stack spacing={0.5}>
              <Typography variant="body1" fontWeight="fontWeightBold">
                想要参与开发？
              </Typography>
              <Typography variant="body2" color="text.secondary">
                欢迎感兴趣的同学加入我们，一起参与 Android、Windows
                等其他客户端的开发
              </Typography>
            </Stack>
            <ArrowForwardOutlined color="secondary" fontSize="small" />
          </Stack>
        </CardActionArea>
      </Card>
    </Stack>
  )
}

const extensions = [
  {
    name: '用户脚本',
    description: '一个油猴脚本',
    href: '',
    icon: FileDownloadOutlined,
    color: amber[500],
  },
  {
    name: 'Android',
    description: '自带插件 App',
    href: '',
    icon: AndroidOutlined,
    color: green[400],
  },
]
