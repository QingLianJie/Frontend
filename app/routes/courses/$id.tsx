import { Grid, GridItem } from '@chakra-ui/react'
import type { LoaderFunction, MetaFunction } from 'remix'
import { json, useParams } from 'remix'
import { Info } from '~/components/app/courses/Info'
import { Tip } from '~/components/app/courses/Tip'
import comments from '~/contents/mocks/courses/[id]/comments/comments.json'
import statistics from '~/contents/mocks/courses/[id]/statistics/statistics.json'
import info from '~/contents/mocks/courses/[id]/[id].json'
import type { ICourse, ICourseComment, IStatictics } from '~/types'

export const meta: MetaFunction = ({ data }) => ({
  title: `${data.info.name} - 清廉街`,
})

export type CourseLoader = {
  info: ICourse
  statictics: IStatictics
  comments: ICourseComment[]
}

export const loader: LoaderFunction = async ({ request }) => {
  // TODO: 获取 courses
  const error = null

  return json({ info, statistics, comments })
}

export default function CoursePage() {
  const { id } = useParams()

  return (
    <Grid
      w="full"
      maxW="72rem"
      px={{ base: '4', sm: '6', md: '8' }}
      pb={{ base: '0', sm: '8' }}
      pt={{ base: '0', sm: '4' }}
      alignItems="start"
      alignContent="start"
      justifyContent="center"
      templateColumns={{
        base: '1fr',
        sm: 'minmax(0, 3fr) minmax(0, 5fr)',
        md: 'minmax(0, 1fr) minmax(0, 2fr) minmax(0, 1fr)',
      }}
      gap="4"
    >
      <GridItem
        d="grid"
        gridTemplateColumns="100%"
        gridGap="4"
        rowStart={{ base: 2, md: 'auto' }}
      >
        <Info />
        <Tip />
      </GridItem>

      <GridItem
        rowSpan={{ base: 1, sm: 2, md: 1 }}
        d="grid"
        gridTemplateColumns="100%"
        gridGap="4"
      ></GridItem>

      <GridItem
        d="grid"
        gridTemplateColumns="100%"
        gridGap="4"
        rowStart={{ base: 1, md: 'auto' }}
      ></GridItem>
    </Grid>
  )
}
