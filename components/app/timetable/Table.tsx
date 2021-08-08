import {
  Box,
  Button,
  Divider,
  Fade,
  HStack,
  Icon,
  Spacer,
  Table,
  TableCaption,
  Tbody,
  Td,
  Text,
  Tfoot,
  Th,
  Thead,
  Tr,
  useToast,
  VStack,
  Wrap,
  WrapItem,
} from '@chakra-ui/react'
import { useState } from 'react'
import { RiRefreshLine } from 'react-icons/ri'
import { mutate } from 'swr'
import useTimetable from '../../../hooks/useTimetable'
import useUser from '../../../hooks/useUser'
import { toastConfig } from '../../../utils/config/toast'
import { getTerm } from '../../../utils/date/get-term'
import { getWeek } from '../../../utils/date/get-week'
import { dateFormatter } from '../../../utils/formatter'
import TextLink from '../../common/action/link/TextLink'
import TimetablePaginator from './Paginator'

const Timetable = () => {
  const toast = useToast()
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

  const baseURL = process.env.NEXT_PUBLIC_BASE_API_URL

  const handleFetchTimetable = () => {
    fetch(`${baseURL}/api/my/timetable`, {
      method: 'POST',
      body: JSON.stringify({ term: getTerm() }),
      mode: 'cors',
      credentials: 'include',
      headers: {
        'content-type': 'application/json',
      },
    })
      .then(async res => {
        if (res.ok) {
          toast({
            title: '已发送获取数据请求',
            description: '获取数据需要一些时间，请稍等片刻并刷新页面查看结果',
            ...toastConfig.ok,
          })
          mutate(`${baseURL}/api/my/timetable`)
        } else {
          const data = await res.json()
          Object.values(data).forEach(d => {
            toast({
              title: '数据请求失败',
              description: d as string,
              ...toastConfig.error,
            })
          })
        }
      })
      .catch((err: Error) => {
        console.log('Fetch Score Error -', err)
        toast({
          title: '数据请求失败',
          description: err.toString(),
          ...toastConfig.error,
        })
      })
  }

  return (
    <>
      {isError ? null : isLoading ? null : (
        <Fade in>
          <Box w="full" overflow="auto" py="2">
            <Table w="full">
              <TableCaption
                placement="top"
                fontSize="md"
                px="0"
                pt="0"
                pb="6"
                mt="0"
                w="full"
              >
                <HStack spacing="3" w="full" fontSize="sm" px="4" my="-1">
                  <Text>
                    {user && `${user.heu_username} 的`}第 {week} 周课表
                  </Text>
                  <Spacer />
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

                  <Button
                    size="sm"
                    colorScheme="blue"
                    variant="link"
                    onClick={handleFetchTimetable}
                    mx="2"
                  >
                    <Icon as={RiRefreshLine} me="2" w="4" h="4" />
                    更新课表
                  </Button>
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
                        _hover={{ bg: 'gray.100', _dark: { bg: 'gray.900' } }}
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
                          _hover={{ bg: 'gray.100', _dark: { bg: 'gray.900' } }}
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
                  <Td colSpan={8} borderWidth="0" px="0" pb="0" mb="0">
                    <TimetablePaginator
                      currentPage={week}
                      totalPage={timetable?.result?.length}
                      onPageChange={week => setWeek(week)}
                    />
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
