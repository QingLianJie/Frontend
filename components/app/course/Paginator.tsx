import { HStack } from '@chakra-ui/react'
import { Next, PageGroup, Paginator, Previous } from 'chakra-paginator'
import { Dispatch, SetStateAction } from 'react'

interface CoursePaginatorProps {
  pagesQuantity: number
  currentPage: number
  setCurrentPage: Dispatch<SetStateAction<number>>
  outerLimit: number | undefined
  innerLimit: number | undefined
}

const CoursePaginator = ({
  pagesQuantity,
  currentPage,
  setCurrentPage,
  outerLimit,
  innerLimit,
}: CoursePaginatorProps) => {
  return (
    <HStack w="full" justify="space-between" spacing="4">
      <Paginator
        pagesQuantity={pagesQuantity}
        currentPage={currentPage}
        onPageChange={setCurrentPage}
        outerLimit={outerLimit}
        innerLimit={innerLimit}
        activeStyles={{
          minW: '8',
          colorScheme: 'red',
          px: '3',
        }}
        normalStyles={{
          minW: '8',
          px: '3',
          _dark: { bg: 'gray.700' },
        }}
      >
        <Previous _dark={{ bg: 'gray.700' }}>上一页</Previous>
        <PageGroup isInline spacing="2" />
        <Next _dark={{ bg: 'gray.700' }}>下一页</Next>
      </Paginator>
    </HStack>
  )
}

export default CoursePaginator
