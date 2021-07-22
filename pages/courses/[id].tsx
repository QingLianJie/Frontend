import { Grid, GridItem } from '@chakra-ui/react'
import { useRouter } from 'next/router'
import CourseCommentList from '../../components/app/course/Comment'
import CourseDashboard from '../../components/app/course/Dashboard'
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
            gap={{ base: 6, sm: 8, md: 12, lg: 16 }}
            h="full"
          >
            <GridItem colSpan={{ base: 3, md: 2 }} h="full">
              <CourseDashboard id={id} />
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
