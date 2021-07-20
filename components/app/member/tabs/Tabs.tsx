import { TabList, TabPanel, TabPanels, Tabs } from '@chakra-ui/react'
import {
  RiDiscussFill,
  RiProfileFill,
  RiQuestionAnswerFill,
} from 'react-icons/ri'
import useProfile from '../../../../hooks/useProfile'
import MemberComments from './Comments'
import MemberDiscussions from './Discussions'
import MemberTab from './Tab'

interface MemberTabsProps {
  name: string | string[] | undefined
}

const MemberTabs = ({ name }: MemberTabsProps) => {
  const username = name as string
  const { isNotFound } = useProfile(username)

  return (
    <>
      {isNotFound ? null : (
        <Tabs isLazy>
          <TabList>
            <MemberTab icon={RiDiscussFill}>课程评论</MemberTab>
            {/* <MemberTab icon={RiQuestionAnswerFill}>唠唠</MemberTab> */}
            <MemberTab icon={RiProfileFill}>个人资料</MemberTab>
          </TabList>

          <TabPanels>
            <TabPanel>
              <MemberComments />
            </TabPanel>

            <TabPanel>
              <MemberDiscussions />
            </TabPanel>
          </TabPanels>
        </Tabs>
      )}
    </>
  )
}

export default MemberTabs
