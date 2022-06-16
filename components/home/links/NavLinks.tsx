import {
  AccountCircleOutlined,
  ClassOutlined,
  InsertChartOutlined,
  TableChartOutlined,
  type SvgIconComponent,
} from '@mui/icons-material'
import {
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
import { accountAtom } from '../../../contexts/session'
import { authModalAtom } from '../../../contexts/toggle'

export const NavLinks = () => {
  const [, setOpen] = useAtom(authModalAtom)
  const [account] = useAtom(accountAtom)

  return (
    <Grid container item spacing={2}>
      <NavLink
        name="所有课程"
        description={`${0} 个课程`}
        icon={ClassOutlined}
        color={red[500]}
        isLink
        href="/courses"
      />
      <NavLink
        name="我的成绩"
        description={`未获取`}
        icon={InsertChartOutlined}
        color={green[500]}
        isLink
        href="/scores"
      />
      <NavLink
        name="我的课表"
        description={`未获取`}
        icon={TableChartOutlined}
        color={blue[500]}
        isLink
        href="/schedules"
      />
      <NavLink
        name="账号管理"
        description={account ? `${account.name}` : '未登录'}
        icon={AccountCircleOutlined}
        color={amber[500]}
        onClick={() => setOpen(true)}
      />
    </Grid>
  )
}

interface NavLinkProps {
  name: string
  description: string
  icon: SvgIconComponent
  color: string
  isLink?: boolean
  href?: string
  onClick?: () => void
}

const NavLink = ({
  name,
  description,
  icon,
  color,
  isLink,
  href,
  onClick,
}: NavLinkProps) => {
  const router = useRouter()

  return (
    <Grid item xs={6} sm={6} md={6} lg={6}>
      <Card variant="outlined" sx={{ height: '100%' }}>
        <CardActionArea
          onClick={isLink ? () => router.push(href || '/') : onClick}
          sx={{ height: '100%' }}
        >
          <CardContent sx={{ position: 'relative', py: 1.75 }}>
            <Icon
              component={icon}
              sx={{
                opacity: 1,
                color,
                position: 'absolute',
                right: '14px',
                bottom: '14px',
              }}
            />

            <Typography
              variant="body1"
              component="h2"
              whiteSpace="nowrap"
              sx={{ fontWeight: 'fontWeightBold', pb: 0.25 }}
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
