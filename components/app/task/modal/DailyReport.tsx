import {
  Badge,
  Button,
  Center,
  Divider,
  HStack,
  Icon,
  IconButton,
  Input,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Spacer,
  Spinner,
  Text,
  ThemeTypings,
  useDisclosure,
  useToast,
  VStack,
} from '@chakra-ui/react'
import dayjs from 'dayjs'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import { RiGalleryUploadFill, RiRefreshLine } from 'react-icons/ri'
import { mutate } from 'swr'
import { BASE_API_URL } from '../../../../data/api-config'
import useDailyReport from '../../../../hooks/useDailyReport'
import useDailyReportStatus from '../../../../hooks/useDailyReportStatus'
import useUser from '../../../../hooks/useUser'
import { toastConfig } from '../../../../utils/config/toast'
import { dateFormatter } from '../../../../utils/formatter'
import TaskButton from '../../../common/action/button/TaskButton'

const statusTextMap: { [key in ReportStatus]: string } = {
  Fail: '失败',
  Success: '成功',
  Waiting: '执行中',
}

const statusColorMap: { [key in ReportStatus]: ThemeTypings['colorSchemes'] } =
  {
    Fail: 'red',
    Success: 'green',
    Waiting: 'blue',
  }

const DailyReport = () => {
  const toast = useToast()
  const router = useRouter()
  const { user, isError: isUserError, isLoading: isUserLoading } = useUser()
  const { isOpen, onOpen, onClose } = useDisclosure()
  const { tasks, isLoading, isError } = useDailyReport()
  const {
    status,
    isLoading: isStatusLoading,
    isError: isStatusError,
  } = useDailyReportStatus()
  const [time, setTime] = useState('')

  useEffect(() => {
    if (router.isReady) {
      const hash = window.location.hash
      if (hash === '#daily-report') {
        if (!user?.heu_username) {
          toast({
            title: '登录并且绑定 HEU 账号后才能进行自动报备',
            ...toastConfig.warn,
          })
        } else {
          onOpen()
        }
      }
    }
  }, [onOpen, router, user, toast])

  const baseURL = BASE_API_URL

  const handleReport = (once?: boolean) => {
    fetch(once ? `${baseURL}/api/report` : `${baseURL}/api/report/task`, {
      method: 'POST',
      body: once
        ? undefined
        : JSON.stringify({
            time: dayjs(time).format('YYYY-MM-DDT00:00'),
          }),
      mode: 'cors',
      credentials: 'include',
      headers: once
        ? undefined
        : {
            'content-type': 'application/json',
          },
    })
      .then(async res => {
        if (res.ok) {
          toast({
            title: '请求报备成功',
            ...toastConfig.ok,
          })
          once
            ? mutate(`${baseURL}/api/tasks`)
            : mutate(`${baseURL}/api/report/task`)
        } else {
          const data = await res.json()
          Object.values(data).forEach(d => {
            toast({
              title: '请求报备失败',
              description: d as string,
              ...toastConfig.error,
            })
          })
        }
      })
      .catch((err: Error) => {
        console.log('Daily Report Error -', err)
        toast({
          title: '请求报备失败',
          description: err.toString(),
          ...toastConfig.error,
        })
      })
  }

  const handleRemoveReport = (id: number) => {
    fetch(`${baseURL}/api/report/task/${id}`, {
      method: 'DELETE',
      mode: 'cors',
      credentials: 'include',
    })
      .then(async res => {
        if (res.ok) {
          toast({
            title: '删除任务成功',
            ...toastConfig.ok,
          })
          mutate(`${baseURL}/api/report/task`)
        } else {
          const data = await res.json()
          Object.values(data).forEach(d => {
            toast({
              title: '删除任务失败',
              description: d as string,
              ...toastConfig.error,
            })
          })
        }
      })
      .catch((err: Error) => {
        console.log('Daily Report Error -', err)
        toast({
          title: '删除任务失败',
          description: err.toString(),
          ...toastConfig.error,
        })
      })
  }

  const handleChangeDailyReport = (status: boolean) => {
    fetch(`${baseURL}/api/report/daily`, {
      method: 'POST',
      mode: 'cors',
      credentials: 'include',
      body: JSON.stringify({
        report_daily: status,
      }),
      headers: {
        'content-type': 'application/json',
      },
    })
      .then(async res => {
        if (res.ok) {
          toast({
            title: (status ? '启用' : '取消') + '每日报备成功',
            ...toastConfig.ok,
          })
          mutate(`${baseURL}/api/report/daily`)
        } else {
          const data = await res.json()
          Object.values(data).forEach(d => {
            toast({
              title: (status ? '启用' : '取消') + '每日报备失败',
              description: d as string,
              ...toastConfig.error,
            })
          })
        }
      })
      .catch((err: Error) => {
        console.log('Daily Report Error -', err)
        toast({
          title: (status ? '启用' : '取消') + '每日报备失败',
          description: err.toString(),
          ...toastConfig.error,
        })
      })
  }

  return (
    <>
      <TaskButton
        color="yellow"
        icon={RiGalleryUploadFill}
        title="每日报备"
        description="按计划自动执行报备"
        action={onOpen}
        disabled={isUserLoading || isUserError || !user?.heu_username}
      />

      <Modal
        isCentered
        size="md"
        isOpen={isOpen}
        onClose={onClose}
        motionPreset="slideInBottom"
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader pt="5" pb="3" d="flex" alignItems="center">
            报备
            <IconButton
              size="sm"
              ms="3"
              variant="ghost"
              aria-label="刷新列表"
              title="刷新列表"
              icon={<Icon as={RiRefreshLine} w="4" h="4" />}
              onClick={() => {
                mutate(`${baseURL}/api/report/task`)
              }}
            />
          </ModalHeader>
          <ModalCloseButton mx="2" my="0.5" top="4" right="4" />

          <ModalBody>
            <VStack spacing="4">
              {!isStatusError && !isStatusLoading && (
                <HStack
                  as="form"
                  spacing="4"
                  w="full"
                  align="center"
                  onSubmit={e => {
                    e.preventDefault()
                    handleChangeDailyReport(!status.report_daily)
                  }}
                >
                  <Button
                    isFullWidth
                    type="submit"
                    colorScheme={status.report_daily ? 'red' : 'yellow'}
                  >
                    {status.report_daily
                      ? '点击取消「每天都报备」'
                      : '点击启用「每天都报备」'}
                  </Button>
                </HStack>
              )}

              {isError ? (
                <Center w="full" h="full" minH="25vh" pb="4">
                  <Text color="gray.500" fontSize="lg">
                    数据加载失败
                  </Text>
                </Center>
              ) : isLoading ? (
                <Center w="full" h="full" minH="25vh" pb="4">
                  <Spinner thickness="4px" color="pink.400" size="xl" />
                </Center>
              ) : tasks.length === 0 ? (
                <Center
                  w="full"
                  h="full"
                  minH="25vh"
                  borderWidth="1px"
                  rounded="md"
                >
                  <Text color="gray.500" fontSize="lg">
                    暂无已请求的报备任务
                  </Text>
                </Center>
              ) : (
                <VStack
                  spacing="2.5"
                  w="full"
                  divider={<Divider />}
                  px="4"
                  py="2.5"
                  minH="25vh"
                  borderWidth="1px"
                  rounded="md"
                >
                  {tasks.map((task, index) => (
                    <HStack spacing="4" w="full" key={index}>
                      <Badge
                        colorScheme={statusColorMap[task.status]}
                        px="1.5"
                        py="0.5"
                        cursor="default"
                      >
                        {statusTextMap[task.status]}
                      </Badge>
                      <Text>{task.pk}</Text>
                      <Text>
                        {dateFormatter({ date: task.time, time: false })}
                      </Text>
                      <Spacer />
                      <Button
                        size="sm"
                        colorScheme="red"
                        variant="ghost"
                        onClick={() => handleRemoveReport(task.pk)}
                      >
                        删除
                      </Button>
                    </HStack>
                  ))}
                </VStack>
              )}

              <HStack
                as="form"
                spacing="4"
                w="full"
                align="center"
                onSubmit={e => {
                  e.preventDefault()
                  handleReport(true)
                }}
              >
                <Button isFullWidth type="submit">
                  立即报备一次（{dayjs().format('YYYY-MM-DD')}）
                </Button>
              </HStack>

              <HStack
                as="form"
                spacing="4"
                w="full"
                align="center"
                onSubmit={e => {
                  e.preventDefault()
                  handleReport()
                }}
              >
                <Input
                  type="date"
                  flex="1"
                  onChange={e => setTime(e.target.value)}
                  required
                />
                <Button type="submit">按指定日期报备</Button>
              </HStack>
            </VStack>
          </ModalBody>

          <ModalFooter py="2"></ModalFooter>
        </ModalContent>
      </Modal>
    </>
  )
}

export default DailyReport
