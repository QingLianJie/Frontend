import {
  Button,
  Center,
  Grid,
  HStack,
  Text,
  useBreakpointValue,
} from '@chakra-ui/react'
import { Paginated } from '@makotot/paginated'

interface CoursePaginatorProps {
  totalPage: number
  currentPage: number
  onPageChange: (page: number) => void
}

const CoursePaginator = ({
  totalPage,
  currentPage,
  onPageChange,
}: CoursePaginatorProps) => {
  const boundarySize = useBreakpointValue({ base: 1, xl: 2 })
  const siblingsSize = useBreakpointValue({ base: 0, md: 1, xl: 2 })

  return (
    <HStack w="full" justify="space-between" spacing="4">
      <Paginated
        currentPage={currentPage}
        totalPage={totalPage}
        siblingsSize={siblingsSize}
        boundarySize={boundarySize}
      >
        {({
          pages,
          currentPage,
          hasPrev,
          hasNext,
          getFirstBoundary,
          getLastBoundary,
          isPrevTruncated,
          isNextTruncated,
        }) => (
          <Grid
            width="100%"
            justifyContent="center"
            alignItems="center"
            gridTemplateColumns="min-content 1fr min-content"
            gridGap={2}
          >
            <Button
              disabled={!hasPrev()}
              onClick={() => onPageChange(currentPage - 1)}
            >
              上一页
            </Button>

            <Center>
              <HStack>
                {getFirstBoundary().map(boundary => (
                  <Button key={boundary} onClick={() => onPageChange(boundary)}>
                    {boundary}
                  </Button>
                ))}
                {isPrevTruncated && <Text>...</Text>}

                {pages.map(page => {
                  return page === currentPage ? (
                    <Button key={page} colorScheme="red">
                      {page}
                    </Button>
                  ) : (
                    <Button key={page} onClick={() => onPageChange(page)}>
                      {page}
                    </Button>
                  )
                })}

                {isNextTruncated && <Text>...</Text>}
                {getLastBoundary().map(boundary => (
                  <Button key={boundary} onClick={() => onPageChange(boundary)}>
                    {boundary}
                  </Button>
                ))}
              </HStack>
            </Center>

            <Button
              disabled={!hasNext()}
              onClick={() => onPageChange(currentPage + 1)}
            >
              下一页
            </Button>
          </Grid>
        )}
      </Paginated>
    </HStack>
  )
}

export default CoursePaginator
