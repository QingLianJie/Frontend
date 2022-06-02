import {
  BookmarkBorderOutlined,
  FavoriteBorderOutlined,
  TagOutlined,
  BookmarkRounded,
  FavoriteRounded,
  TagRounded,
} from '@mui/icons-material'
import { TabContext, TabList as MUITabList, TabPanel } from '@mui/lab'
import { Box, Card, Icon, Stack, Tab } from '@mui/material'
import { useState } from 'react'
import { FavoriteLinks, ListLinks } from './FavoriteLinks'
import { OtherLinks } from './OtherLinks'

const tabs = [
  {
    name: '收藏',
    icon: { base: FavoriteBorderOutlined, active: FavoriteRounded },
    component: FavoriteLinks,
  },
  {
    name: '列表',
    icon: { base: BookmarkBorderOutlined, active: BookmarkRounded },
    component: ListLinks,
  },
  {
    name: '清廉街',
    icon: { base: TagOutlined, active: TagRounded },
    component: OtherLinks,
  },
]

type TabType = '收藏' | '列表' | '清廉街'

export const TabList = () => {
  const [currentTab, setCurrentTab] = useState<TabType>('收藏')

  return (
    <Card variant="outlined" sx={{ width: '100%', height: '100%' }}>
      <TabContext value={currentTab}>
        <Stack direction="row">
          <Box sx={{ borderRight: 1, borderColor: 'divider' }}>
            <MUITabList
              onChange={(e, v) => setCurrentTab(v)}
              aria-label="收藏链接和链接列表的页面"
              sx={{ minHeight: '100%', py: 1 }}
              orientation="vertical"
            >
              {tabs.map(tab => (
                <Tab
                  aria-label={tab.name}
                  value={tab.name}
                  key={tab.name}
                  icon={
                    <Icon
                      component={
                        currentTab === tab.name
                          ? tab.icon.active
                          : tab.icon.base
                      }
                      fontSize="small"
                    />
                  }
                  iconPosition="start"
                  sx={{
                    py: 1.2,
                    minHeight: 'unset',
                    height: '100%',
                    minWidth: 'unset',
                    flex: 1,
                  }}
                />
              ))}
            </MUITabList>
          </Box>

          {tabs.map(tab => (
            <TabPanel
              value={tab.name}
              key={tab.name}
              sx={{ width: '100%', p: 0, overflow: 'hidden' }}
            >
              <Box component={tab.component} />
            </TabPanel>
          ))}
        </Stack>
      </TabContext>
    </Card>
  )
}
