import {
  Button,
  ButtonProps,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  useDisclosure,
  VStack,
  Text,
} from '@chakra-ui/react'
import { FC, useRef } from 'react'
import { RiLockPasswordLine, RiUserLine } from 'react-icons/ri'
import { Input } from '~/components/common/forms/Input'

interface BindHEUModalProps {
  children: FC<ButtonProps>
}

export const BindHEUModal = ({ children }: BindHEUModalProps) => {
  const Action = children

  const { isOpen, onOpen, onClose } = useDisclosure()
  const initialRef = useRef<HTMLInputElement>(null)

  return (
    <>
      <Action onClick={onOpen} />
      <Modal
        initialFocusRef={initialRef}
        isOpen={isOpen}
        onClose={onClose}
        size="xs"
        isCentered
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
                ref={initialRef}
                placeholder="学号"
                type="text"
                icon={RiUserLine}
              />
              <Input
                placeholder="密码"
                type="password"
                icon={RiLockPasswordLine}
              />
            </VStack>
          </ModalBody>

          <ModalFooter py="6">
            <Button colorScheme="purple" mr="4" onClick={onClose}>
              绑定
            </Button>
            <Button onClick={onClose}>取消</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  )
}
