import { useState, useRef, MouseEvent } from 'react'
import {
  Button,
  AlertDialog,
  AlertDialogOverlay,
  AlertDialogContent,
  AlertDialogHeader,
  AlertDialogBody,
  AlertDialogFooter,
} from '@chakra-ui/react'
import useHEUUnbindToast from '../../../../hooks/useToast/useHEUUnbindToast'
import { mutate } from 'swr'
import { useRouter } from 'next/router'

const ProfileUnbind = () => {
  const toast = useHEUUnbindToast()
  const [isOpen, setIsOpen] = useState(false)
  const onClose = () => setIsOpen(false)
  const cancelRef = useRef<HTMLButtonElement>(null)

  const baseURL = process.env.NEXT_PUBLIC_BASE_API_URL

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
          toast.ok()
          mutate(`${baseURL}/api/user/${name}`)
          onClose()
        } else {
          const data = await res.json()
          Object.values(data).forEach(d => {
            const t = d as string
            toast.error(t)
          })
        }
      })
      .catch((err: Error) => {
        console.log('HEU Unbind Error -', err)
        toast.error(err.toString())
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
