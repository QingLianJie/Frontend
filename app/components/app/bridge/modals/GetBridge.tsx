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
  Text,
  Spacer,
  Link,
} from '@chakra-ui/react'
import { useRef } from 'react'
import { RiPercentLine } from 'react-icons/ri'
import { IconButton } from '~/components/common/IconButton'

export const GetBridgeModal = () => {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const initialRef = useRef<HTMLInputElement>(null)

  return (
    <>
      <IconButton
        color="orange"
        icon={RiPercentLine}
        text="获取插件"
        onClick={onOpen}
      />
      <Modal
        initialFocusRef={initialRef}
        isOpen={isOpen}
        onClose={onClose}
        size="sm"
        isCentered
      >
        <ModalOverlay />
        <ModalContent _dark={{ bg: 'gray.800' }} mx="4">
          <ModalHeader fontSize="lg" pt="6" pb="5" px="7">
            获取插件和 App
          </ModalHeader>
          <ModalCloseButton right="6" top="5" />

          <ModalBody py="0">
            <VStack align="flex-start" spacing="4">
              <Text px="1" lineHeight="tall" fontSize="smd">
                插件和 App 可以实现对学校数据的本地请求和解析，所有 HEU
                账号数据（账号、密码、成绩等）将不会经过「清廉街」的服务器。
              </Text>
              <Text px="1" lineHeight="tall" fontSize="smd">
                如果不安装插件或
                App，网站默认将使用「清廉街」的服务器进行请求和解析，但我们不会储存相关数据，你可以选择上传成绩来补充数据库。
              </Text>
            </VStack>
          </ModalBody>

          <ModalFooter py="6">
            <Button
              mr="4"
              as={Link}
              href="https://yuque.com/lifeni/qing/app"
              isExternal
              _hover={{
                textDecor: 'none',
              }}
            >
              插件
            </Button>
            <Button
              mr="4"
              as={Link}
              href="https://yuque.com/lifeni/qing/extension"
              isExternal
              _hover={{
                textDecor: 'none',
              }}
            >
              App
            </Button>
            <Spacer />
            <Button onClick={onClose}>关闭</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  )
}
