import {
  HStack,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  Text,
} from '@chakra-ui/react'
import {
  RiDiscussFill,
  RiQuestionAnswerFill,
  RiQuestionFill,
} from 'react-icons/ri'
import MemberAnswer from './Answer'
import MemberComment from './Comment'
import MemberQuestion from './Question'

const MemberTabs = () => {
  return (
    <>
      <Tabs isLazy size="lg">
        <TabList>
          <Tab>
            <HStack spacing="4">
              <RiDiscussFill style={{ minWidth: '1em' }} />
              <Text fontWeight="bold">课程评论</Text>
            </HStack>
          </Tab>

          <Tab>
            <HStack spacing="4">
              <RiQuestionFill style={{ minWidth: '1em' }} />
              <Text fontWeight="bold">提问</Text>
            </HStack>
          </Tab>

          <Tab>
            <HStack spacing="4">
              <RiQuestionAnswerFill style={{ minWidth: '1em' }} />
              <Text fontWeight="bold">回答</Text>
            </HStack>
          </Tab>
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
