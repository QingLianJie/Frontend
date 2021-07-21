import { Text, VStack } from '@chakra-ui/react'
import { RiNotificationBadgeLine } from 'react-icons/ri'
import { noticesMock } from '../../../data/mock/mock-notices'
import CardContainer from '../../common/container/Card'
import GroupContainer from '../../common/container/Group'

const Notices = () => {
  return (
    <GroupContainer title={'公告板'} icon={RiNotificationBadgeLine}>
      <VStack spacing="4">
        {noticesMock.map((notice, index) => (
          <NoticeCard
            key={index}
            title={notice.title}
            date={notice.date}
            content={notice.content}
          />
        ))}
      </VStack>
    </GroupContainer>
  )
}

export default Notices

interface NoticeCardProps {
  title: string
  date: string
  content: string
}

const NoticeCard = ({ title, date, content }: NoticeCardProps) => {
  return (
    <CardContainer>
      <Text as="h1" d="flex" fontSize="lg" fontWeight="600" py="1">
        {title}
      </Text>
      <Text as="time" d="flex" fontSize="sm" color="gray.500" py="1">
        {date}
      </Text>
      <Text py="1">{content}</Text>
    </CardContainer>
  )
}
