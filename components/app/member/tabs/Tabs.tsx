import { TabList, TabPanel, TabPanels, Tabs } from '@chakra-ui/react'
import { RiDiscussFill, RiQuestionAnswerFill } from 'react-icons/ri'
import useUser from '../../../../hooks/useUser'
import MemberComments from './Comments'
import MemberDiscussions from './Discussions'
import MemberTab from './Tab'

interface MemberTabsProps {
  name: string | string[] | undefined
}

const MemberTabs = ({ name }: MemberTabsProps) => {
  const username = name as string
  const { isNotFound } = useUser(username)

  return (
    <>
      {isNotFound ? null : (
        <Tabs isLazy variant="soft-rounded">
          <TabList>
            <MemberTab icon={RiDiscussFill}>课程评论</MemberTab>
            <MemberTab icon={RiQuestionAnswerFill}>唠唠</MemberTab>
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
