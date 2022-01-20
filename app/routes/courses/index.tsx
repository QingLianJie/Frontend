import { Grid, GridItem } from '@chakra-ui/react'
import { History } from '~/components/app/courses/History'
import { Filter } from '~/components/app/courses/Filter'
import { List } from '~/components/app/courses/List'

export default function CoursesPage() {
  return (
    <Grid
      w="full"
      maxW="72rem"
      px={{ base: '4', sm: '6', md: '8' }}
      pb={{ base: '0', sm: '8' }}
      pt={{ base: '0', sm: '8' }}
      alignItems="start"
      alignContent="start"
      justifyContent="center"
      templateColumns={{
        base: '1fr',
        sm: 'minmax(0, 3fr) minmax(0, 5fr)',
        md: 'minmax(0, 1fr) minmax(0, 3fr)',
      }}
      gap="4"
    >
      <GridItem
        d="grid"
        gridTemplateColumns="100%"
        gridGap="4"
        rowStart={{ base: 2, md: 'auto' }}
      >
        <Filter />
        <History />
      </GridItem>

      <GridItem
        rowSpan={{ base: 1, sm: 2, md: 1 }}
        d="grid"
        gridTemplateColumns="100%"
        gridGap="4"
      >
        <List />
      </GridItem>
    </Grid>
  )
}
