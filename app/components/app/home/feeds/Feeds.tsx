import type { SystemProps } from '@chakra-ui/react'
import { VStack } from '@chakra-ui/react'
import { FeedComment } from './Comment'
import { LogMessage } from './LogMessage'
import { NoContent } from './NoContent'

interface HomeFeedsProps extends SystemProps {
  feeds: IFeeds
}

export const HomeFeeds = ({ feeds, ...props }: HomeFeedsProps) => {
  const isNoFeeds = feeds === undefined || feeds.length === 0

  return (
    <VStack align="flex-start" spacing="4" w="full" {...props}>
      {isNoFeeds ? (
        <>
          <NoContent />
          <LogMessage />
        </>
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
