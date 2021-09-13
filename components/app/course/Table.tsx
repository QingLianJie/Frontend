import {
  Box,
  Fade,
  Heading,
  HStack,
  Icon,
  Table,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
} from '@chakra-ui/react'
import { useEffect, useState } from 'react'
import { RiTableLine } from 'react-icons/ri'
import useCourse from '../../../hooks/useCourse'
import { calcRate } from '../../../utils/calc/course-statistics'
import CardContainer from '../../common/container/Card'

interface CourseTableProps {
  id: string
}

const CourseTable = ({ id }: CourseTableProps) => {
  const { courseInfo, isLoading, isError } = useCourse(id)

  const [rates, setRates] = useState<CourseInfoRate[] | null>(null)

  useEffect(() => {
    if (courseInfo) {
      setRates(
        Object.keys(courseInfo.statistics)
          .reverse()
          .map(key => calcRate(courseInfo, key))
      )
    }
  }, [courseInfo])

  return (
    <>
      {isError ? null : isLoading ? null : (
        <Fade in>
          <CardContainer>
            <HStack alignItems="center" py="2" spacing="3">
              <Icon as={RiTableLine} w="5" h="5" ms="1" />
              <Heading as="p" fontSize="lg" fontWeight="600">
                成绩数据
              </Heading>
            </HStack>

            <Box
              px={{ base: 0, md: 2 }}
              py={{ base: 2, md: 4 }}
              w="full"
              overflowX="auto"
            >
              <Table whiteSpace="nowrap">
                <Thead>
                  <Tr>
                    <Th fontSize="sm">时间</Th>
                    <Th fontSize="sm">优秀率</Th>
                    <Th fontSize="sm">优秀人数</Th>
                    <Th fontSize="sm">挂科率</Th>
                    <Th fontSize="sm">挂科人数</Th>
                    <Th fontSize="sm">统计人数</Th>
                  </Tr>
                </Thead>
                <Tbody>
                  {rates?.map((rate, index) => (
                    <Tr key={index}>
                      <Td>
                        {rate.key === 'all'
                          ? '所有时间'
                          : rate.key === '腐败街'
                          ? '腐败街数据 *'
                          : rate.key}
                      </Td>
                      <Td>{rate.excellent.rate}</Td>
                      <Td>{rate.excellent.count}</Td>
                      <Td>{rate.fail.rate}</Td>
                      <Td>{rate.fail.count}</Td>
                      <Td>{courseInfo.statistics[rate.key].total}</Td>
                    </Tr>
                  ))}
                </Tbody>
              </Table>
            </Box>
          </CardContainer>
        </Fade>
      )}
    </>
  )
}

export default CourseTable
