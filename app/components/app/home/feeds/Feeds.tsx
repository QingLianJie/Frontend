import type { SystemProps } from '@chakra-ui/react'
import { VStack, Text } from '@chakra-ui/react'
import { useLoaderData } from 'remix'
import { Card } from '~/components/common/containers/Card'
import { FeedComment } from './Comment'
import { NoContent } from './NoContent'

interface FeedsProps extends SystemProps {}

export const Feeds = ({ ...props }: FeedsProps) => {
  const { feeds, group } =
    useLoaderData<{ feeds: IFeeds; group: { [key: string]: IFeeds } }>()
  const entires = Object.entries(group)
  const isNoFeeds = feeds === undefined || feeds.length === 0

  return (
    <VStack align="flex-start" spacing="4" w="full" {...props}>
      {isNoFeeds ? (
        <NoContent />
      ) : (
        entires.map(([id, comments]) => (
          <FeedComment comments={comments} key={id} />
        ))
      )}
    </VStack>
  )
}
