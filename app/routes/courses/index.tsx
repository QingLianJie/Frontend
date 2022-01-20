import type { ButtonProps, SystemProps } from '@chakra-ui/react'
import { Grid, GridItem, Icon, IconButton, Tooltip } from '@chakra-ui/react'
import { createContext, Dispatch, useState } from 'react'
import { RiFullscreenLine } from 'react-icons/ri'
import type { LoaderFunction } from 'remix'
import { json } from 'remix'
import { Filter } from '~/components/app/courses/Filter'
import { History } from '~/components/app/courses/History'
import { Pagination } from '~/components/app/courses/list/Pagination'
import { Table } from '~/components/app/courses/list/Table'
import { ToolBar } from '~/components/app/courses/list/ToolBar'
import courses from '~/contents/mocks/courses/courses.json'
import type { IPaginatedCourses, TableColumn } from '~/types'

const defaultColumns: TableColumn[] = [
  { name: 'ID', key: 'id' },
  { name: '课程名', key: 'name' },
  { name: '类型', key: 'type' },
  { name: '学分', key: 'credit', numeric: true },
  { name: '学时', key: 'period', numeric: true },
  { name: '考核', key: 'test' },
  { name: '分类', key: 'category' },
  { name: '优秀率', key: 'excellent', numeric: true },
  { name: '挂科率', key: 'fail', numeric: true },
]

interface ContextProps {
  columns: TableColumn[]
  setColumns: Dispatch<TableColumn[]>
}

export const TableContext = createContext<ContextProps>({
  columns: defaultColumns,
  setColumns: () => {},
})

export type CoursesLoader = {
  courses: IPaginatedCourses
}

export const loader: LoaderFunction = async ({ request }) => {
  // TODO: 获取 courses
  const error = null

  return json({ courses })
}

export default function CoursesPage() {
  const [isMaxWidth, setIsMaxWidth] = useState(false)
  const [columns, setColumns] = useState<TableColumn[]>(defaultColumns)

  return (
    <Grid
      w="full"
      maxW={isMaxWidth ? '96rem' : '72rem'}
      px={{ base: '4', sm: '6', md: '8' }}
      pb={{ base: '0', sm: '8' }}
      pt={{ base: '0', sm: '8' }}
      alignItems="start"
      alignContent="start"
      justifyContent="center"
      templateColumns={{
        base: 'minmax(0, 1fr)',
        sm: 'minmax(0, 3fr) minmax(0, 5fr)',
        md: 'minmax(0, 1fr) minmax(0, 3fr)',
        xl: 'minmax(0, 18rem) minmax(0, 3fr)',
      }}
      gap="4"
    >
      <GridItem
        d="grid"
        gridTemplateColumns="100%"
        gridGap="4"
        rowStart={{ base: 2, sm: 1, md: 1 }}
        colStart={{ base: 1, sm: 1, md: 1 }}
      >
        <Filter id="filter" />
        <History />
      </GridItem>

      <GridItem
        rowStart={{ base: 1, sm: 1, md: 1 }}
        colStart={{ base: 1, sm: 2, md: 2 }}
        d="grid"
        gridTemplateColumns="100%"
        gridGap="4"
        rowSpan={{ base: 1, sm: 2, md: 1 }}
      >
        <TableContext.Provider value={{ columns, setColumns }}>
          <ToolBar />
          <Table />
          <Pagination />
        </TableContext.Provider>
      </GridItem>
      <MaxWidthFab
        d={{ base: 'none', xl: 'flex' }}
        onClick={() => setIsMaxWidth(v => !v)}
      />
    </Grid>
  )
}

interface MaxWidthFabProps extends ButtonProps, SystemProps {}

const MaxWidthFab = ({ ...props }: MaxWidthFabProps) => (
  <Tooltip hasArrow placement="top" px="2.5" py="1.5" label="表格变宽">
    <IconButton
      aria-label="表格变宽"
      icon={<Icon as={RiFullscreenLine} />}
      pos="fixed"
      right="10"
      bottom="10"
      size="lg"
      zIndex="200"
      rounded="full"
      bg="white"
      _dark={{ bg: 'gray.800' }}
      shadow="lg"
      _hover={{ shadow: 'xl' }}
      {...props}
    />
  </Tooltip>
)
