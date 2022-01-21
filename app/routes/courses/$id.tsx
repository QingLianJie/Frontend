import { Grid, GridItem } from '@chakra-ui/react'
import { useParams } from 'remix'

export default function CoursePage() {
  const { id } = useParams()

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
        md: 'minmax(0, 1fr) minmax(0, 2fr) minmax(0, 1fr)',
      }}
      gap="4"
    >
      <GridItem
        d="grid"
        gridTemplateColumns="100%"
        gridGap="4"
        rowStart={{ base: 2, md: 'auto' }}
      ></GridItem>

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
