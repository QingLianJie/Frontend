import { TabList, TabPanel, TabPanels, Tabs } from '@chakra-ui/react'
import {
  RiDiscussFill,
  RiQuestionAnswerFill,
  RiQuestionFill,
} from 'react-icons/ri'
import MemberAnswer from './Answer'
import MemberComment from './Comment'
import MemberQuestion from './Question'
import MemberTab from './Tab'

const MemberTabs = () => {
  return (
    <>
      <Tabs isLazy>
        <TabList>
          <MemberTab icon={RiDiscussFill}>课程评论</MemberTab>
          <MemberTab icon={RiQuestionFill}>提问</MemberTab>
          <MemberTab icon={RiQuestionAnswerFill}>回答</MemberTab>
        </TabList>

        <TabPanels>
          <TabPanel>
            <MemberComment />
          </TabPanel>

          <TabPanel>
            <MemberQuestion />
          </TabPanel>

          <TabPanel>
            <MemberAnswer />
          </TabPanel>
        </TabPanels>
      </Tabs>
    </>
  )
}

export default MemberTabs
