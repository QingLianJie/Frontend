import {
  AccountCircleRounded,
  ClassRounded,
  InsertChartRounded,
  TableChartRounded,
  type SvgIconComponent,
} from '@mui/icons-material'
import {
  Box,
  Card,
  CardActionArea,
  CardContent,
  Grid,
  Icon,
  Typography,
} from '@mui/material'
import { amber, blue, green, red } from '@mui/material/colors'
import { useAtom } from 'jotai'
import { useRouter } from 'next/router'
import { accountAtom } from '../../contexts/account'
import { authAtom } from '../../contexts/models'

export const Apps = () => {
  const [, setOpen] = useAtom(authAtom)
  const [account] = useAtom(accountAtom)

  return (
    <Grid container item xs={12} spacing={2}>
      <App
        name="所有课程"
        description={`${0} 个课程`}
        icon={ClassRounded}
        color={red[500]}
        isLink
        href="/courses"
      />
      <App
        name="我的成绩"
        description={`未获取`}
        icon={InsertChartRounded}
        color={green[500]}
        isLink
        href="/scores"
      />
      <App
        name="我的课表"
        description={`未获取`}
        icon={TableChartRounded}
        color={blue[500]}
        isLink
        href="/schedules"
      />
      <App
        name="账号管理"
        description={account ? `${account.name}` : '未登录'}
        icon={AccountCircleRounded}
        color={amber[500]}
        onClick={() => setOpen(true)}
      />
    </Grid>
  )
}

interface AppProps {
  name: string
  description: string
  icon: SvgIconComponent
  color: string
  isLink?: boolean
  href?: string
  onClick?: () => void
}

const App = ({
  name,
  description,
  icon,
  color,
  isLink,
  href,
  onClick,
}: AppProps) => {
  const router = useRouter()

  return (
    <Grid item xs={6} sm={3} md={6} lg={3}>
      <Card variant="outlined" sx={{ height: '100%' }}>
        <CardActionArea
          onClick={isLink ? () => router.push(href || '/') : onClick}
          sx={{ height: '100%' }}
        >
          <CardContent sx={{ position: 'relative', py: 1.75 }}>
            <Icon
              component={icon}
              sx={{
                color,
                opacity: 1,
                position: 'absolute',
                right: '-1rem',
                top: '80%',
                fontSize: '3.5rem',
                transform: 'translateY(-50%)',
              }}
            />

            <Typography
              variant="body1"
              component="h2"
              whiteSpace="nowrap"
              sx={{
                fontSize: '0.925rem',
                fontWeight: 'fontWeightBold',
                pb: 0.25,
              }}
            >
              {name}
            </Typography>
            <Typography
              variant="body2"
              color="textSecondary"
              whiteSpace="nowrap"
            >
              {description}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </Grid>
  )
}
