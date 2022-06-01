import { Card, Box, Stack, Typography } from '@mui/material'

export const Banner = () => {
  return (
    <Card variant="outlined">
      <Stack p={2}>
        <Typography
          variant="h5"
          component="span"
          py={2}
          color="secondary"
          textAlign="center"
        >
          Banner
        </Typography>
      </Stack>
    </Card>
  )
}
