import {
  AlertDialog,
  AlertDialogBody,
  AlertDialogContent,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogOverlay,
  Button,
  useToast,
} from '@chakra-ui/react'
import { useRouter } from 'next/router'
import { MouseEvent, useRef, useState } from 'react'
import { mutate } from 'swr'
import { BASE_API_URL } from '../../../../data/api-config'
import { toastConfig } from '../../../../utils/config/toast'

const ProfileUnbind = () => {
  const toast = useToast()
  const [isOpen, setIsOpen] = useState(false)
  const onClose = () => setIsOpen(false)
  const cancelRef = useRef<HTMLButtonElement>(null)

  const baseURL = BASE_API_URL

  const router = useRouter()
  const name = router.asPath.replace(/[\/@]|[\/@\/]/g, '')

  const handleUnbind = (e: MouseEvent) => {
    e.preventDefault()

    fetch(`${baseURL}/api/HEUAccount`, {
      method: 'DELETE',
      mode: 'cors',
      credentials: 'include',
    })
      .then(async res => {
        if (res.ok) {
          toast({
            title: '解绑成功',
            ...toastConfig.ok,
          })
          mutate(`${baseURL}/api/user`)
          mutate(`${baseURL}/api/profile/${name}`)
          onClose()
        } else {
          const data = await res.json()
          Object.values(data).forEach(d => {
            toast({
              title: '解绑失败',
              description: d as string,
              ...toastConfig.error,
            })
          })
        }
      })
      .catch((err: Error) => {
        console.log('HEU Unbind Error -', err)
        toast({
          title: '解绑失败',
          description: err.toString(),
          ...toastConfig.error,
        })
      })
  }

  return (
    <>
      <Button colorScheme="red" isFullWidth onClick={() => setIsOpen(true)}>
        解绑 HEU 账号
      </Button>

      <AlertDialog
        isCentered
        size="xs"
        isOpen={isOpen}
        leastDestructiveRef={cancelRef}
        onClose={onClose}
        motionPreset="slideInBottom"
      >
        <AlertDialogOverlay>
          <AlertDialogContent>
            <AlertDialogHeader fontSize="lg" fontWeight="bold" pt="5" pb="3">
              解除绑定 HEU 账号
            </AlertDialogHeader>

            <AlertDialogBody>
              解除绑定 HEU 账号同时将删除服务器储存的相关账号信息。
            </AlertDialogBody>

            <AlertDialogFooter pt="2" pb="6">
              <Button ref={cancelRef} onClick={onClose}>
                取消
              </Button>
              <Button colorScheme="red" onClick={handleUnbind} ml={3}>
                解除绑定
              </Button>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialogOverlay>
      </AlertDialog>
    </>
  )
}

export default ProfileUnbind
