import {
  FilterAltOutlined,
  SearchOutlined,
  SortOutlined,
  VisibilityOutlined,
} from '@mui/icons-material'
import {
  Card,
  Checkbox,
  Divider,
  IconButton,
  InputBase,
  Stack,
  Typography,
} from '@mui/material'
import { useAtom } from 'jotai'
import { scoresAtom } from '../../contexts/scores'
import { Tooltip } from '../base/Tooltip'

export const ScoresFilter = () => {
  const [scores] = useAtom(scoresAtom)

  const handleSearch = (keyword: string) => {}

  return (
    <Card variant="outlined">
      <Stack
        direction="row"
        spacing={1}
        alignItems="center"
        sx={{ pl: { xs: 2.5, sm: 3 }, pr: { xs: 0.5, sm: 1 }, py: 0.25 }}
      >
        <Stack direction="row" alignItems="center" sx={{ flex: 1 }}>
          <Checkbox
            aria-label="选择所有成绩"
            size="small"
            edge="start"
            checked={false}
          />
          <Typography sx={{ pl: 1, display: { xs: 'none', lg: 'flex' } }}>
            已选择 0 个成绩
          </Typography>
        </Stack>

        <Tooltip title="排序" placement="top">
          <IconButton aria-label="排序" sx={{ height: 36 }}>
            <SortOutlined color="secondary" fontSize="small" />
          </IconButton>
        </Tooltip>

        <Tooltip title="筛选" placement="top">
          <IconButton aria-label="筛选" sx={{ height: 36 }}>
            <FilterAltOutlined color="secondary" fontSize="small" />
          </IconButton>
        </Tooltip>

        <Tooltip title="查看" placement="top">
          <IconButton aria-label="查看" sx={{ height: 36 }}>
            <VisibilityOutlined color="secondary" fontSize="small" />
          </IconButton>
        </Tooltip>

        <Stack spacing={1} direction="row" alignItems="center" sx={{ px: 1 }}>
          <Divider orientation="vertical" sx={{ height: '100%' }} />

          <InputBase
            placeholder="搜索成绩"
            name="scores-search"
            type="search"
            sx={{ py: 0.75, flex: 1, maxWidth: 120 }}
            onChange={e => handleSearch(e.target.value)}
          />

          <IconButton aria-label="搜索图标" sx={{ height: 36 }}>
            <SearchOutlined color="secondary" fontSize="small" />
          </IconButton>
        </Stack>
      </Stack>
    </Card>
  )
}
