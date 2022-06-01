import {
  BookmarkBorderOutlined,
  FavoriteBorderOutlined,
  TagOutlined,
} from '@mui/icons-material'
import { TabContext, TabList as MUITabList, TabPanel } from '@mui/lab'
import { Box, Card, Icon, Tab } from '@mui/material'
import { useState } from 'react'
import { FavoriteLinks, ListLinks } from './FavoriteLinks'
import { OtherLinks } from './OtherLinks'

const tabs = [
  { name: '收藏', icon: FavoriteBorderOutlined, component: FavoriteLinks },
  { name: '列表', icon: BookmarkBorderOutlined, component: ListLinks },
  { name: '清廉街', icon: TagOutlined, component: OtherLinks },
]

type TabType = '收藏' | '列表'

export const TabList = () => {
  const [currentTab, setCurrentTab] = useState<TabType>('收藏')

  return (
    <Card variant="outlined" sx={{ width: '100%', height: '100%' }}>
      <TabContext value={currentTab}>
        <Box sx={{ width: '100%', borderBottom: 1, borderColor: 'divider' }}>
          <MUITabList
            onChange={(e, v) => setCurrentTab(v)}
            aria-label="收藏链接和链接列表的页面"
            sx={{ mb: '-1px', minHeight: 'unset' }}
            centered
          >
            {tabs.map(tab => (
              <Tab
                label={tab.name}
                value={tab.name}
                key={tab.name}
                icon={<Icon component={tab.icon} fontSize="small" />}
                iconPosition="start"
                sx={{ py: 1.5, minHeight: 'unset' }}
              />
            ))}
          </MUITabList>
        </Box>
        {tabs.map(tab => (
          <TabPanel value={tab.name} key={tab.name} sx={{ p: 0 }}>
            <Box component={tab.component} />
          </TabPanel>
        ))}
      </TabContext>
    </Card>
  )
}
