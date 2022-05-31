import {
  AddOutlined,
  BookmarkBorderOutlined,
  ExpandLess,
  ExpandMore,
  FavoriteBorderOutlined,
  FolderOutlined,
  PublicOutlined,
  StarOutlineRounded,
  StarRounded,
  VpnLockOutlined,
} from '@mui/icons-material'
import { TabContext, TabList, TabPanel } from '@mui/lab'
import {
  Box,
  Card,
  Collapse,
  Grid,
  Icon,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  ListSubheader,
  Tab,
  useMediaQuery,
  useTheme,
} from '@mui/material'
import { amber } from '@mui/material/colors'
import { useAtom } from 'jotai'
import { Fragment, useState } from 'react'
import { TransitionGroup } from 'react-transition-group'
import { linksAtom } from '../../contexts/links'
import { Tooltip } from '../base/Tooltip'

type LinkType = {
  name: string
  href: string
  isFavorite: boolean
  isLimited?: boolean
}

type TabType = '收藏' | '列表'

export const Links = () => {
  const [currentTab, setCurrentTab] = useState<TabType>('收藏')
  const theme = useTheme()
  const isXs = useMediaQuery(theme.breakpoints.down('sm'))
  const isLg = useMediaQuery(theme.breakpoints.between('md', 'lg'))
  const isTab = isXs || isLg

  return (
    <Fragment>
      {isTab ? (
        <Grid item xs={12}>
          <Card variant="outlined" sx={{ width: '100%', height: '100%' }}>
            <TabContext value={currentTab}>
              <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                <TabList
                  onChange={(e, v) => setCurrentTab(v)}
                  aria-label="收藏链接和链接列表的页面"
                  sx={{ mb: '-1px', minHeight: 'unset' }}
                >
                  <Tab
                    label="收藏"
                    value="收藏"
                    icon={<FavoriteBorderOutlined fontSize="small" />}
                    iconPosition="start"
                    sx={{ py: 1.5, minHeight: 'unset' }}
                  />
                  <Tab
                    label="链接列表"
                    value="列表"
                    icon={<BookmarkBorderOutlined fontSize="small" />}
                    iconPosition="start"
                    sx={{ py: 1.5, minHeight: 'unset' }}
                  />
                </TabList>
              </Box>

              <TabPanel value="收藏" sx={{ p: 0 }}>
                <FavoriteLink />
              </TabPanel>
              <TabPanel value="列表" sx={{ p: 0 }}>
                <LinkList />
              </TabPanel>
            </TabContext>
          </Card>
        </Grid>
      ) : (
        <Fragment>
          {[<FavoriteLink hasHeader />, <LinkList hasHeader />].map(
            (component, index) => (
              <Grid item xs={12} sm={6} md={12} lg={6} key={index}>
                <Card variant="outlined" sx={{ width: '100%', height: '100%' }}>
                  {component}
                </Card>
              </Grid>
            )
          )}
        </Fragment>
      )}
    </Fragment>
  )
}

interface LinkListProps {
  hasHeader?: boolean
}

const FavoriteLink = ({ hasHeader }: LinkListProps) => {
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
        {favorites.map(shortcut => (
          <Collapse key={shortcut.name}>
            <LinkItem link={shortcut} />
          </Collapse>
        ))}
      </TransitionGroup>
    </List>
  )
}

const LinkList = ({ hasHeader }: LinkListProps) => {
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
          <ListItemButton
            onClick={() => handleOpen(group.name)}
            sx={{ py: { xs: 0.75, sm: 0.5 } }}
          >
            <ListItemIcon sx={{ minWidth: 32 }}>
              <FolderOutlined color="secondary" fontSize="small" />
            </ListItemIcon>
            <ListItemText
              primary={group.name}
              sx={{ '& span': { fontSize: '0.925rem' } }}
            />
            {group.isOpen ? (
              <ExpandLess color="secondary" fontSize="small" />
            ) : (
              <ExpandMore color="secondary" fontSize="small" />
            )}
          </ListItemButton>
          <Collapse in={group.isOpen}>
            {group.children.map(link => (
              <LinkItem key={link.name} link={link} />
            ))}
          </Collapse>
        </Fragment>
      ))}

      <ListItem disablePadding>
        <ListItemButton
          component="a"
          href=""
          target="_blank"
          rel="noopener noreferrer"
          sx={{ py: { xs: 0.75, sm: 0.5 } }}
        >
          <ListItemIcon sx={{ minWidth: 32 }}>
            <AddOutlined color="secondary" fontSize="small" />
          </ListItemIcon>
          <ListItemText
            primary="想要添加其他链接？"
            sx={{ '& span': { fontSize: '0.925rem' } }}
          />
        </ListItemButton>
      </ListItem>
    </List>
  )
}

interface LinkItemProps {
  link: LinkType
}

const LinkItem = ({ link }: LinkItemProps) => {
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
      }
    >
      <ListItemButton
        component="a"
        href={link.href}
        target="_blank"
        rel="noopener noreferrer"
        sx={{ py: { xs: 0.75, sm: 0.5 } }}
      >
        <ListItemIcon sx={{ minWidth: 32 }}>
          {link.isLimited ? (
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
              fontSize: '0.925rem',
              overflow: 'hidden',
              whiteSpace: 'nowrap',
              textOverflow: 'ellipsis',
            },
          }}
        />
      </ListItemButton>
    </ListItem>
  )
}
