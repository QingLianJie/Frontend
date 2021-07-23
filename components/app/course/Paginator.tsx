import { HStack, useBreakpointValue } from '@chakra-ui/react'
import { Next, PageGroup, Paginator, Previous } from 'chakra-paginator'

interface CoursePaginatorProps {
  pagesQuantity: number
  currentPage: number
  onPageChange: (page: number) => void
}

const CoursePaginator = ({
  pagesQuantity,
  currentPage,
  onPageChange,
}: CoursePaginatorProps) => {
  const outerLimit = useBreakpointValue({ base: 1, sm: 1, md: 1, lg: 2, xl: 3 })
  const innerLimit = useBreakpointValue({ base: -1, sm: 1, md: 1, lg: 2 })

  return (
    <HStack w="full" justify="space-between" spacing="4">
      <Paginator
        pagesQuantity={pagesQuantity}
        currentPage={currentPage}
        onPageChange={onPageChange}
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
