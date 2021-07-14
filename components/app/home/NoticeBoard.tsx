import { Box, Heading, Text } from '@chakra-ui/react'
import { RiNotificationBadgeLine } from 'react-icons/ri'
import HomeGroup from './Group'

const NoticeBoard = () => {
  return (
    <HomeGroup title={'公告板'} icon={RiNotificationBadgeLine}>
      <Box as="article" borderWidth="1px" rounded="md" py="4" px="6">
        <Text as="h1" fontSize="lg" fontWeight="600" py="1">
          新版网站正在开发中
        </Text>
        <Text as="time" fontSize="sm" color="gray.500">
          2021 年 7 月 14 日
        </Text>
        <Text py="1.5">
          这是一条测试消息。The quick brown fox jumps over the lazy dog.
        </Text>
      </Box>
    </HomeGroup>
  )
}

export default NoticeBoard
