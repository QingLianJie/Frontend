import {
  Button,
  Flex,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  useDisclosure,
  useToast,
} from '@chakra-ui/react'
import { useRouter } from 'next/router'
import { MouseEvent, useState } from 'react'
import { RiLockPasswordFill } from 'react-icons/ri'
import { toastConfig } from '../../../../utils/config/toast'
import { passwordRegex } from '../../../../utils/regex'
import FormInput from '../../../common/form/input/FormInput'

const ProfileChangePassword = () => {
  const toast = useToast()
  const { isOpen, onOpen, onClose } = useDisclosure()
  const [oldPassword, setOldPassword] = useState('')
  const [newPassword, setNewPassword] = useState('')
  const [newPasswordAgain, setNewPasswordAgain] = useState('')

  const baseURL = process.env.NEXT_PUBLIC_BASE_API_URL

  const router = useRouter()

  const checkPassword = () => {
    if (!passwordRegex.test(newPassword)) {
      toast({
        title: '密码不合适',
        description: '密码需要包含至少 8 个字符，并且不能是纯数字',
        ...toastConfig.warn,
      })
      return false
    }
    return true
  }

  const handleUpdate = (e: MouseEvent) => {
    e.preventDefault()
    if (checkPassword()) {
      fetch(`${baseURL}/rest-auth/password/change/`, {
        method: 'POST',
        body: JSON.stringify({
          new_password1: newPassword,
          new_password2: newPasswordAgain,
          old_password: oldPassword,
        }),
        headers: {
          'content-type': 'application/json',
        },
        mode: 'cors',
        credentials: 'include',
      })
        .then(async res => {
          if (res.ok) {
            toast({
              title: '修改密码成功，请重新登陆',
              ...toastConfig.ok,
            })
            router.push('/login')
            onClose()
          } else {
            const data = await res.json()
            Object.values(data).forEach(d => {
              toast({
                title: '修改密码失败',
                description: d as string,
                ...toastConfig.error,
              })
            })
          }
        })
        .catch((err: Error) => {
          console.log('Change Password Error -', err)
          toast({
            title: '修改密码失败',
            description: err.toString(),
            ...toastConfig.error,
          })
        })
    }
  }

  return (
    <>
      <Button isFullWidth colorScheme="blue" onClick={onOpen}>
        修改密码
      </Button>
      <Modal
        isCentered
        size="xs"
        isOpen={isOpen}
        onClose={onClose}
        motionPreset="slideInBottom"
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader pt="5" pb="3">
            修改密码
          </ModalHeader>
          <ModalCloseButton mx="2" my="0.5" top="4" right="4" />

          <ModalBody>
            <Flex flexDir="column" as="form">
              <FormInput
                placeholder="旧密码"
                type="password"
                icon={RiLockPasswordFill}
                name="old-password"
                action={e => setOldPassword(e.target.value)}
              />
              <FormInput
                placeholder="新密码"
                type="password"
                icon={RiLockPasswordFill}
                name="new-password"
                action={e => setNewPassword(e.target.value)}
                help="8 到 24 个字符，且不能为纯数字"
              />
              <FormInput
                type="password"
                placeholder="再次输入新密码"
                icon={RiLockPasswordFill}
                name="new-password-again"
                action={e => setNewPasswordAgain(e.target.value)}
              />
            </Flex>
          </ModalBody>

          <ModalFooter pt="2" pb="6">
            <Button mr={3} onClick={onClose}>
              取消
            </Button>
            <Button
              colorScheme="blue"
              onClick={handleUpdate}
              disabled={
                !oldPassword ||
                !newPassword ||
                !newPasswordAgain ||
                oldPassword === newPassword ||
                newPasswordAgain !== newPassword
              }
            >
              {!oldPassword || !newPassword || !newPasswordAgain
                ? '修改密码'
                : oldPassword === newPassword
                ? '新旧密码不能相同'
                : newPasswordAgain !== newPassword
                ? '两次输入不相同'
                : '修改密码'}
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  )
}

export default ProfileChangePassword
