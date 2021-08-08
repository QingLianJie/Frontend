import {
  Box,
  Button,
  Divider,
  Fade,
  HStack,
  Table,
  TableCaption,
  Tbody,
  Td,
  Text,
  Tfoot,
  Th,
  Thead,
  Tr,
  VStack,
  Wrap,
  WrapItem,
} from '@chakra-ui/react'
import { useState } from 'react'
import useTimetable from '../../../hooks/useTimetable'
import useUser from '../../../hooks/useUser'
import { getWeek } from '../../../utils/date/get-week'
import { dateFormatter } from '../../../utils/formatter'
import TextLink from '../../common/action/link/TextLink'

const Timetable = () => {
  const { user } = useUser()
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
            <Table w="full" mb="2">
              <TableCaption placement="top" my="2" pb="4" fontSize="md" px="4">
                <HStack spacing="2">
                  <Text>
                    {user && `${user.heu_username} 的`}第 {week} 周课表
                  </Text>
                  <Text>|</Text>
                  {timetable.status === 'Success' ? (
                    <Text d="flex" alignItems="center">
                      数据更新于{' '}
                      {dateFormatter({
                        date: timetable.created * 1000,
                        calendar: true,
                      })}
                    </Text>
                  ) : timetable.status === 'Fail' ? (
                    <Text d="flex" alignItems="center">
                      数据更新失败，请尝试重新获取
                    </Text>
                  ) : timetable.status === 'Pending' ? (
                    <Text d="flex" alignItems="center">
                      数据正在更新，请稍等片刻
                    </Text>
                  ) : timetable.status === 'Never' ? (
                    <Text d="flex" alignItems="center">
                      还没有获取过成绩数据，点击右边按钮获取
                    </Text>
                  ) : null}
                </HStack>
              </TableCaption>
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
                    {index === 5 ? (
                      <Td
                        colSpan={7}
                        textAlign="center"
                        fontSize="sm"
                        borderWidth="1px"
                        _hover={{ bg: 'gray.50', _dark: { bg: 'gray.900' } }}
                        transition="all 0.2s"
                      >
                        <HStack
                          spacing="3"
                          divider={<Divider orientation="vertical" h="full" />}
                          justify="space-evenly"
                        >
                          {row.map((cell, index) => (
                            <Text
                              key={index}
                              lineHeight="1.75"
                              as="pre"
                              fontFamily="inherit"
                              overflowWrap="break-word"
                              whiteSpace="pre-wrap"
                            >
                              <TextLink
                                href={`/courses?search=${
                                  cell?.toString().split(/[\ |,]/)[0]
                                }`}
                              >
                                {cell?.toString().split(/[\ |,]/)[0]}
                              </TextLink>
                              <br />
                              {cell
                                ?.toString()
                                .replace(/,/g, '\n')
                                .replace(
                                  cell?.toString().split(/[\ |\,]/)[0],
                                  ''
                                )}
                            </Text>
                          ))}
                        </HStack>
                      </Td>
                    ) : (
                      row.map((cell, index) => (
                        <Td
                          key={index}
                          textAlign="center"
                          fontSize="sm"
                          borderWidth="1px"
                          _hover={{ bg: 'gray.50', _dark: { bg: 'gray.900' } }}
                          transition="all 0.2s"
                        >
                          {Array.isArray(cell) && (
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
                                  <TextLink
                                    href={`/courses?search=${
                                      cell?.toString().split(/[\ |,]/)[0]
                                    }`}
                                  >
                                    {cell?.toString().split(/[\ |,]/)[0]}
                                  </TextLink>

                                  {course
                                    ?.toString()
                                    .replace(/,/g, '\n')
                                    .replace(
                                      cell?.toString().split(/[\ |\,]/)[0],
                                      ''
                                    )}
                                </Text>
                              ))}
                            </VStack>
                          )}
                        </Td>
                      ))
                    )}
                  </Tr>
                ))}
              </Tbody>
              <Tfoot w="full">
                <Tr>
                  <Td borderWidth="1px" fontSize="sm" textAlign="center">
                    周数
                  </Td>
                  <Td colSpan={7} borderWidth="1px" textAlign="center">
                    <Wrap py="2" w="full" justify="center">
                      {timetable?.result?.map((weekday, index) => (
                        <WrapItem key={index}>
                          <Button
                            colorScheme={
                              week === index + 1 ? 'blue' : undefined
                            }
                            onClick={() => setWeek(index + 1)}
                            size="sm"
                          >
                            {index + 1}
                          </Button>
                        </WrapItem>
                      ))}
                    </Wrap>
                  </Td>
                </Tr>
              </Tfoot>
            </Table>
          </Box>
        </Fade>
      )}
    </>
  )
}

export default Timetable
