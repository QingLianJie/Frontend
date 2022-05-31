import { TabContext, TabList, TabPanel } from '@mui/lab'
import {
  Box,
  Button,
  Dialog,
  DialogContent,
  Tab,
  TextField,
  Typography,
} from '@mui/material'
import { useAtom } from 'jotai'
import { Fragment, useState } from 'react'
import { authAtom } from '../../contexts/models'

type TabType = '登录' | '注册' | '重置密码'

export const Auth = () => {
  const [isOpen, setOpen] = useAtom(authAtom)
  const [currentTab, setCurrentTab] = useState<TabType>('登录')

  return (
    <Dialog
      fullWidth
      maxWidth={false}
      open={isOpen}
      onClose={() => setOpen(false)}
      sx={{ '& .MuiPaper-root': { maxWidth: '20rem' } }}
    >
      <DialogContent>
        <Typography
          component="h1"
          variant="h6"
          sx={{ textAlign: 'center', py: 4 }}
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
              sx={{ mb: '-1px', minHeight: 'unset' }}
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
              sx={{
                px: 0,
                py: 1,
              }}
            >
              {tab.component}
            </TabPanel>
          ))}
        </TabContext>
      </DialogContent>
    </Dialog>
  )
}

const Login = () => {
  return (
    <Fragment>
      <TextField
        required
        id="login-name"
        label="用户名或邮箱"
        size="small"
        margin="dense"
        fullWidth
      />

      <TextField
        required
        id="login-password"
        type="password"
        label="密码"
        size="small"
        margin="dense"
        fullWidth
      />

      <Button
        variant="contained"
        disableElevation
        sx={{ width: '100%', mt: 1 }}
      >
        登录
      </Button>
    </Fragment>
  )
}

const Register = () => {
  return (
    <Fragment>
      <TextField
        required
        id="login-name"
        label="用户名"
        size="small"
        margin="dense"
        helperText="独一无二的名字，3 到 16 个字符"
        fullWidth
      />

      <TextField
        required
        id="login-email"
        label="邮箱"
        size="small"
        type="email"
        margin="dense"
        fullWidth
      />

      <TextField
        required
        id="login-password"
        type="password"
        label="密码"
        size="small"
        margin="dense"
        helperText="8 到 24 个字符，且不能为纯数字"
        fullWidth
      />

      <TextField
        required
        id="login-password-again"
        type="password"
        label="再次输入密码"
        size="small"
        margin="dense"
        fullWidth
      />

      <Button
        variant="contained"
        disableElevation
        sx={{ width: '100%', mt: 1 }}
      >
        注册
      </Button>
    </Fragment>
  )
}

const ResetPassword = () => {
  return (
    <Fragment>
      <TextField
        required
        id="login-name"
        label="注册时使用的邮箱"
        size="small"
        type="email"
        margin="dense"
        helperText="我们将发送一封包含重置密码链接的邮件"
        fullWidth
      />

      <Button
        variant="contained"
        disableElevation
        sx={{ width: '100%', mt: 1 }}
      >
        发送重置密码邮件
      </Button>
    </Fragment>
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
