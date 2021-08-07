import {
  Box,
  Button,
  Divider,
  Fade,
  HStack,
  Table,
  Tbody,
  Td,
  Text,
  Th,
  Thead,
  Tr,
  VStack,
} from '@chakra-ui/react'
import { useState } from 'react'
import useTimetable from '../../../hooks/useTimetable'
import { getWeek } from '../../../utils/date/get-week'

const Timetable = () => {
  const { timetable, isLoading, isError } = useTimetable()
  const [week, setWeek] = useState(getWeek() || 1)

  const timeMap = [
    '第一大节',
    '第二大节',
    '第三大节',
    '第四大节',
    '第五大节',
    '备注',
  ]

  return (
    <>
      {isError ? null : isLoading ? null : (
        <Fade in>
          <Box w="full" overflowX="auto">
            <Table>
              <Thead>
                <Tr whiteSpace="nowrap">
                  <Th fontSize="sm" borderWidth="1px" textAlign="center">
                    时间
                  </Th>
                  <Th fontSize="sm" borderWidth="1px" textAlign="center">
                    星期一
                  </Th>
                  <Th fontSize="sm" borderWidth="1px" textAlign="center">
                    星期二
                  </Th>
                  <Th fontSize="sm" borderWidth="1px" textAlign="center">
                    星期三
                  </Th>
                  <Th fontSize="sm" borderWidth="1px" textAlign="center">
                    星期四
                  </Th>
                  <Th fontSize="sm" borderWidth="1px" textAlign="center">
                    星期五
                  </Th>
                  <Th fontSize="sm" borderWidth="1px" textAlign="center">
                    星期六
                  </Th>
                  <Th fontSize="sm" borderWidth="1px" textAlign="center">
                    星期天
                  </Th>
                </Tr>
              </Thead>
              <Tbody w="full">
                {timetable?.result?.[week - 1]?.map((row, index) => (
                  <Tr key={index} w="full">
                    <Td
                      fontSize="sm"
                      whiteSpace="nowrap"
                      borderWidth="1px"
                      textAlign="center"
                    >
                      {timeMap[index]}
                    </Td>
                    {row.map((cell, index) => (
                      <Td
                        key={index}
                        colSpan={index === row.length - 1 ? 7 : undefined}
                        textAlign="center"
                        fontSize="sm"
                        borderWidth="1px"
                        _hover={{ bg: 'gray.50', _dark: { bg: 'gray.900' } }}
                        transition="all 0.2s"
                      >
                        {Array.isArray(cell) ? (
                          <VStack divider={<Divider />}>
                            {cell.map((course, index) => (
                              <Text
                                key={index}
                                lineHeight="1.75"
                                as="pre"
                                fontFamily="inherit"
                                overflowWrap="break-word"
                                whiteSpace="pre-wrap"
                              >
                                {course?.toString().replace(/,/g, '\n')}
                              </Text>
                            ))}
                          </VStack>
                        ) : (
                          <Text
                            key={index}
                            lineHeight="1.75"
                            as="pre"
                            fontFamily="inherit"
                            overflowWrap="break-word"
                            whiteSpace="pre-wrap"
                          >
                            {cell.replace(/,/g, '\n')}
                          </Text>
                        )}
                      </Td>
                    ))}
                  </Tr>
                ))}
              </Tbody>
            </Table>
            <HStack overflowX="auto" py="4">
              {timetable?.result?.map((weekday, index) => (
                <Button
                  key={index}
                  colorScheme={week === index + 1 ? 'blue' : undefined}
                  onClick={() => setWeek(index + 1)}
                  size="sm"
                >
                  {index + 1}
                </Button>
              ))}
            </HStack>
          </Box>
        </Fade>
      )}
    </>
  )
}

export default Timetable
