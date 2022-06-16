import {
  AddOutlined,
  ExpandLess,
  ExpandMore,
  FolderOutlined,
  PublicOutlined,
  StarOutlineRounded,
  StarRounded,
  SvgIconComponent,
  VpnLockOutlined,
} from '@mui/icons-material'
import {
  Collapse,
  Icon,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  ListSubheader,
  Skeleton,
} from '@mui/material'
import { amber } from '@mui/material/colors'
import { useAtom } from 'jotai'
import { Fragment } from 'react'
import { TransitionGroup } from 'react-transition-group'
import { linksAtom } from '../../../contexts/links'
import { pageLoadedAtom } from '../../../contexts/toggle'
import { Tooltip } from '../../base/Tooltip'

type LinkType = {
  name: string
  href: string
  icon?: SvgIconComponent
  isFavorite?: boolean
  isLimited?: boolean
}

interface ListProps {
  hasHeader?: boolean
}

export const FavoriteLinks = ({ hasHeader }: ListProps) => {
  const [load] = useAtom(pageLoadedAtom)
  const [links] = useAtom(linksAtom)
  const favorites = links
    .map(group => group.children.filter(link => link.isFavorite))
    .flat()

  return (
    <List
      subheader={
        hasHeader && <ListSubheader component="div">收藏</ListSubheader>
      }
      dense
      sx={{ width: '100%' }}
    >
      <TransitionGroup>
        {favorites.map(favorite => (
          <Collapse key={favorite.name}>
            {load ? (
              <LinkItem link={favorite} hasStar />
            ) : (
              <PlaceholderItem key={favorite.name} />
            )}
          </Collapse>
        ))}
      </TransitionGroup>
    </List>
  )
}

export const ListLinks = ({ hasHeader }: ListProps) => {
  const [links, setLinks] = useAtom(linksAtom)
  const handleOpen = (name: string) =>
    setLinks(
      links.map(group => {
        if (group.name === name) return { ...group, isOpen: !group.isOpen }
        return group
      })
    )

  return (
    <List
      subheader={
        hasHeader && <ListSubheader component="div">列表</ListSubheader>
      }
      dense
      sx={{ width: '100%' }}
    >
      {links.map(group => (
        <Fragment key={group.name}>
          <ListItemButton onClick={() => handleOpen(group.name)}>
            <ListItemIcon sx={{ minWidth: 32 }}>
              <FolderOutlined color="secondary" fontSize="small" />
            </ListItemIcon>
            <ListItemText
              primary={group.name}
              sx={{ '& span': { fontSize: 'body1.fontSize' } }}
            />
            {group.isOpen ? (
              <ExpandLess color="secondary" fontSize="small" />
            ) : (
              <ExpandMore color="secondary" fontSize="small" />
            )}
          </ListItemButton>
          <Collapse in={group.isOpen}>
            {group.children.map(link => (
              <LinkItem key={link.name} link={link} hasStar />
            ))}
          </Collapse>
        </Fragment>
      ))}
      <ListItem disablePadding>
        <ListItemButton
          component="a"
          href="https://wj.qq.com/s2/10326005/669b/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <ListItemIcon sx={{ minWidth: 32 }}>
            <AddOutlined color="secondary" fontSize="small" />
          </ListItemIcon>
          <ListItemText
            primary="想要添加其他链接？"
            sx={{ '& span': { fontSize: 'body1.fontSize' } }}
          />
        </ListItemButton>
      </ListItem>
    </List>
  )
}

interface LinkItemProps {
  link: LinkType
  hasStar?: boolean
}

export const LinkItem = ({ link, hasStar }: LinkItemProps) => {
  const [links, setLinks] = useAtom(linksAtom)

  const handleStar = () =>
    setLinks(
      links.map(group => {
        const children = group.children.map(item => {
          if (item.name === link.name)
            return { ...item, isFavorite: !item.isFavorite }
          return item
        })
        return { ...group, children }
      })
    )

  return (
    <ListItem
      disablePadding
      secondaryAction={
        hasStar && (
          <Tooltip
            title={link.isFavorite ? '取消收藏' : '收藏'}
            placement="top"
          >
            <IconButton
              aria-label="收藏链接"
              edge="end"
              onClick={handleStar}
              sx={{ right: '2.5px' }}
            >
              <Icon
                component={link.isFavorite ? StarRounded : StarOutlineRounded}
                sx={{ color: amber[500] }}
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
          {link.icon ? (
            <Icon component={link.icon} color="secondary" fontSize="small" />
          ) : link.isLimited ? (
            <Tooltip title="需要校园网" placement="top">
              <VpnLockOutlined color="secondary" fontSize="small" />
            </Tooltip>
          ) : (
            <Tooltip title="可校外访问" placement="top">
              <PublicOutlined color="secondary" fontSize="small" />
            </Tooltip>
          )}
        </ListItemIcon>
        <ListItemText
          primary={link.name}
          sx={{
            '& span': {
              fontSize: 'body1.fontSize',
              overflow: 'hidden',
              textOverflow: 'ellipsis',
              whiteSpace: 'nowrap',
            },
          }}
        />
      </ListItemButton>
    </ListItem>
  )
}

const PlaceholderItem = () => (
  <ListItem
    disablePadding
    secondaryAction={
      <IconButton edge="end" sx={{ right: '2.5px' }}>
        <StarRounded sx={{ color: amber[500] }} />
      </IconButton>
    }
  >
    <ListItemButton>
      <ListItemIcon sx={{ minWidth: 32 }}>
        <PublicOutlined color="secondary" fontSize="small" />
      </ListItemIcon>
      <Skeleton>
        <ListItemText
          primary="数据加载中"
          sx={{ '& span': { fontSize: 'body1.fontSize' } }}
        />
      </Skeleton>
    </ListItemButton>
  </ListItem>
)
