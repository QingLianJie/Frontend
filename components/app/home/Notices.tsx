import {
  Alert,
  AlertIcon,
  Box,
  Center,
  Fade,
  Spinner,
  Text,
} from '@chakra-ui/react'
import 'github-markdown-css/github-markdown.css'
import { RiNotificationBadgeLine } from 'react-icons/ri'
import useArticle from '../../../hooks/useArticle'
import { dateFormatter } from '../../../utils/formatter'
import CardContainer from '../../common/container/Card'
import GroupContainer from '../../common/container/Group'
import ListContainer from '../../common/container/List'

const Notices = () => {
  const { articles, isLoading, isError } = useArticle()

  return (
    <GroupContainer title={'公告板'} icon={RiNotificationBadgeLine}>
      {isError ? (
        <Alert status="error" rounded="md">
          <AlertIcon />
          获取数据失败，请稍后再试
        </Alert>
      ) : isLoading ? (
        <Center w="full" h="50vh">
          <Spinner thickness="4px" color="pink.400" size="xl" />
        </Center>
      ) : (
        <Fade in>
          <ListContainer>
            {articles.map((article, index) => (
              <NoticeCard
                key={index}
                title={article.title}
                date={dateFormatter({ date: article.created })}
                content={article.body}
              />
            ))}
          </ListContainer>
        </Fade>
      )}
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
      <Box py="1">
        <article
          className="markdown-body"
          dangerouslySetInnerHTML={{ __html: content }}
          style={{ fontFamily: 'inherit' }}
        />
      </Box>
    </CardContainer>
  )
}
