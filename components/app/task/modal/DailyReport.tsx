import {
  Button,
  Center,
  FormControl,
  FormLabel,
  HStack,
  Input,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Spinner,
  Switch,
  Text,
  useDisclosure,
  useToast,
  VStack,
} from '@chakra-ui/react'
import dayjs from 'dayjs'
import { useState } from 'react'
import { RiGalleryUploadFill } from 'react-icons/ri'
import { mutate } from 'swr'
import useDailyReport from '../../../../hooks/useDailyReport'
import useUser from '../../../../hooks/useUser'
import { toastConfig } from '../../../../utils/config/toast'
import TaskButton from '../../../common/action/button/TaskButton'

const DailyReport = () => {
  const toast = useToast()
  const { user, isError: isUserError, isLoading: isUserLoading } = useUser()
  const { isOpen, onOpen, onClose } = useDisclosure()
  const { tasks, isLoading, isError } = useDailyReport()
  const [time, setTime] = useState('')

  const baseURL = process.env.NEXT_PUBLIC_BASE_API_URL

  const handleReport = (once?: boolean) => {
    fetch(once ? `${baseURL}/api/report` : `${baseURL}/api/report/task`, {
      method: 'POST',
      body: once
        ? undefined
        : JSON.stringify({
            time: time,
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
          mutate(`${baseURL}/api/tasks`)
          mutate(`${baseURL}/api/pingjiao`)
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
        console.log('Teaching Evaluation Error -', err)
        toast({
          title: '请求报备失败',
          description: err.toString(),
          ...toastConfig.error,
        })
      })
  }

  return (
    <>
      {isLoading ? null : isError ? null : (
        <TaskButton
          color="yellow"
          icon={RiGalleryUploadFill}
          title="每日报备"
          description="每日 00:05 自动执行当天报备"
          action={onOpen}
          disabled={isUserLoading || isUserError || !user?.heu_username}
        />
      )}

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
            报备
          </ModalHeader>
          <ModalCloseButton mx="2" my="0.5" top="4" right="4" />

          <ModalBody>
            <FormControl isDisabled>
              <HStack
                spacing="4"
                w="full"
                align="center"
                justify="space-between"
              >
                <FormLabel htmlFor="report-daily" whiteSpace="nowrap" m="0">
                  每天都报备
                </FormLabel>
                <Switch id="report-daily" size="md" isDisabled />
              </HStack>
            </FormControl>
            {isError ? (
              <Center w="full" h="full" minH="25vh">
                <Text color="gray.500" fontSize="lg">
                  数据加载失败
                </Text>
              </Center>
            ) : isLoading ? (
              <Center w="full" h="full" minH="25vh">
                <Spinner thickness="4px" color="pink.400" size="xl" />
              </Center>
            ) : tasks.length === 0 ? (
              <Center w="full" h="full" minH="25vh">
                <Text color="gray.500" fontSize="lg">
                  暂无已请求的报备任务
                </Text>
              </Center>
            ) : (
              <></>
            )}
            <VStack spacing="4">
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
            </VStack>
          </ModalBody>

          <ModalFooter py="2"></ModalFooter>
        </ModalContent>
      </Modal>
    </>
  )
}

export default DailyReport
