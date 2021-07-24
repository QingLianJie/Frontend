import { Grid, GridItem, Spacer } from '@chakra-ui/react'
import { useRouter } from 'next/router'
import CourseChart from '../../components/app/course/Chart'
import CourseCommentList from '../../components/app/course/Comment'
import CourseInfo from '../../components/app/course/Info'
import MainContainer from '../../components/common/container/Main'

const CoursePage = () => {
  const router = useRouter()
  const id = router.asPath.replace(/\/courses\//g, '')

  return (
    <>
      <MainContainer gray title="课程">
        {router.isReady && (
          <Grid
            templateColumns="repeat(3, 1fr)"
            gap={{ base: 8, md: 12 }}
            h="full"
          >
            <GridItem colSpan={{ base: 3, md: 2 }} h="full">
              <CourseInfo id={id} />
              <Spacer h={{ base: 6, md: 9 }} />
              <CourseChart id={id} />
            </GridItem>
            <GridItem colSpan={{ base: 3, md: 1 }} h="full">
              <CourseCommentList id={id} />
            </GridItem>
          </Grid>
        )}
      </MainContainer>
    </>
  )
}

export default CoursePage
