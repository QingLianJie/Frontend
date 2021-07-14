import { Box, Text } from '@chakra-ui/react'

interface NoticeCardProps {
  title: string
  date: string
  content: string
}

const NoticeCard = ({ title, date, content }: NoticeCardProps) => {
  return (
    <Box as="article" borderWidth="1px" rounded="md" py="4" px="6">
      <Text as="h1" fontSize="lg" fontWeight="600" py="1">
        {title}
      </Text>
      <Text as="time" fontSize="sm" color="gray.500">
        {date}
      </Text>
      <Text py="1.5">{content}</Text>
    </Box>
  )
}

export default NoticeCard
