import {
  Button,
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
import { RiLockLine, RiLockPasswordLine } from 'react-icons/ri'
import { useFetcher } from 'remix'
import { ResponseToast } from '~/components/common/actions/ResponseToast'
import { Input } from '~/components/common/Input'
import { ListButton } from '~/components/common/ListButton'
import type { IResponse, MemberType } from '~/types'
import { PasswordRegexText } from '~/utils/system'

export const ChangePassword = () => {
  const fetcher = useFetcher<IResponse<MemberType>>()

  const action = fetcher.data
  const isLoading = fetcher.state !== 'idle'
  const isDone = fetcher.state === 'loading'

  const { isOpen, onOpen, onClose } = useDisclosure()
  const initialRef = useRef<HTMLInputElement>(null)

  return (
    <>
      <ResponseToast action={action} state={isDone} />
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
          <ModalHeader fontSize="lg" pt="6" pb="6" px="7">
            修改密码
          </ModalHeader>
          <ModalCloseButton right="6" top="5" />

          <ModalBody py="0">
            <VStack
              as={fetcher.Form}
              method="post"
              id="change-password"
              action="/member/change-password?index"
              align="flex-start"
              spacing="4"
            >
              <Input
                ref={initialRef}
                name="old-password"
                placeholder="旧密码"
                type="password"
                autoComplete="old-password"
                isInvalid={action?.error?.includes('旧密码')}
                icon={RiLockPasswordLine}
              />
              <Input
                name="new-password"
                placeholder="新密码"
                type="password"
                help="8 到 24 个字符，且不能为纯数字"
                autoComplete="new-password"
                minLength={8}
                maxLength={24}
                pattern={PasswordRegexText}
                isInvalid={action?.error?.includes('新密码')}
                icon={RiLockPasswordLine}
              />
              <Input
                name="new-password-again"
                placeholder="再次输入新密码"
                type="password"
                autoComplete="new-password"
                minLength={8}
                maxLength={24}
                pattern={PasswordRegexText}
                isInvalid={action?.error?.includes('重复新密码')}
                icon={RiLockPasswordLine}
              />
            </VStack>
          </ModalBody>

          <ModalFooter py="6">
            <Button
              type="submit"
              form="change-password"
              colorScheme="green"
              mr="4"
              isLoading={isLoading}
            >
              修改
            </Button>
            <Button onClick={onClose}>取消</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  )
}
