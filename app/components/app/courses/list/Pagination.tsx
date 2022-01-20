import type { ButtonProps, SystemProps } from '@chakra-ui/react'
import { Button, HStack, Text, useBreakpointValue } from '@chakra-ui/react'
import { Pagination as GhostPagination } from '@makotot/ghostui'
import { Link as RemixLink, useLoaderData, useLocation } from 'remix'
import { Card } from '~/components/common/Card'
import type { CoursesLoader } from '~/routes/courses'

export const Pagination = () => {
  const { courses } = useLoaderData<CoursesLoader>()
  const location = useLocation()

  const getPageParams = (page: number) => {
    const params = new URLSearchParams(location.search)
    params.set('page', `${page}`)
    return `?${params.toString()}`
  }

  const soblingCount = useBreakpointValue({ base: 0, sm: 1, md: 2 })
  const edgeCount = useBreakpointValue({ base: 0, md: 1, lg: 2 })

  return (
    <GhostPagination
      currentPage={courses.pages.current}
      totalPage={courses.pages.total}
      middlePagesSiblingCount={soblingCount}
      edgePageCount={edgeCount}
    >
      {props => (
        <Card>
          <HStack w="full" justify="space-between" spacing="0">
            <LinkButton
              text="上一页"
              to={getPageParams(props.currentPage - 1)}
              roundedLeft="md"
              px="6"
              disabled={!props.hasPreviousPage()}
            />
            <HStack spacing="0">
              {props.getPreviousPages().map(boundary => {
                return <span key={boundary}>{boundary}</span>
              })}
              {props.isPreviousTruncable() && <Text px="4">...</Text>}

              {props.getMiddlePages().map(page => {
                return page === props.currentPage ? (
                  <LinkButton
                    key={page}
                    text={page}
                    to={getPageParams(page)}
                    colorScheme="red"
                    variant="solid"
                  />
                ) : (
                  <LinkButton key={page} text={page} to={getPageParams(page)} />
                )
              })}

              {props.isNextTruncable() && <Text px="4">...</Text>}
              {props.getNextPages().map(page => (
                <LinkButton key={page} text={page} to={getPageParams(page)} />
              ))}
            </HStack>

            <LinkButton
              text="下一页"
              to={getPageParams(props.currentPage + 1)}
              roundedRight="md"
              px="6"
              disabled={!props.hasNextPage()}
            />
          </HStack>
        </Card>
      )}
    </GhostPagination>
  )
}

interface LinkButtomProps extends SystemProps, ButtonProps {
  to: string
  text: string | number
}

const LinkButton = ({ to, text, ...props }: LinkButtomProps) => (
  <Button
    as={RemixLink}
    to={to}
    variant="ghost"
    h="auto"
    py="4"
    px="4"
    rounded="none"
    fontSize="smd"
    {...props}
  >
    {text}
  </Button>
)
