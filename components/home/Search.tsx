import { SearchOutlined, ArrowForwardOutlined } from '@mui/icons-material'
import { Card, Grid, IconButton, InputBase, Stack } from '@mui/material'
import { useRouter } from 'next/router'
import { FormEvent, useState } from 'react'

export const Search = () => {
  const router = useRouter()
  const [search, setSearch] = useState('')

  const handleSearch = (e: FormEvent) => {
    e.preventDefault()
    router.push(`/courses/?search=${search}`)
  }

  return (
    <Grid item xs={12}>
      <Card variant="outlined" sx={{ width: '100%' }}>
        <Stack
          component="form"
          method="get"
          action="/courses"
          spacing={1}
          direction="row"
          px={1}
          onSubmit={handleSearch}
        >
          <IconButton aria-label="课程列表">
            <SearchOutlined fontSize="small" color="secondary" />
          </IconButton>
          <InputBase
            placeholder="搜索课程数据"
            name="search"
            type="search"
            sx={{ fontSize: '0.925rem', py: 0.75, flex: 1 }}
            onChange={e => setSearch(e.target.value)}
          />
          <IconButton type="submit" aria-label="搜索">
            <ArrowForwardOutlined fontSize="small" color="secondary" />
          </IconButton>
        </Stack>
      </Card>
    </Grid>
  )
}
