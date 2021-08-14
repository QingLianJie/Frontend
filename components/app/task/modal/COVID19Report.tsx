import {
  Badge,
  Button,
  Center,
  Divider,
  HStack,
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
  Tooltip,
  useDisclosure,
  useToast,
  VStack,
} from '@chakra-ui/react'
import { useRouter } from 'next/router'
import { MouseEvent, useEffect } from 'react'
import { RiHealthBookFill } from 'react-icons/ri'
import { mutate } from 'swr'
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

  const baseURL = process.env.NEXT_PUBLIC_BASE_API_URL

  useEffect(() => {
    if (router.isReady) {
      const hash = window.location.hash
      if (hash === '#covid-19-report') {
        onOpen()
      }
    }
  }, [onOpen, router])

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
        console.log('Teaching Evaluation Error -', err)
        toast({
          title:
            (!status.pingan_daily ? '启用' : '取消') + '自动执行平安行动失败',
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
        title="每日平安"
        description={'自动执行每日平安'}
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
            每日平安
          </ModalHeader>
          <ModalCloseButton mx="2" my="0.5" top="4" right="4" />

          <ModalBody>
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
                <Text pb="4">
                  当前{' '}
                  <strong>{status?.pingan_daily ? '已启用' : '未启用'}</strong>{' '}
                  自动执行平安行动。
                </Text>
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
              <VStack
                spacing="2.5"
                w="full"
                divider={<Divider />}
                px="3"
                py="2.5"
                minH="25vh"
                borderWidth="1px"
                rounded="md"
              >
                {tasks.map((task, index) => (
                  <HStack spacing="4" w="full" key={index}>
                    <Tooltip
                      hasArrow
                      fontSize="md"
                      px="3"
                      py="1.5"
                      rounded="md"
                      arrowSize={15}
                      gutter={15}
                      isDisabled={task.additional_info === ''}
                      placement="top"
                      label={
                        task.additional_info === ''
                          ? '暂无提示'
                          : task.additional_info
                      }
                    >
                      <Badge
                        colorScheme={statusColorMap[task.status]}
                        px="1.5"
                        py="0.5"
                        cursor="default"
                      >
                        {statusTextMap[task.status]}
                      </Badge>
                    </Tooltip>
                    <Text ms="3" fontSize="sm" fontWeight="600">
                      {dateFormatter({ date: task.created })}
                    </Text>
                  </HStack>
                ))}
              </VStack>
            )}
          </ModalBody>

          <ModalFooter pt="2" pb="6">
            <Button mr={3} onClick={onClose}>
              取消
            </Button>
            <Button
              colorScheme={status?.pingan_daily ? 'red' : 'green'}
              onClick={handlePingAn}
            >
              {!status?.pingan_daily ? '开启自动执行' : '关闭自动执行'}
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  )
}

export default COVID19Report
