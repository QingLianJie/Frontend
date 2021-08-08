import { Button, Center, Grid, HStack, Text } from '@chakra-ui/react'
import { Paginated } from '@makotot/paginated'

interface TimetablePaginatorProps {
  totalPage: number
  currentPage: number
  onPageChange: (page: number) => void
}

const TimetablePaginator = ({
  totalPage,
  currentPage,
  onPageChange,
}: TimetablePaginatorProps) => {
  return (
    <HStack w="full" justify="space-between" spacing="4">
      <Paginated
        currentPage={currentPage}
        totalPage={totalPage}
        siblingsSize={3}
        boundarySize={3}
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
              size="sm"
            >
              上周
            </Button>

            <Center>
              <HStack>
                {getFirstBoundary().map(boundary => (
                  <Button
                    key={boundary}
                    onClick={() => onPageChange(boundary)}
                    size="sm"
                  >
                    {boundary}
                  </Button>
                ))}
                {isPrevTruncated && <Text>...</Text>}

                {pages.map(page => {
                  return page === currentPage ? (
                    <Button key={page} colorScheme="blue" size="sm">
                      {page}
                    </Button>
                  ) : (
                    <Button
                      key={page}
                      onClick={() => onPageChange(page)}
                      size="sm"
                    >
                      {page}
                    </Button>
                  )
                })}

                {isNextTruncated && <Text>...</Text>}
                {getLastBoundary().map(boundary => (
                  <Button
                    key={boundary}
                    onClick={() => onPageChange(boundary)}
                    size="sm"
                  >
                    {boundary}
                  </Button>
                ))}
              </HStack>
            </Center>

            <Button
              disabled={!hasNext()}
              onClick={() => onPageChange(currentPage + 1)}
              size="sm"
            >
              下周
            </Button>
          </Grid>
        )}
      </Paginated>
    </HStack>
  )
}

export default TimetablePaginator
