import { VStack } from '@chakra-ui/react'
import { FeedComment } from './Comment'

interface HomeFeedsProps {
  feeds: IFeeds
}

export const HomeFeeds = ({ feeds }: HomeFeedsProps) => (
  <VStack align="flex-start" spacing="4" w="full">
    {feeds.map(feed =>
      feed.type === '课程评论' ? (
        <FeedComment comment={feed.data} key={feed.data.id} />
      ) : null
    )}
  </VStack>
)
