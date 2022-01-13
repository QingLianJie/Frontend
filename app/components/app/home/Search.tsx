import type { SystemProps } from '@chakra-ui/react'
import { Flex } from '@chakra-ui/react'
import { Search as SearchInput } from '~/components/common/forms/Search'

interface SearchProps extends SystemProps {}

export const Search = (props: SearchProps) => {
  return (
    <Flex w="full" {...props}>
      <SearchInput placeholder="搜索课程" />
    </Flex>
  )
}
