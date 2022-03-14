import {
  Flex,
  Link,
  Table as ChakraTable,
  Tbody,
  Td,
  Th,
  Thead,
  Tooltip,
  Tr,
  type CSSObject,
  type SystemProps,
} from '@chakra-ui/react'
import { useContext } from 'react'
import { Link as RemixLink, useLoaderData } from 'remix'
import { Card } from '~/components/common/Card'
import { CoursesLoader, TableContext } from '~/routes/courses'
import { type TableRow } from '~/types'
import { calcRate } from '~/utils/math'

export const Table = () => {
  const { courses } = useLoaderData<CoursesLoader>()
  const { columns } = useContext(TableContext)

  const rows: TableRow[] = courses.courses.map(props => {
    const { statistics, ...rest } = props
    const { excellent, fail, total } = statistics

    return {
      ...rest,
      excellent: calcRate(excellent / total),
      fail: calcRate(fail / total),
      tooltip: {
        excellent: `${excellent} / ${total}`,
        fail: `${fail} / ${total}`,
      },
    }
  })

  return (
    <Card>
      <Flex w="full" maxW="full" overflowX="auto" px="4" py="2">
        <ChakraTable w="full">
          <colgroup>
            {columns.map(({ key, hide }) => (
              <col
                key={key}
                style={{
                  visibility: hide ? 'collapse' : 'visible',
                }}
              />
            ))}
          </colgroup>
          <Thead>
            <Tr>
              {columns.map(({ name, key, numeric }) => (
                <Th
                  key={key}
                  whiteSpace="nowrap"
                  fontSize="smd"
                  px="3"
                  py="4"
                  transition="all 0.2s"
                  isNumeric={numeric}
                >
                  {name}
                </Th>
              ))}
            </Tr>
          </Thead>
          <Tbody>
            {rows.map(row => (
              <Tr
                key={row.id}
                sx={{
                  ':last-of-type td': { borderBottom: 'none' },
                }}
              >
                {columns.map(({ key }) =>
                  key === 'excellent' || key === 'fail' ? (
                    <ScoreCell
                      type={key}
                      key={key}
                      text={row[key]}
                      tooltip={row.tooltip[key]}
                    />
                  ) : key === 'name' ? (
                    <LinkCell
                      key={key}
                      href={`/courses/${row['id']}`}
                      text={row[key]}
                    />
                  ) : (
                    <Td
                      key={key}
                      isNumeric={key === 'credit' || key === 'period'}
                      {...CellStyles}
                    >
                      {row[key]}
                    </Td>
                  )
                )}
              </Tr>
            ))}
          </Tbody>
        </ChakraTable>
      </Flex>
    </Card>
  )
}

const CellStyles: SystemProps & { sx: CSSObject } = {
  whiteSpace: 'nowrap',
  px: '3',
  py: '4',
  sx: { fontVariantNumeric: 'normal' },
  fontSize: 'smd',
  transition: 'all 0.2s',
}

interface ScoreCellProps {
  type: string
  text: string
  tooltip: string
}

const ScoreCell = ({ type, text, tooltip }: ScoreCellProps) => (
  <Td
    fontWeight="bold"
    color={
      type === 'excellent'
        ? 'green.500'
        : type === 'fail'
        ? 'red.500'
        : 'inherit'
    }
    _dark={{
      color:
        type === 'excellent'
          ? 'green.400'
          : type === 'fail'
          ? 'red.400'
          : 'inherit',
    }}
    isNumeric
    {...CellStyles}
  >
    <Tooltip hasArrow placement="top" label={tooltip} px="2.5" py="1.5">
      {text}
    </Tooltip>
  </Td>
)

interface LinkCellProps {
  href: string
  text: string
}

const LinkCell = ({ href, text }: LinkCellProps) => (
  <Td fontWeight="bold" {...CellStyles}>
    <Link
      as={RemixLink}
      to={href}
      color="purple.500"
      _hover={{
        color: 'purple.700',
      }}
      _dark={{
        color: 'blue.400',
        _hover: {
          color: 'blue.300',
        },
      }}
    >
      {text}
    </Link>
  </Td>
)
