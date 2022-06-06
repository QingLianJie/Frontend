import {
  CalendarMonthOutlined,
  NumbersOutlined,
  EmailOutlined,
  FeedbackOutlined,
  LiquorOutlined,
  InterestsOutlined,
  LocalCafeOutlined,
  PeopleAltOutlined,
  type SvgIconComponent,
} from '@mui/icons-material'
import {
  Icon,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  ListSubheader,
} from '@mui/material'
import { Tooltip } from '../../base/Tooltip'

type LinkType = {
  name: string
  href: string
  icon: SvgIconComponent
  action?: {
    name: string
    icon: SvgIconComponent
    onClick: () => void
  }
}

interface ListProps {
  hasHeader?: boolean
}

export const OtherLinks = ({ hasHeader }: ListProps) => (
  <List
    subheader={
      hasHeader && <ListSubheader component="div">清廉街</ListSubheader>
    }
    dense
    sx={{ width: '100%' }}
  >
    {links.map(link => (
      <LinkItem link={link} key={link.name} />
    ))}
  </List>
)

const links = [
  {
    name: '问题反馈',
    href: 'https://wj.qq.com/s2/9542270/79ad/',
    icon: FeedbackOutlined,
    action: {
      name: '发送邮件',
      icon: EmailOutlined,
      onClick: () => window.open('mailto:bakedviolin@foxmail.com'),
    },
  },
  {
    name: 'QQ 群',
    href: 'https://jq.qq.com/?_wv=1027&k=Fj4xfeQE',
    icon: PeopleAltOutlined,
    action: {
      name: '复制群号',
      icon: NumbersOutlined,
      onClick: () => navigator?.clipboard.writeText('498047164'),
    },
  },
  {
    name: '开发版网站',
    href: 'https://qing-dev.dist.run/',
    icon: InterestsOutlined,
    action: {
      name: '更新记录',
      icon: CalendarMonthOutlined,
      onClick: () =>
        window.open(
          'https://github.com/QingLianJie/Frontend/commits/main',
          '_blank'
        ),
    },
  },
  {
    name: 'GitHub',
    href: 'https://github.com/QingLianJie/',
    icon: LocalCafeOutlined,
    action: {
      name: '提问或讨论',
      icon: LiquorOutlined,
      onClick: () =>
        window.open(
          'https://github.com/QingLianJie/Frontend/discussions',
          '_blank'
        ),
    },
  },
]

interface LinkItemProps {
  link: LinkType
}

export const LinkItem = ({ link }: LinkItemProps) => (
  <ListItem
    disablePadding
    secondaryAction={
      link.action && (
        <Tooltip title={link.action.name} placement="top">
          <IconButton
            aria-label={link.action.name}
            edge="end"
            onClick={link.action.onClick}
            sx={{ right: '2.5px' }}
          >
            <Icon
              component={link.action.icon}
              color="secondary"
              fontSize="small"
            />
          </IconButton>
        </Tooltip>
      )
    }
  >
    <ListItemButton
      component="a"
      href={link.href}
      target="_blank"
      rel="noopener noreferrer"
    >
      <ListItemIcon sx={{ minWidth: 32 }}>
        <Icon component={link.icon} color="secondary" fontSize="small" />
      </ListItemIcon>
      <ListItemText
        primary={link.name}
        sx={{
          '& span': {
            fontSize: 'body1.fontSize',
            overflow: 'hidden',
            whiteSpace: 'nowrap',
          },
        }}
      />
    </ListItemButton>
  </ListItem>
)
