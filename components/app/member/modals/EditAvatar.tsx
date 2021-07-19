import {
  AspectRatio,
  Avatar,
  Box,
  Button,
  FormControl,
  FormLabel,
  HStack,
  Icon,
  Input,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Stat,
  StatHelpText,
  StatLabel,
  StatNumber,
  Text,
  Tooltip,
  useDisclosure,
  VStack,
} from '@chakra-ui/react'
import 'cropperjs/dist/cropper.css'
import { ChangeEvent, useState } from 'react'
import Cropper from 'react-cropper'
import { RiRefreshLine, RiUserLine } from 'react-icons/ri'
import { mutate } from 'swr'
import useAvatarToast from '../../../../hooks/useToast/useAvatarToast'
import { sizeFormatter } from '../../../../utils/formatter'

interface ProfileEditProps {
  user: IUser
}

type ImageInfo = { size: number; type: string }

const fileType = ['image/jpeg', 'image/png', 'image/webp']

const ProfileEditAvatar = ({ user }: ProfileEditProps) => {
  const toast = useAvatarToast()
  const { isOpen, onOpen, onClose } = useDisclosure()
  const [image, setImage] = useState<string | ArrayBuffer | null>(null)
  const [imageInfo, setImageInfo] = useState<ImageInfo>({ size: 0, type: '' })
  const [cropper, setCropper] = useState<Cropper | null>(null)

  const handleFileChange = (e: ChangeEvent) => {
    const target = e.target as HTMLInputElement
    if (target.files && target.files[0]) {
      const file = target.files[0]
      setImageInfo({ size: file.size, type: file.type })

      const reader = new FileReader()
      reader.onload = () => {
        setImage(reader.result)
      }
      reader.readAsDataURL(file)
    }
  }

  const verifyFileSize = (size: number) => size <= 2 * 1024 * 1024
  const verifyFileType = (type: string) => fileType.includes(type)

  const baseURL = process.env.NEXT_PUBLIC_BASE_API_URL

  const handleAvatarUpload = () => {
    if (cropper) {
      cropper.getCroppedCanvas().toBlob(blob => {
        if (blob) {
          const formdata = new FormData()
          formdata.append('image', blob)

          fetch(`${baseURL}/api/user/profile/photo`, {
            method: 'POST',
            body: formdata,
            mode: 'cors',
            credentials: 'include',
          })
            .then(async res => {
              if (res.ok) {
                toast.ok()
                mutate(`${baseURL}/api/user`)
                mutate(`${baseURL}/api/user/${user.username}`)
                onClose()
                setImage(null)
                setCropper(null)
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
      })
    }
  }

  return (
    <>
      <Tooltip
        hasArrow
        label="编辑头像"
        aria-label="编辑头像"
        fontSize="md"
        px="3"
        py="1.5"
        rounded="md"
        arrowSize={15}
        gutter={15}
      >
        <AspectRatio
          ratio={1}
          maxW="65vw"
          mx="auto"
          cursor="pointer"
          onClick={onOpen}
        >
          <Avatar
            bg="gray.100"
            icon={<RiUserLine size="50%" />}
            src={
              user?.image
                ? `${process.env.NEXT_PUBLIC_BASE_AVATAR_URL}${user.image}`
                : undefined
            }
            size="full"
            mx="1"
            color="gray.400"
            _dark={{
              color: 'white',
              bg: 'gray.700',
            }}
          />
        </AspectRatio>
      </Tooltip>
      <Modal
        isCentered
        size="sm"
        isOpen={isOpen}
        onClose={() => {
          onClose()
          setImage(null)
          setCropper(null)
        }}
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader pt="5" pb="3">
            编辑头像
          </ModalHeader>
          <ModalCloseButton />

          <ModalBody>
            <VStack align="start" spacing="3">
              <FormControl>
                <FormLabel d="flex" flexDir="column" mx="0">
                  {image ? (
                    <Button
                      as="span"
                      color="gray.500"
                      userSelect="none"
                      d="flex"
                      alignItems="center"
                      isFullWidth
                      cursor="pointer"
                    >
                      <Icon as={RiRefreshLine} w="5" h="5" me="3" />
                      重新上传图片
                    </Button>
                  ) : (
                    <Box
                      w="full"
                      rounded="md"
                      d="flex"
                      alignItems="center"
                      justifyContent="center"
                      borderWidth="1px"
                      cursor="pointer"
                      _hover={{
                        borderColor: 'blue.500',
                      }}
                      transition="all 0.2s"
                    >
                      <VStack px="8" py={image ? '3' : '8'} spacing="3">
                        <Text fontSize="lg" color="gray.500" userSelect="none">
                          点击此处上传图片
                        </Text>
                        <Text
                          fontSize="sm"
                          color="gray.500"
                          textAlign="center"
                          userSelect="none"
                        >
                          支持 JPG | PNG | WebP 格式，最大大小为
                          2MB，不合适的图片会被删除
                        </Text>
                      </VStack>
                    </Box>
                  )}
                </FormLabel>

                <Input
                  type="file"
                  d="none"
                  name="image"
                  accept="image/jpeg, image/png, image/webp"
                  onChange={handleFileChange}
                />
              </FormControl>

              {image && (
                <>
                  <Box w="full" cursor="pointer" rounded="md" overflow="hidden">
                    <Cropper
                      src={image as string}
                      initialAspectRatio={1}
                      aspectRatio={1}
                      guides={false}
                      onInitialized={instance => {
                        setCropper(instance)
                      }}
                      viewMode={1}
                      minCropBoxHeight={10}
                      minCropBoxWidth={10}
                      background={false}
                      responsive={false}
                      autoCropArea={1}
                      checkOrientation={false}
                    />
                  </Box>

                  <HStack spacing="6" pt="3">
                    <Stat>
                      <StatLabel>图片格式</StatLabel>
                      <StatNumber whiteSpace="nowrap">
                        {imageInfo.type}
                      </StatNumber>
                      {verifyFileType(imageInfo.type) ? (
                        <StatHelpText>图片格式符合要求</StatHelpText>
                      ) : (
                        <StatHelpText color="red.500" fontWeight="600">
                          图片格式不对
                        </StatHelpText>
                      )}
                    </Stat>
                    <Stat>
                      <StatLabel>图片大小</StatLabel>
                      <StatNumber whiteSpace="nowrap">
                        {sizeFormatter(imageInfo.size)}
                      </StatNumber>
                      {verifyFileSize(imageInfo.size) ? (
                        <StatHelpText>图片大小符合要求</StatHelpText>
                      ) : (
                        <StatHelpText color="red.500" fontWeight="600">
                          图片过大
                        </StatHelpText>
                      )}
                    </Stat>
                  </HStack>
                </>
              )}
            </VStack>
          </ModalBody>

          <ModalFooter pt="2" pb="6">
            <Button
              onClick={() => {
                onClose()
                setImage(null)
                setCropper(null)
              }}
              mr={3}
            >
              取消
            </Button>
            <Button
              onClick={handleAvatarUpload}
              colorScheme="blue"
              disabled={
                !image ||
                !verifyFileSize(imageInfo.size) ||
                !verifyFileType(imageInfo.type)
              }
            >
              保存
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  )
}

export default ProfileEditAvatar
