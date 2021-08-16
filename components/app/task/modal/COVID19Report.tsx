import {
  Badge,
  Button,
  Center,
  Divider,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Spinner,
  Text,
  ThemeTypings,
  useDisclosure,
  useToast,
  VStack,
  Wrap,
  WrapItem,
} from '@chakra-ui/react'
import dayjs from 'dayjs'
import { useRouter } from 'next/router'
import { MouseEvent, useEffect } from 'react'
import { RiHealthBookFill } from 'react-icons/ri'
import { mutate } from 'swr'
import { BASE_API_URL } from '../../../../data/api-config'
import useCOVID19Report from '../../../../hooks/useCOVID19Report'
import useCOVID19ReportStatus from '../../../../hooks/useCOVID19ReportStatus'
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

const COVID19Report = () => {
  const toast = useToast()
  const router = useRouter()
  const { user, isError: isUserError, isLoading: isUserLoading } = useUser()
  const { isOpen, onOpen, onClose } = useDisclosure()
  const { tasks, isLoading, isError } = useCOVID19Report()
  const {
    status,
    isLoading: isStatusLoading,
    isError: isStatusError,
  } = useCOVID19ReportStatus()

  const baseURL = BASE_API_URL

  useEffect(() => {
    if (router.isReady) {
      const hash = window.location.hash
      if (hash === '#covid-19-report') {
        if (!user?.heu_username) {
          toast({
            title: '登录并且绑定 HEU 账号后才能进行自动执行平安行动',
            ...toastConfig.warn,
          })
        } else {
          onOpen()
        }
      }
    }
  }, [onOpen, router, user, toast])

  const handlePingAn = (e: MouseEvent) => {
    e.preventDefault()

    fetch(`${baseURL}/api/pingan/daily`, {
      method: 'POST',
      mode: 'cors',
      credentials: 'include',
      body: JSON.stringify({
        pingan_daily: !status.pingan_daily,
      }),
      headers: {
        'content-type': 'application/json',
      },
    })
      .then(async res => {
        if (res.ok) {
          toast({
            title:
              (!status.pingan_daily ? '启用' : '取消') + '自动执行平安行动成功',
            ...toastConfig.ok,
          })
          mutate(`${baseURL}/api/pingan/daily`)
          mutate(`${baseURL}/api/pingan/tasks`)
        } else {
          const data = await res.json()
          Object.values(data).forEach(d => {
            toast({
              title:
                (!status.pingan_daily ? '启用' : '取消') +
                '自动执行平安行动失败',
              description: d as string,
              ...toastConfig.error,
            })
          })
        }
      })
      .catch((err: Error) => {
        console.log('COVID 19 Report Error -', err)
        toast({
          title:
            (!status.pingan_daily ? '启用' : '取消') + '自动执行平安行动失败',
          description: err.toString(),
          ...toastConfig.error,
        })
      })
  }

  const handlePingAnOnce = (e: MouseEvent) => {
    e.preventDefault()

    fetch(`${baseURL}/api/pingan`, {
      method: 'POST',
      mode: 'cors',
      credentials: 'include',
    })
      .then(async res => {
        if (res.ok) {
          toast({
            title: '执行平安行动成功',
            ...toastConfig.ok,
          })
          mutate(`${baseURL}/api/pingan/daily`)
          mutate(`${baseURL}/api/pingan/tasks`)
        } else {
          const data = await res.json()
          Object.values(data).forEach(d => {
            toast({
              title: '执行平安行动失败',
              description: d as string,
              ...toastConfig.error,
            })
          })
        }
      })
      .catch((err: Error) => {
        console.log('COVID 19 Report Error -', err)
        toast({
          title: '执行平安行动失败',
          description: err.toString(),
          ...toastConfig.error,
        })
      })
  }

  return (
    <>
      <TaskButton
        color="green"
        icon={RiHealthBookFill}
        title="平安行动"
        description={'自动执行平安行动报备'}
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
          <ModalHeader pt="5" pb="3">
            平安行动
          </ModalHeader>
          <ModalCloseButton mx="2" my="0.5" top="4" right="4" />

          <ModalBody>
            <Button
              mb="4"
              isFullWidth
              colorScheme={status?.pingan_daily ? 'red' : 'green'}
              onClick={handlePingAn}
            >
              {!status?.pingan_daily
                ? '点击开启自动执行「平安行动」'
                : '点击关闭自动执行「平安行动」'}
            </Button>

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
              <>
                <Center
                  w="full"
                  h="full"
                  minH="25vh"
                  borderWidth="1px"
                  rounded="md"
                >
                  <Text color="gray.500" fontSize="lg">
                    暂无已请求的平安行动任务
                  </Text>
                </Center>
              </>
            ) : (
              <>
                <VStack
                  spacing="3"
                  w="full"
                  divider={<Divider />}
                  px="4"
                  py="3"
                  minH="25vh"
                  borderWidth="1px"
                  rounded="md"
                  maxH="50vh"
                  overflow="auto"
                >
                  {tasks.map((task, index) => (
                    <Wrap w="full" key={index} align="start">
                      <WrapItem>
                        <Badge
                          colorScheme={statusColorMap[task.status]}
                          px="1.5"
                          py="0.5"
                          cursor="default"
                        >
                          {statusTextMap[task.status]}
                        </Badge>

                        <Text ms="3" fontSize="sm" fontWeight="600">
                          {dateFormatter({ date: task.created })}
                        </Text>
                      </WrapItem>
                      <WrapItem>
                        <Text overflowWrap="break-word" fontSize="sm">
                          {task.additional_info}
                        </Text>
                      </WrapItem>
                    </Wrap>
                  ))}
                </VStack>
              </>
            )}

            <Button mt="4" isFullWidth onClick={handlePingAnOnce}>
              立即执行一次（{dayjs().format('YYYY-MM-DD')}）
            </Button>
          </ModalBody>
          <ModalFooter py="2"></ModalFooter>
        </ModalContent>
      </Modal>
    </>
  )
}

export default COVID19Report
