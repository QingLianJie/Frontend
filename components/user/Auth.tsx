import { TabContext, TabList, TabPanel } from '@mui/lab'
import { Box, Dialog, DialogContent, Tab, Typography } from '@mui/material'
import { useAtom } from 'jotai'
import { useEffect, useState } from 'react'
import { authModalAtom } from '../../contexts/boolean'
import { Login } from './actions/Login'
import { Register } from './actions/Register'
import { ResetPassword } from './actions/ResetPassword'

type TabType = '登录' | '注册' | '重置密码'

export const Auth = () => {
  const [isOpen, setOpen] = useAtom(authModalAtom)
  const [currentTab, setCurrentTab] = useState<TabType>('登录')

  return (
    <Dialog
      fullWidth
      maxWidth={false}
      open={isOpen}
      onClose={() => setOpen(false)}
      sx={{
        '& .MuiPaper-root': { maxWidth: '20rem' },
        '& .MuiDialogContent-root': { p: 0 },
      }}
    >
      <DialogContent>
        <Typography
          component="h1"
          variant="h6"
          sx={{ textAlign: 'center', pt: 6, pb: 4 }}
        >
          欢迎来到{' '}
          <Typography
            component="strong"
            variant="h6"
            sx={{ fontWeight: 'fontWeightBold' }}
          >
            清廉街
          </Typography>
        </Typography>
        <TabContext value={currentTab}>
          <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
            <TabList
              onChange={(e, v) => setCurrentTab(v)}
              aria-label="登录、注册和重置密码的页面"
              centered
              sx={{ mb: '-1px', minHeight: 'unset', px: 3 }}
            >
              {tabs.map(tab => (
                <Tab
                  label={tab.name}
                  value={tab.name}
                  color={tab.color}
                  key={tab.name}
                  sx={{
                    ml: tab.name === '重置密码' ? 'auto' : 0,
                    minWidth: 'unset',
                    minHeight: 'unset',
                  }}
                />
              ))}
            </TabList>
          </Box>

          {tabs.map(tab => (
            <TabPanel
              value={tab.name}
              color={tab.color}
              key={tab.name}
              sx={{ px: 3, pt: 2, pb: 3 }}
            >
              {tab.component}
            </TabPanel>
          ))}
        </TabContext>
      </DialogContent>
    </Dialog>
  )
}

const tabs = [
  {
    name: '登录',
    component: <Login />,
    color: 'primary',
  },
  {
    name: '注册',
    component: <Register />,
    color: 'info',
  },
  {
    name: '重置密码',
    component: <ResetPassword />,
    color: 'warning',
  },
]
