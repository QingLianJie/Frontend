import {
  styled,
  tooltipClasses,
  TooltipProps,
  Tooltip as MuiTooltip,
} from '@mui/material'

export const Tooltip = styled(({ className, ...props }: TooltipProps) => (
  <MuiTooltip {...props} arrow classes={{ popper: className }} />
))(({ theme }) => ({
  [`& .${tooltipClasses.arrow}`]: {
    display: 'none',
  },
  [`& .${tooltipClasses.tooltip}`]: {
    backgroundColor: theme.palette.common.black,
    fontSize: theme.typography.fontSize,
    padding: '0.375rem 0.75rem',
  },
}))
