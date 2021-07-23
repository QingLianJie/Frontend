import { Box, Fade, Grid, GridItem, Skeleton, VStack } from '@chakra-ui/react'
import { usePaginator } from 'chakra-paginator'
import Head from 'next/head'
import { useRouter } from 'next/router'
import { RiBookOpenLine, RiSearchLine } from 'react-icons/ri'
import CoursePaginator from '../../components/app/course/Paginator'
import CourseListFilter from '../../components/app/widget/course/list/Filter'
import CourseListItem from '../../components/app/widget/course/list/Item'
import GroupContainer from '../../components/common/container/Group'
import ListContainer from '../../components/common/container/List'
import MainContainer from '../../components/common/container/Main'
import useCourseList from '../../hooks/useCourseList'

const CoursesPage = () => {
  const router = useRouter()
  const { currentPage, setCurrentPage } = usePaginator({
    initialState: { currentPage: Number(router.query.page) || 1 },
  })

  const { courseList, isLoading, isError } = useCourseList(
    Number(router.query.page) || currentPage
  )

  const handlePageChange = (page: number) => {
    setCurrentPage(page)
    if (page !== 1) {
      router.push(`/courses?page=${page}`, undefined, { shallow: true })
    } else {
      router.push(`/courses`, undefined, { shallow: true })
    }
  }

  return (
    <>
      <Head>
        <title>课程 - 清廉街</title>
      </Head>
      <MainContainer gray title="课程">
        {isError ? null : (
          <Grid
            templateColumns={{ base: 'repeat(2, 1fr)', md: 'repeat(16, 1fr)' }}
            gap={{ base: 8, md: 12 }}
            w="full"
            h="full"
          >
            <GridItem
              colSpan={{ base: 2, md: 10, lg: 12 }}
              maxW="full"
              h="full"
            >
              <GroupContainer title="课程列表" icon={RiBookOpenLine}>
                <VStack align="start" spacing="4" w="full">
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
                      {!isLoading
                        ? courseList?.results.map((course, index) => (
                            <Fade key={index} in style={{ width: '100%' }}>
                              <CourseListItem key={index} course={course} />
                            </Fade>
                          ))
                        : new Array(10).fill('').map((_, index) => (
                            <Skeleton
                              w="full"
                              key={index}
                              startColor="transparent"
                              endColor="transparent"
                            >
                              <CourseListItem />
                            </Skeleton>
                          ))}
                    </ListContainer>
                  </Box>

                  <Skeleton
                    w="full"
                    rounded="md"
                    isLoaded={!isLoading && !!courseList?.count}
                  >
                    <CoursePaginator
                      pagesQuantity={
                        courseList
                          ? Math.floor(courseList.count / 10) + 1
                          : 1000
                      }
                      currentPage={Number(router.query.page) || currentPage}
                      onPageChange={handlePageChange}
                    />
                  </Skeleton>
                </VStack>
              </GroupContainer>
            </GridItem>

            <GridItem colSpan={{ base: 2, md: 6, lg: 4 }} h="full">
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
