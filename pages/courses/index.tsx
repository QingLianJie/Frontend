import {
  Box,
  Grid,
  GridItem,
  Skeleton,
  useBreakpointValue,
  VStack,
} from '@chakra-ui/react'
import { usePaginator } from 'chakra-paginator'
import Head from 'next/head'
import { useEffect, useState } from 'react'
import { RiBookOpenLine, RiSearchLine } from 'react-icons/ri'
import CoursePaginator from '../../components/app/course/Paginator'
import CourseListFilter from '../../components/app/widget/course/list/Filter'
import CourseListItem from '../../components/app/widget/course/list/Item'
import GroupContainer from '../../components/common/container/Group'
import ListContainer from '../../components/common/container/List'
import MainContainer from '../../components/common/container/Main'
import useCourseList from '../../hooks/useCourseList'

const CoursesPage = () => {
  const { currentPage, setCurrentPage } = usePaginator({
    initialState: { currentPage: 1 },
  })
  const [pageCount, setPageCount] = useState(0)
  const [courseCount, setCourseCount] = useState(0)
  const { courseList, isLoading, isError } = useCourseList(currentPage)

  const outerLimit = useBreakpointValue({ base: 1, sm: 1, md: 2, lg: 3 })
  const innerLimit = useBreakpointValue({ base: -1, sm: 1, md: 1, lg: 2 })

  useEffect(() => {
    if (!isLoading && !isError) {
      setPageCount(courseList.results.length)
      setCourseCount(courseList.count)
    }
  }, [courseList, isError, isLoading])

  return (
    <>
      <Head>
        <title>课程 - 清廉街</title>
      </Head>
      <MainContainer gray title="课程">
        {isError ? null : (
          <Grid
            templateColumns="repeat(16, 1fr)"
            gap={{ base: 8, md: 12 }}
            h="full"
          >
            <GridItem colSpan={{ base: 16, md: 12 }} h="full">
              <GroupContainer title="课程列表" icon={RiBookOpenLine}>
                <VStack align="start" spacing="4">
                  <Box
                    bg="white"
                    _dark={{
                      bg: 'gray.800',
                    }}
                    borderWidth="1px"
                    rounded="md"
                    w="full"
                    overflow="hidden"
                  >
                    <ListContainer spacing="0" divider>
                      {!isLoading ? (
                        courseList?.results.map((course, index) => (
                          <CourseListItem key={index} course={course} />
                        ))
                      ) : (
                        <Skeleton w="0" height="100vh" />
                      )}
                    </ListContainer>
                  </Box>

                  <CoursePaginator
                    pagesQuantity={Math.floor(courseCount / pageCount)}
                    currentPage={currentPage}
                    setCurrentPage={setCurrentPage}
                    outerLimit={outerLimit}
                    innerLimit={innerLimit}
                  />
                </VStack>
              </GroupContainer>
            </GridItem>

            <GridItem colSpan={{ base: 16, md: 4 }} h="full">
              <GroupContainer title="课程搜索" icon={RiSearchLine}>
                <CourseListFilter />
              </GroupContainer>
            </GridItem>
          </Grid>
        )}
      </MainContainer>
    </>
  )
}

export default CoursesPage
