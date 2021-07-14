import { VStack } from '@chakra-ui/react'
import { RiNotificationBadgeLine } from 'react-icons/ri'
import { noticesMock } from '../../../../data/mock/mock-notices'
import HomeGroup from '../Group'
import NoticeCard from './Card'

const Notices = () => {
  return (
    <HomeGroup title={'公告板'} icon={RiNotificationBadgeLine}>
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
    </HomeGroup>
  )
}

export default Notices
