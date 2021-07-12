import {
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  HStack,
} from '@chakra-ui/react'
import { RiDiscussFill } from 'react-icons/ri'
import MemberComment from './Comment'

const MemberTabs = () => {
  return (
    <Tabs isLazy>
      <TabList>
        <Tab>
          <HStack spacing="4">
            <RiDiscussFill style={{ minWidth: '1em' }} />
            <span>课程评论</span>
          </HStack>
        </Tab>
        <Tab>不知道还有啥</Tab>
        <Tab>先放着占位</Tab>
      </TabList>

      <TabPanels>
        <TabPanel>
          <MemberComment />
        </TabPanel>
        <TabPanel></TabPanel>
        <TabPanel></TabPanel>
      </TabPanels>
    </Tabs>
  )
}

export default MemberTabs
