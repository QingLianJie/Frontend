import {
  Avatar,
  Badge,
  Box,
  Button,
  ButtonGroup,
  HStack,
  Icon,
  Popover,
  PopoverArrow,
  PopoverContent,
  PopoverTrigger,
  Spacer,
  Text,
  useDisclosure,
  VStack,
} from '@chakra-ui/react'
import { RiDeleteBinLine, RiSpyLine, RiUserLine } from 'react-icons/ri'
import useUser from '../../../../../hooks/useUser'
import { dateFormatter } from '../../../../../utils/formatter'
import TextLink from '../../../../common/action/link/TextLink'

interface CourseCommentProps {
  lite?: boolean
  comment: ICourseComment
}

const CourseComment = ({ lite, comment }: CourseCommentProps) => {
  const { user } = useUser()
  const { onOpen, onClose, isOpen } = useDisclosure()

  return (
    <VStack align="start" w="full" p="0" spacing="3.5">
      <HStack w="full" spacing="3" px="0.5">
        <Avatar
          w="6"
          h="6"
          src={
            comment.anonymous
              ? undefined
              : comment.user.image
              ? `${process.env.NEXT_PUBLIC_BASE_AVATAR_URL}${comment.user.image}`
              : undefined
          }
          icon={
            comment.anonymous ? (
              <Icon as={RiSpyLine} w="60%" h="60%" />
            ) : (
              <Icon as={RiUserLine} w="60%" h="60%" />
            )
          }
          color="gray.500"
          bg="gray.200"
          _dark={{
            color: 'gray.400',
            bg: 'gray.700',
          }}
        />
        <Text w="full">
          {comment.anonymous ? (
            <Text
              as="span"
              whiteSpace="nowrap"
              color="gray.600"
              _dark={{
                color: 'gray.500',
              }}
              fontWeight="600"
            >
              {comment.user.username}
            </Text>
          ) : (
            <Text as="span" fontWeight="600">
              <TextLink href={`/@${comment.user.username}`}>
                {comment.user.username}
              </TextLink>
            </Text>
          )}

          {!lite && (
            <>
              <Text
                as="span"
                whiteSpace="nowrap"
                mx="2"
                color="gray.600"
                _dark={{
                  color: 'gray.500',
                }}
              >
                评论了课程
              </Text>
              <TextLink href={`/courses/${comment.course?.course_id}`}>
                {comment.course?.name}
              </TextLink>
            </>
          )}
        </Text>
        {comment.show && (
          <Badge px="1.5" py="0.5" ms="3" color="gray.500">
            成绩 {comment.score}
          </Badge>
        )}
      </HStack>
      <Box w="full" ps={lite ? '0' : { base: 0, md: 8 }}>
        <Box
          borderWidth="1px"
          rounded="md"
          py="4"
          px="6"
          w="full"
          bg="white"
          _dark={{
            bg: 'gray.800',
          }}
          role="group"
        >
          <Text
            as="pre"
            fontSize="lg"
            pt="0.5"
            pb="2"
            fontFamily="inherit"
            overflowWrap="break-word"
            whiteSpace="pre-wrap"
            lineHeight="1.75"
          >
            {comment.content}
          </Text>
          <HStack w="full">
            <Text
              as="time"
              fontSize="sm"
              color="gray.500"
              d="inline-block"
              pb="0.5"
              title={dateFormatter({ date: comment.created })}
            >
              {dateFormatter({ date: comment.created, calendar: true })}
            </Text>
            {user?.pk === comment.user.pk && (
              <>
                <Spacer />
                <Popover isOpen={isOpen} onOpen={onOpen} onClose={onClose}>
                  <PopoverTrigger>
                    <Button
                      visibility={isOpen ? 'visible' : 'hidden'}
                      opacity={isOpen ? '1' : '0'}
                      _groupHover={{ visibility: 'visible', opacity: '1' }}
                      _focus={{ visibility: 'visible', opacity: '1' }}
                      variant="link"
                      size="sm"
                      colorScheme="red"
                      fontWeight="400"
                    >
                      <Icon as={RiDeleteBinLine} me="2" />
                      删除评论
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent w="fit-content" p="4">
                    <PopoverArrow />
                    <Text px="1">确定删除吗？</Text>
                    <ButtonGroup size="sm" mt="3" w="full">
                      <HStack spacing="3" w="full">
                        <Button isFullWidth onClick={onClose}>
                          取消
                        </Button>
                        <Button colorScheme="red" isFullWidth>
                          删除
                        </Button>
                      </HStack>
                    </ButtonGroup>
                  </PopoverContent>
                </Popover>
              </>
            )}
          </HStack>
        </Box>
      </Box>
    </VStack>
  )
}

export default CourseComment
