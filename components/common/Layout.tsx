import { AppBar, Toolbar, Stack, Typography } from '@mui/material'

interface HeaderProps {
  title: string
}

export const Header = ({ title }: HeaderProps) => (
  <AppBar
    position="relative"
    color="transparent"
    elevation={0}
    sx={{ py: { xs: 2, sm: 2, md: 4, lg: 6 } }}
  >
    <Toolbar>
      <Stack
        width="100%"
        direction="row"
        justifyContent="space-between"
        alignItems="center"
      >
        <Typography
          variant="h5"
          component="h1"
          sx={{
            fontWeight: 'fontWeightBold',
            fontSize: { xs: 'h6.fontSize', md: 'h5.fontSize' },
            width: '100%',
            textAlign: { xs: 'center', sm: 'left' },
          }}
        >
          {title}
        </Typography>
      </Stack>
    </Toolbar>
  </AppBar>
)

export const Footer = () => {
  return (
    <Stack
      direction="row"
      alignItems="end"
      justifyContent="space-between"
      sx={{
        px: 3,
        pt: { xs: 2, sm: 3 },
        pb: { xs: 9, sm: 5 },
        flex: 1,
      }}
    >
      <Typography variant="body2" color="textSecondary">
        清廉街 © 2022
      </Typography>
      <Typography
        variant="body2"
        component="a"
        href="https://beian.miit.gov.cn/"
        target="_blank"
        rel="noopener noreferrer"
        color="textSecondary"
        sx={{ textDecoration: 'none' }}
      >
        黑ICP备2021003925号-1
      </Typography>
    </Stack>
  )
}
