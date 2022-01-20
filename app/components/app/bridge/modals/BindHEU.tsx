import {
  Button,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Text,
  useDisclosure,
  VStack,
} from '@chakra-ui/react'
import { useKeyPress } from 'ahooks'
import localforage from 'localforage'
import { useContext, useRef, useState } from 'react'
import { RiLink, RiLockPasswordLine, RiUserLine } from 'react-icons/ri'
import { IconButton } from '~/components/common/IconButton'
import { Input } from '~/components/common/Input'
import { useResponseToast } from '~/utils/hooks'
import { encodeBase64 } from '~/utils/system'
import { BridgeContext } from '../Bridge'

export const BindHEU = () => {
  const [id, setId] = useState<string>('')
  const [password, setPassword] = useState<string>('')

  const { isOpen, onOpen, onClose } = useDisclosure()
  const initialRef = useRef<HTMLInputElement>(null)

  const toast = useResponseToast<ResponseType>()
  const { setId: setContextId } = useContext(BridgeContext)

  const handleBind = async () => {
    await localforage.setItem('account', {
      id: encodeBase64(id),
      password: encodeBase64(password),
    })
    setContextId(encodeBase64(id))
    toast({ status: '可以', title: '已绑定 HEU 账号到此设备' })
    onClose()
  }

  const ref = useRef<HTMLButtonElement>(null)
  useKeyPress(['enter'], e => {
    if (isOpen) {
      e.preventDefault()
      ref.current?.click()
    }
  })

  return (
    <>
      <IconButton
        color="purple"
        icon={RiLink}
        text="绑定账号"
        onClick={onOpen}
      />

      <Modal
        initialFocusRef={initialRef}
        isOpen={isOpen}
        onClose={onClose}
        size="xs"
        isCentered
        blockScrollOnMount={false}
      >
        <ModalOverlay />
        <ModalContent _dark={{ bg: 'gray.800' }}>
          <ModalHeader fontSize="lg" pt="6" pb="5" px="7">
            绑定 HEU 账号
          </ModalHeader>
          <ModalCloseButton right="6" top="5" />

          <ModalBody py="0">
            <VStack align="flex-start" spacing="4">
              <Text
                px="1"
                lineHeight="tall"
                fontSize="sm"
                color="gray.500"
                _dark={{ color: 'gray.400' }}
              >
                账号和密码将会保存在浏览器中，解绑后会自动删除，也可以自行手动删除。
              </Text>

              <Input
                name="id"
                ref={initialRef}
                placeholder="学号"
                type="text"
                autoComplete="username"
                value={id}
                onChange={e => setId(e.target.value)}
                icon={RiUserLine}
              />
              <Input
                name="password"
                placeholder="密码"
                type="password"
                autoComplete="current-password"
                value={password}
                onChange={e => setPassword(e.target.value)}
                icon={RiLockPasswordLine}
              />
            </VStack>
          </ModalBody>

          <ModalFooter py="6">
            <Button ref={ref} colorScheme="purple" mr="4" onClick={handleBind}>
              绑定
            </Button>
            <Button onClick={onClose}>取消</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  )
}
