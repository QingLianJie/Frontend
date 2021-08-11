import {
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
  useDisclosure,
  useToast,
  VStack,
} from '@chakra-ui/react'
import { useRouter } from 'next/router'
import { MouseEvent, useEffect } from 'react'
import { RiQuillPenFill } from 'react-icons/ri'
import { mutate } from 'swr'
import useTeachingEvaluation from '../../../../hooks/useTeachingEvaluation'
import useUser from '../../../../hooks/useUser'
import { toastConfig } from '../../../../utils/config/toast'
import TaskButton from '../../../common/action/button/TaskButton'

const TeachingEvaluation = () => {
  const toast = useToast()
  const router = useRouter()
  const { user, isError: isUserError, isLoading: isUserLoading } = useUser()
  const { isOpen, onOpen, onClose } = useDisclosure()
  const { todos, isLoading, isError } = useTeachingEvaluation()

  const baseURL = process.env.NEXT_PUBLIC_BASE_API_URL

  useEffect(() => {
    if (router.isReady) {
      const hash = window.location.hash
      if (hash === '#teaching-evaluation') {
        onOpen()
      }
    }
  }, [onOpen, router])

  const handlePingJiao = (e: MouseEvent) => {
    e.preventDefault()

    fetch(`${baseURL}/api/pingjiao`, {
      method: 'POST',
      mode: 'cors',
      credentials: 'include',
    })
      .then(async res => {
        if (res.ok) {
          toast({
            title: '评教成功',
            ...toastConfig.ok,
          })
          mutate(`${baseURL}/api/tasks`)
          mutate(`${baseURL}/api/pingjiao`)
        } else {
          const data = await res.json()
          Object.values(data).forEach(d => {
            toast({
              title: '评教失败',
              description: d as string,
              ...toastConfig.error,
            })
          })
        }
      })
      .catch((err: Error) => {
        console.log('Teaching Evaluation Error -', err)
        toast({
          title: '评教失败',
          description: err.toString(),
          ...toastConfig.error,
        })
      })
  }

  return (
    <>
      <TaskButton
        color="orange"
        icon={RiQuillPenFill}
        title="一键评教"
        description={
          !todos || todos.todo.length === 0
            ? '暂无需要评教的课程'
            : '自动执行评教'
        }
        action={onOpen}
        disabled={isUserLoading || isUserError || !user?.heu_username}
      />

      <Modal
        isCentered
        size="sm"
        isOpen={isOpen}
        onClose={onClose}
        motionPreset="slideInBottom"
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader pt="5" pb="3">
            未评教课程
          </ModalHeader>
          <ModalCloseButton mx="2" my="0.5" top="4" right="4" />

          <ModalBody>
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
            ) : todos.todo.length === 0 ? (
              <Center w="full" h="full" minH="25vh">
                <Text color="gray.500" fontSize="lg">
                  暂无需要评教的课程
                </Text>
              </Center>
            ) : (
              <VStack spacing="3" w="full" divider={<Divider />}>
                {todos.todo.map((todo, index) => (
                  <Text key={index} w="full">
                    {todo}
                  </Text>
                ))}
              </VStack>
            )}
          </ModalBody>

          <ModalFooter pt="2" pb="6">
            <Button mr={3} onClick={onClose}>
              取消
            </Button>
            <Button
              colorScheme="orange"
              onClick={handlePingJiao}
              disabled={!todos || todos.todo.length === 0}
            >
              一键评教
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  )
}

export default TeachingEvaluation
