import { CircularProgress } from '@mui/material'

interface LoadingProps {
  color?: string
}

export const Loading = ({ color }: LoadingProps) => (
  <CircularProgress
    aria-label="页面加载中"
    sx={{
      position: 'absolute',
      left: '50%',
      top: '48%',
      transform: 'translate(-50%, -50%)',
      pointerEvents: 'none',
      color,
    }}
  />
)
