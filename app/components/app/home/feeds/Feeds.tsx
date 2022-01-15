import type { SystemProps } from '@chakra-ui/react'
import { VStack } from '@chakra-ui/react'
import { useLoaderData } from 'remix'
import { FeedComment } from './Comment'
import { NoContent } from './NoContent'

interface FeedsProps extends SystemProps {}

export const Feeds = ({ ...props }: FeedsProps) => {
  const { feeds, group } =
    useLoaderData<{ feeds: IFeeds; group: { [key: string]: IFeeds } }>()

  const isNoFeeds = feeds === undefined || feeds.length === 0

  return (
    <VStack align="flex-start" spacing="4" w="full" {...props}>
      {isNoFeeds ? (
        <NoContent />
      ) : (
        Object.entries(group).map(([id, comments]) => (
          <FeedComment comments={comments} key={id} />
        ))
      )}
    </VStack>
  )
}
