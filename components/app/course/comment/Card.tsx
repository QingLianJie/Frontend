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
  useToast,
  VStack,
} from '@chakra-ui/react'
import { useEffect, useRef, useState } from 'react'
import {
  RiArrowDropDownLine,
  RiArrowDropUpLine,
  RiDeleteBinLine,
  RiSpyLine,
  RiUserLine,
} from 'react-icons/ri'
import { mutate } from 'swr'
import { BASE_API_URL, BASE_AVATAR_URL } from '../../../../data/api-config'
import { toastConfig } from '../../../../utils/config/toast'
import { dateFormatter } from '../../../../utils/formatter'
import TextLink from '../../../common/action/link/TextLink'

interface CourseCommentProps {
  lite?: boolean
  comment: ICourseComment
  url?: string
}

const CourseComment = ({ lite, comment, url }: CourseCommentProps) => {
  const toast = useToast()
  const contentRef = useRef<(HTMLPreElement & HTMLParagraphElement) | null>(
    null
  )
  const { onOpen, onClose, isOpen } = useDisclosure()
  const [expand, setExpand] = useState(false)
  const [more, setMore] = useState(false)

  const baseURL = BASE_API_URL

  useEffect(() => {
    if (contentRef.current) {
      const height = parseInt(getComputedStyle(contentRef.current).height)
      const lineHeight = parseInt(
        getComputedStyle(contentRef.current).lineHeight
      )

      if (height > lineHeight * 3) {
        setMore(true)
      }
    }
  }, [])

  const handleRemoveComment = () => {
    fetch(`${baseURL}/api/comment/${comment.id}`, {
      method: 'DELETE',
      mode: 'cors',
      credentials: 'include',
    })
      .then(async res => {
        if (res.ok) {
          toast({
            title: '删除评论成功',
            ...toastConfig.ok,
          })
          if (url) mutate(url)
          onClose()
        } else {
          const data = await res.json()
          Object.values(data).forEach(d => {
            toast({
              title: '删除评论失败',
              description: d as string,
              ...toastConfig.error,
            })
          })
        }
      })
      .catch((err: Error) => {
        console.log('Course Comment Error -', err)
        toast({
          title: '删除评论失败',
          description: err.toString(),
          ...toastConfig.error,
        })
      })
  }

  return (
    <VStack align="start" w="full" p="0" spacing="3.5">
      <HStack w="full" spacing="3" px="0.5">
        <Avatar
          name={
            !comment.user.image ? '' : comment?.user?.username || '用户头像'
          }
          size="xs"
          src={
            comment.anonymous
              ? undefined
              : comment.user.image
              ? `${BASE_AVATAR_URL}${comment.user.image}`
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
              {comment.self && '（我）'}
            </Text>
          ) : (
            <Text as="span" fontWeight="600">
              <TextLink href={`/@${comment.user.username}`}>
                {comment.user.username}
                {comment.self && '（我）'}
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
          tabIndex={0}
        >
          <Text
            ref={contentRef}
            as="pre"
            pos="relative"
            fontSize="lg"
            pb="2"
            fontFamily="inherit"
            overflowWrap="break-word"
            whiteSpace="pre-wrap"
            lineHeight="1.75"
            noOfLines={expand ? undefined : 3}
          >
            {comment.content}
          </Text>
          {more && (
            <Text
              fontSize="sm"
              color="purple.500"
              _dark={{ color: 'purple.300' }}
              pb="2"
              cursor="pointer"
              d="flex"
              alignItems="center"
              onClick={() => setExpand(!expand)}
            >
              {expand ? '收起' : '展开'}
              {expand ? (
                <Icon as={RiArrowDropUpLine} w="5" h="5" />
              ) : (
                <Icon as={RiArrowDropDownLine} w="5" h="5" />
              )}
            </Text>
          )}
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
            {comment.self && (
              <>
                <Spacer />
                <Popover isOpen={isOpen} onOpen={onOpen} onClose={onClose}>
                  <PopoverTrigger>
                    <Button
                      visibility={isOpen ? 'visible' : 'hidden'}
                      opacity={isOpen ? '1' : '0'}
                      _groupHover={{ visibility: 'visible', opacity: '1' }}
                      _groupFocus={{ visibility: 'visible', opacity: '1' }}
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
                        <Button
                          colorScheme="red"
                          isFullWidth
                          onClick={handleRemoveComment}
                        >
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
