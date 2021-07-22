import { Grid, GridItem, HStack } from '@chakra-ui/react'
import {
  Next,
  PageGroup,
  Paginator,
  Previous,
  usePaginator,
} from 'chakra-paginator'
import Head from 'next/head'
import { useEffect } from 'react'
import { useState } from 'react'
import { RiBookOpenLine, RiFilterLine } from 'react-icons/ri'
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
        {isError ? null : isLoading ? null : (
          <Grid
            templateColumns="repeat(4, 1fr)"
            gap={{ base: 4, sm: 8, md: 12, lg: 16 }}
            h="full"
          >
            <GridItem colSpan={{ base: 4, md: 1 }} h="full">
              <GroupContainer title="筛选" icon={RiFilterLine}>
                <CourseListFilter />
              </GroupContainer>
            </GridItem>
            <GridItem colSpan={{ base: 4, md: 3 }} h="full">
              <GroupContainer title="所有课程" icon={RiBookOpenLine}>
                <ListContainer spacing="3">
                  {courseList.results.map((course, index) => (
                    <CourseListItem key={index} course={course} />
                  ))}
                </ListContainer>
                <HStack w="full" justify="space-between" spacing="4" py="4">
                  <Paginator
                    pagesQuantity={Math.floor(courseCount / pageCount)}
                    currentPage={currentPage}
                    onPageChange={setCurrentPage}
                    outerLimit={3}
                    innerLimit={3}
                    activeStyles={{
                      minW: '8',
                      colorScheme: 'blue',
                      px: '2',
                    }}
                    normalStyles={{
                      minW: '8',
                      px: '2',
                    }}
                  >
                    <Previous>上一页</Previous>
                    <PageGroup isInline spacing="2" />
                    <Next>下一页</Next>
                  </Paginator>
                </HStack>
              </GroupContainer>
            </GridItem>
          </Grid>
        )}
      </MainContainer>
    </>
  )
}

export default CoursesPage
