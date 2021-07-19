import {
  Box,
  Button,
  Checkbox,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Text,
  useBoolean,
  useDisclosure,
} from '@chakra-ui/react'
import { useRouter } from 'next/router'
import { MouseEvent, useState } from 'react'
import { RiLockPasswordFill, RiUserFill } from 'react-icons/ri'
import { mutate } from 'swr'
import useHEUBindToast from '../../../../hooks/useToast/useHEUBindToast'
import FormInput from '../../../common/form/input/FormInput'

const ProfileBind = () => {
  const toast = useHEUBindToast()
  const { isOpen, onOpen, onClose } = useDisclosure()
  const [isRead, setRead] = useBoolean(false)
  const [name, setName] = useState('')
  const [password, setPassword] = useState('')

  const baseURL = process.env.NEXT_PUBLIC_BASE_API_URL

  const router = useRouter()
  const username = router.asPath.replace(/[\/@]|[\/@\/]/g, '')

  const handleBind = (e: MouseEvent) => {
    e.preventDefault()

    const formdata = new FormData()
    formdata.append('heu_username', name)
    formdata.append('heu_password', password)

    fetch(`${baseURL}/api/HEUAccount`, {
      method: 'POST',
      body: formdata,
      mode: 'cors',
      credentials: 'include',
    })
      .then(async res => {
        if (res.ok) {
          toast.ok()
          mutate(`${baseURL}/api/user/${username}`)
          onClose()
          setRead.off()
        } else {
          const data = await res.json()
          Object.values(data).forEach(d => {
            const t = d as string
            toast.error(t)
          })
        }
      })
      .catch((err: Error) => {
        console.log('HEU Bind Error -', err)
        toast.error(err.toString())
      })
  }

  return (
    <>
      <Button isFullWidth colorScheme="green" onClick={onOpen}>
        绑定 HEU 账号
      </Button>
      <Modal
        isCentered
        size="xs"
        isOpen={isOpen}
        onClose={() => {
          onClose()
          setRead.off()
        }}
        motionPreset="slideInBottom"
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader pt="5" pb="3">
            绑定 HEU 账号
          </ModalHeader>
          <ModalCloseButton />

          <ModalBody>
            <Text mb="3">
              绑定 HEU 账号即意味着&nbsp;
              <strong>您同意提供 HEU 账号以统计成绩信息</strong>，「清廉街」保证
              HEU 账号仅做统计用途，您可以随时解绑账号。
            </Text>
            <Text>
              另外，由于统计需要，用户所绑定的 HEU 账号和密码会以&nbsp;
              <strong>明文</strong>
              &nbsp;的方式存储在数据库中。
            </Text>
            <Checkbox
              my="3"
              onChange={e => (e.target.checked ? setRead.on() : setRead.off())}
            >
              我明白了，确认绑定。
            </Checkbox>
            <Box>
              <FormInput
                placeholder="HEU 账号（学号）"
                type="text"
                icon={RiUserFill}
                name="heu-username"
                action={e => setName(e.target.value)}
                disabled={!isRead}
              />
              <FormInput
                type="password"
                placeholder="密码"
                icon={RiLockPasswordFill}
                name="heu-password"
                action={e => setPassword(e.target.value)}
                disabled={!isRead}
              />
            </Box>
          </ModalBody>

          <ModalFooter pt="2" pb="6">
            <Button
              mr={3}
              onClick={() => {
                onClose()
                setRead.off()
              }}
            >
              取消
            </Button>
            <Button colorScheme="green" onClick={handleBind} disabled={!isRead}>
              绑定
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  )
}

export default ProfileBind
