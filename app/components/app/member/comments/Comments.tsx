import { VStack, Text, Center } from '@chakra-ui/react'
import { useThrottleEffect } from 'ahooks'
import { useState } from 'react'
import { useLoaderData } from 'remix'
import { Search } from '~/components/common/actions/Search'
import { Card } from '~/components/common/Card'
import type { MemberLoader } from '~/routes/member/index'
import { IMemberComment } from '~/types'
import { Comment } from './Comment'

export const Comments = () => {
  const { comments } = useLoaderData<MemberLoader>()
  const isNoComments = comments?.length === 0

  const [search, setSearch] = useState('')
  const [filters, setFilters] = useState<IMemberComment[] | null>(comments)
  const isNoResult = filters?.length === 0

  useThrottleEffect(
    () => {
      setFilters(
        comments?.filter(comment =>
          search ? JSON.stringify(comment).includes(search) : true
        ) || []
      )
    },
    [search],
    {
      wait: 500,
    }
  )

  return (
    <VStack w="full" spacing="4" align="flex-start">
      <Search
        placeholder="搜索自己的课程评论"
        value={search}
        onChange={e => setSearch(e.target.value)}
      />
      {isNoComments ? (
        <NoComments />
      ) : isNoResult ? (
        <NoResult />
      ) : (
        (search ? filters : comments)?.map(comment => (
          <Comment key={comment.id} {...comment} />
        ))
      )}
    </VStack>
  )
}

const NoResult = () => (
  <Card title="没有查询到评论">
    <Text px="6" pt="1" pb="5" fontSize="smd" lineHeight="tall">
      这里什么都没有，换个关键词试试吧。
    </Text>
  </Card>
)

const NoComments = () => (
  <Card>
    <Center
      p="6"
      w="full"
      minH="36vh"
      color="gray.500"
      _dark={{ color: 'gray.400' }}
    >
      <Text fontSize="mdl" fontWeight="bold">
        还没有发表过课程评论
      </Text>
    </Center>
  </Card>
)
