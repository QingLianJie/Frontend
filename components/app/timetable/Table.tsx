import {
  Box,
  Button,
  Center,
  Divider,
  Fade,
  HStack,
  Icon,
  Spacer,
  Spinner,
  Table,
  TableCaption,
  Tbody,
  Td,
  Text,
  Tfoot,
  Th,
  Thead,
  theme,
  Tr,
  useColorMode,
  useToast,
  VStack,
} from '@chakra-ui/react'
import { saveAs } from 'file-saver'
import { toBlob } from 'html-to-image'
import { useRef, useState } from 'react'
import { RiImageLine, RiRefreshLine } from 'react-icons/ri'
import { mutate } from 'swr'
import { BASE_API_URL } from '../../../data/api-config'
import useTimetable from '../../../hooks/useTimetable'
import useUser from '../../../hooks/useUser'
import { toastConfig } from '../../../utils/config/toast'
import { getTerm } from '../../../utils/date/get-term'
import { getWeek } from '../../../utils/date/get-week'
import { dateFormatter } from '../../../utils/formatter'
import TextLink from '../../common/action/link/TextLink'
import TimetablePaginator from './Paginator'

const Timetable = () => {
  const { colorMode } = useColorMode()
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

  const baseURL = BASE_API_URL
  let pollingCount = 0

  const pollingFetch = (time: number = 1000) => {
    pollingCount += 1
    if (pollingCount > 8 || timetable?.status === 'Success') return
    setTimeout(() => {
      mutate(`${baseURL}/api/my/timetable`)
      pollingFetch(1000 * pollingCount)
    }, time)
  }

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
          pollingCount = 0
          pollingFetch()
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

  const tableRef = useRef<HTMLTableElement>(null)

  const handleExportImage = () => {
    if (tableRef?.current) {
      toBlob(tableRef.current, {
        backgroundColor:
          colorMode === 'dark' ? theme.colors.gray[800] : theme.colors.white,
        style: {
          margin: '16px 0 0 0',
        },
        filter: (node: HTMLElement) => node.tagName !== 'BUTTON',
      }).then(blob => {
        if (blob) {
          saveAs(
            blob,
            `${user && `${user.heu_username} 的`}第 ${week} 周课表.png`
          )
        }
      })
    }
  }

  return (
    <>
      {isError ? null : isLoading ? null : (
        <Fade in>
          <Box w="full" overflow="auto">
            <Table w="full" my="2" ref={tableRef} p="1px">
              <TableCaption
                placement="top"
                fontSize="md"
                px="0"
                py="0"
                mt="0"
                mb={Array.isArray(timetable.result) ? 6 : 0}
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

                  <Button
                    size="sm"
                    colorScheme="blue"
                    variant="link"
                    onClick={handleExportImage}
                    mx="2"
                  >
                    <Icon as={RiImageLine} me="2" w="4" h="4" />
                    导出课表截图
                  </Button>
                </HStack>
              </TableCaption>
              {Array.isArray(timetable.result) ? (
                <>
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
                            _hover={{
                              bg: 'gray.100',
                              _dark: { bg: 'gray.900' },
                            }}
                            transition="all 0.2s"
                          >
                            <HStack
                              spacing="3"
                              divider={
                                <Divider orientation="vertical" h="full" />
                              }
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
                              _hover={{
                                bg: 'gray.100',
                                _dark: { bg: 'gray.900' },
                              }}
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
                                          Array.isArray(course)
                                            ? course[0]
                                            : course
                                        }`}
                                      >
                                        {Array.isArray(course)
                                          ? course[0]
                                          : course}
                                      </TextLink>

                                      {Array.isArray(course)
                                        ? course
                                            .join('\n')
                                            .replace(course[0], '')
                                        : course.replace(course[0], '')}
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
                </>
              ) : timetable.status === 'Pending' ? (
                <Center w="full" flexDir="column" h="50vh" pb="4">
                  <Spinner thickness="4px" color="pink.400" size="xl" />
                </Center>
              ) : null}
            </Table>
          </Box>
        </Fade>
      )}
    </>
  )
}

export default Timetable
