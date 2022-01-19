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
import { useRef } from 'react'
import { RiLink, RiLockPasswordLine, RiUserLine } from 'react-icons/ri'
import { Form, useTransition } from 'remix'
import { Input } from '~/components/common/Input'
import { IconButton } from '~/components/common/IconButton'

export const BindHEU = () => {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const initialRef = useRef<HTMLInputElement>(null)

  const transition = useTransition()
  const isLoading = transition.state === 'submitting'

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
            <VStack
              as={Form}
              id="bind-account"
              method="post"
              align="flex-start"
              spacing="4"
            >
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
                icon={RiUserLine}
              />
              <Input
                name="password"
                placeholder="密码"
                type="password"
                autoComplete="current-password"
                icon={RiLockPasswordLine}
              />
            </VStack>
          </ModalBody>

          <ModalFooter py="6">
            <Button
              colorScheme="purple"
              mr="4"
              type="submit"
              form="bind-account"
              isLoading={isLoading}
            >
              绑定
            </Button>
            <Button onClick={onClose}>取消</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  )
}
