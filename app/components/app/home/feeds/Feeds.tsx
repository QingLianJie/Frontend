import type { SystemProps } from '@chakra-ui/react'
import { VStack } from '@chakra-ui/react'
import { FeedComment } from './Comment'
import { NoContent } from './NoContent'

interface FeedsProps extends SystemProps {
  feeds: IFeeds
}

export const Feeds = ({ feeds, ...props }: FeedsProps) => {
  const isNoFeeds = feeds === undefined || feeds.length === 0

  return (
    <VStack align="flex-start" spacing="4" w="full" {...props}>
      {isNoFeeds ? (
        <NoContent />
      ) : (
        feeds.map(feed =>
          feed.type === '课程评论' ? (
            <FeedComment comment={feed.data} key={feed.data.id} />
          ) : null
        )
      )}
    </VStack>
  )
}
