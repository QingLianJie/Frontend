import type { SystemProps } from '@chakra-ui/react'
import { VStack } from '@chakra-ui/react'
import { FeedComment } from './Comment'

interface HomeFeedsProps extends SystemProps {
  feeds: IFeeds
}

export const HomeFeeds = ({ feeds, ...props }: HomeFeedsProps) => (
  <VStack align="flex-start" spacing="4" w="full" {...props}>
    {feeds.map(feed =>
      feed.type === '课程评论' ? (
        <FeedComment comment={feed.data} key={feed.data.id} />
      ) : null
    )}
  </VStack>
)
