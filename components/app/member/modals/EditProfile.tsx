import {
  Box,
  Button,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Table,
  Tbody,
  Td,
  Tr,
  useDisclosure,
} from '@chakra-ui/react'

interface ProfileEditProps {
  profile: IProfile
}

const ProfileEdit = ({ profile }: ProfileEditProps) => {
  const { isOpen, onOpen, onClose } = useDisclosure()

  return (
    <>
      <Button colorScheme="blue" isFullWidth onClick={onOpen}>
        个人资料
      </Button>
      <Modal
        isCentered
        size="sm"
        isOpen={isOpen}
        onClose={onClose}
        motionPreset="slideInBottom"
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader pt="5" pb="3">
            个人资料
          </ModalHeader>
          <ModalCloseButton mx="2" my="0.5" top="4" right="4" />

          <ModalBody>
            <Box overflowX="auto">
              <Table>
                <Tbody>
                  <Tr>
                    <Td px="4" whiteSpace="nowrap">
                      用户 ID
                    </Td>
                    <Td px="4">{profile.pk}</Td>
                  </Tr>
                  <Tr>
                    <Td px="4" whiteSpace="nowrap">
                      用户邮箱
                    </Td>
                    <Td px="4">{profile.email || '未绑定邮箱'}</Td>
                  </Tr>
                  <Tr>
                    <Td px="4" border="none" whiteSpace="nowrap">
                      HEU 账号
                    </Td>
                    <Td px="4" border="none">
                      {profile.heu_username || '未绑定 HEU'}
                    </Td>
                  </Tr>
                </Tbody>
              </Table>
            </Box>
          </ModalBody>

          <ModalFooter pt="2" pb="6">
            <Button onClick={onClose}>取消</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  )
}

export default ProfileEdit
