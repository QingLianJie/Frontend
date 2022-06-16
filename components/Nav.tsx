import {
  AccountCircleOutlined,
  AccountCircleRounded,
  ClassOutlined,
  ClassRounded,
  InboxOutlined,
  InboxRounded,
  InsertChartOutlined,
  InsertChartRounded,
  LogoutOutlined,
  TableChartOutlined,
  TableChartRounded,
  type SvgIconComponent,
} from '@mui/icons-material'
import {
  BottomNavigation,
  BottomNavigationAction,
  Box,
  Grid,
  Icon,
  IconButton,
  Stack,
  useMediaQuery,
  useTheme,
} from '@mui/material'
import { amber, blue, green, pink, red } from '@mui/material/colors'
import { useAtom } from 'jotai'
import Image from 'next/image'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import logo from '../assets/logo-outline.svg'
import { accountAtom } from '../contexts/session'
import { authModalAtom } from '../contexts/toggle'
import { Link } from './base/Link'
import { Tooltip } from './base/Tooltip'

export type PageType = '主页' | '课程' | '成绩' | '课表'
export type Page = {
  name: PageType
  href: string
  icon: { base: SvgIconComponent; active: SvgIconComponent }
  color: string
}
export type Pages = Page[]

export const Nav = () => {
  const theme = useTheme()
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'))
  const router = useRouter()
  const [currentPage, setCurrentPage] = useState<PageType>('主页')

  const handlePage = (page: PageType) => {
    setCurrentPage(page)
    const href = pages.find(p => p.name === page)?.href || '/'
    router.push(href)
  }

  useEffect(() => {
    const href = router.pathname
    if (href === '/') {
      setCurrentPage('主页')
      return
    }
    const page =
      pages.filter(p => p.href !== '/').find(p => href.startsWith(p.href))
        ?.name || '主页'
    setCurrentPage(page)
  }, [router.pathname])

  return isMobile ? (
    <BottomBar
      currentPage={currentPage}
      pages={pages}
      onPageChange={handlePage}
    />
  ) : (
    <SideBar
      currentPage={currentPage}
      pages={pages}
      onPageChange={handlePage}
    />
  )
}

const pages = [
  {
    name: '主页',
    href: '/',
    icon: { base: InboxOutlined, active: InboxRounded },
    color: pink[500],
  },
  {
    name: '课程',
    href: '/courses',
    icon: { base: ClassOutlined, active: ClassRounded },
    color: red[500],
  },
  {
    name: '成绩',
    href: '/scores',
    icon: { base: InsertChartOutlined, active: InsertChartRounded },
    color: green[500],
  },
  {
    name: '课表',
    href: '/schedules',
    icon: { base: TableChartOutlined, active: TableChartRounded },
    color: blue[500],
  },
] as Pages

interface BottomBarProps {
  currentPage: PageType
  pages: Pages
  onPageChange: (page: PageType) => void
}

const BottomBar = ({ currentPage, pages, onPageChange }: BottomBarProps) => (
  <Box
    sx={{
      position: 'fixed',
      left: 0,
      bottom: 0,
      right: 0,
      zIndex: 1000,
      borderTop: 1,
      borderColor: 'divider',
    }}
  >
    <BottomNavigation value={currentPage} onChange={(_, v) => onPageChange(v)}>
      {pages.map(page => (
        <BottomNavigationAction
          icon={
            <Icon
              component={
                currentPage === page.name ? page.icon.active : page.icon.base
              }
              sx={{
                color: currentPage === page.name ? page.color : 'secondary',
              }}
            />
          }
          value={page.name}
          key={page.name}
          title={page.name}
        />
      ))}
    </BottomNavigation>
  </Box>
)

interface SideBarProps {
  currentPage: PageType
  pages: Pages
  onPageChange: (page: PageType) => void
}

const SideBar = ({ currentPage, pages, onPageChange }: SideBarProps) => {
  const [account] = useAtom(accountAtom)
  const [isOpen, setOpen] = useAtom(authModalAtom)

  return (
    <Box
      sx={{
        position: 'fixed',
        top: 0,
        bottom: 0,
        left: 0,
        zIndex: 1000,
        borderRight: 1,
        borderColor: 'divider',
      }}
    >
      <Grid
        container
        direction="column"
        justifyContent="space-between"
        alignItems="center"
        spacing={3}
        px={2}
        py={4}
        sx={{ height: '100%' }}
      >
        <Grid item>
          <Tooltip title="清廉街" placement="right">
            <Link href="/" underline="none" sx={{ display: 'flex' }}>
              <Image src={logo} alt="清廉街 Logo" width="32" height="32" />
            </Link>
          </Tooltip>
        </Grid>
        <Grid item>
          <Stack spacing={2} height="100%" justifyContent="center">
            {pages.map(page => (
              <NavButton
                key={page.name}
                currentPage={currentPage}
                page={page}
                onPageChange={onPageChange}
              />
            ))}
          </Stack>
        </Grid>
        <Grid item>
          {account ? (
            <Tooltip title="退出登录" placement="right">
              <IconButton aria-label="退出登录" size="large" color="secondary">
                <LogoutOutlined />
              </IconButton>
            </Tooltip>
          ) : (
            <Tooltip title="登录到清廉街" placement="right">
              <IconButton
                aria-label="登录到清廉街"
                size="large"
                color="secondary"
                onClick={() => setOpen(true)}
                sx={{
                  color: isOpen ? amber[500] : 'secondary',
                  transition: 'color 0.2s',
                }}
              >
                {isOpen ? <AccountCircleRounded /> : <AccountCircleOutlined />}
              </IconButton>
            </Tooltip>
          )}
        </Grid>
      </Grid>
    </Box>
  )
}

interface NavButtonProps {
  currentPage: PageType
  page: Page
  onPageChange: (page: PageType) => void
}

const NavButton = ({ currentPage, page, onPageChange }: NavButtonProps) => {
  const isActive = currentPage === page.name

  return (
    <Tooltip title={page.name} placement="right" key={page.name}>
      <IconButton
        aria-label={page.name}
        size="large"
        color="secondary"
        sx={{ color: isActive ? page.color : 'secondary' }}
        onClick={() => onPageChange(page.name)}
      >
        <Icon component={isActive ? page.icon.active : page.icon.base} />
      </IconButton>
    </Tooltip>
  )
}
