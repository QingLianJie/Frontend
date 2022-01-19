import {
  Button,
  Input,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  useDisclosure,
  VStack,
} from '@chakra-ui/react'
import { useRef } from 'react'
import { RiLockLine, RiLockPasswordLine, RiUserLine } from 'react-icons/ri'
import { Form, useFetcher } from 'remix'
import { ListButton } from '~/components/common/ListButton'
import type { MemberType, IResponse } from '~/types'

export const ChangePassword = () => {
  const fetcher = useFetcher<IResponse<MemberType>>()
  const isLoading = fetcher.state !== 'idle'

  const { isOpen, onOpen, onClose } = useDisclosure()
  const initialRef = useRef<HTMLInputElement>(null)

  return (
    <>
      <ListButton
        text="修改密码"
        icon={RiLockLine}
        color="green"
        disabled={isLoading}
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
            修改密码
          </ModalHeader>
          <ModalCloseButton right="6" top="5" />

          <ModalBody py="0">
            <VStack align="flex-start" spacing="4"></VStack>
          </ModalBody>

          <ModalFooter py="6">
            <Button colorScheme="green" mr="4" isLoading={isLoading}>
              修改
            </Button>
            <Button onClick={onClose}>取消</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  )
}
