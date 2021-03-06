import { Grid, GridItem, Spacer, Text } from '@chakra-ui/react'
import { useRouter } from 'next/router'
import CourseChart from '../../components/app/course/Chart'
import CourseCommentList from '../../components/app/course/comment/List'
import CourseInfo from '../../components/app/course/Info'
import CourseTable from '../../components/app/course/Table'
import MainContainer from '../../components/common/container/Main'
import useCourse from '../../hooks/useCourse'

const CoursePage = () => {
  const router = useRouter()
  const id = router.asPath.replace(/\/courses\//g, '')
  const { courseInfo } = useCourse(id)

  const isExam =
    Object.entries(courseInfo?.statistics?.all?.exam || []).length > 0
  const isTest =
    Object.entries(courseInfo?.statistics?.all?.test || []).length > 0
  const isDouble = isExam && isTest

  return (
    <>
      <MainContainer gray title="课程">
        {router.isReady && (
          <Grid
            templateColumns="repeat(3, 1fr)"
            gap={{ base: 8, md: 12 }}
            h="full"
          >
            <GridItem colSpan={{ base: 3, md: 2 }} h="full" minW="0">
              <CourseInfo id={id} />
              <Spacer h={{ base: 6, md: 9 }} />
              {isExam && <CourseChart id={id} type="exam" double={isDouble} />}
              {isDouble && <Spacer h="4" />}
              {isTest && <CourseChart id={id} type="test" double={isDouble} />}
              <Spacer h="4" />
              <CourseTable id={id} />
              <Text
                fontSize="sm"
                color="gray.500"
                px="6"
                py="4"
                lineHeight="1.75"
              >
                注：部分课程可以查看腐败街历史数据，但是腐败街数据不计入「所有时间」的优秀率和挂科率的统计，也不呈现在「所有时间」的图表中，仅供参考。
              </Text>
            </GridItem>
            <GridItem colSpan={{ base: 3, md: 1 }} h="full" minW="0">
              <CourseCommentList id={id} />
            </GridItem>
          </Grid>
        )}
      </MainContainer>
    </>
  )
}

export default CoursePage
