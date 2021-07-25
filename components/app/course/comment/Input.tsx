import {
  Button,
  ButtonGroup,
  Divider,
  HStack,
  Icon,
  IconButton,
  Select,
  Spacer,
  Textarea,
  Tooltip,
  VStack,
} from '@chakra-ui/react'
import { useState } from 'react'
import { RiSpyLine } from 'react-icons/ri'
import { mutate } from 'swr'
import useCourse from '../../../../hooks/useCourse'
import useCourseCommentToast from '../../../../hooks/useToast/useCourseCommentToast'

interface CourseCommentInputProps {
  id: string
}

const CourseCommentInput = ({ id }: CourseCommentInputProps) => {
  const toast = useCourseCommentToast()
  const { courseInfo } = useCourse(id)
  const [comment, setComment] = useState('')
  const [score, setScore] = useState('')

  const baseURL = process.env.NEXT_PUBLIC_BASE_API_URL

  const handlePostComment = (anonymous: boolean) => {
    fetch(`${baseURL}/api/course/${courseInfo.course_id}/comments`, {
      method: 'POST',
      body: JSON.stringify({
        content: comment,
        anonymous: anonymous,
        show: score !== '',
        score: score,
      }),
      headers: {
        'content-type': 'application/json',
      },
      mode: 'cors',
      credentials: 'include',
    })
      .then(async res => {
        if (res.ok) {
          toast.ok()
          mutate(`${baseURL}/api/course/${courseInfo.course_id}`)
        } else {
          const data = await res.json()
          Object.values(data).forEach(d => {
            const t = d as string
            toast.error(t)
          })
        }
      })
      .catch((err: Error) => {
        console.log('Course Comment Error -', err)
        toast.error(err.toString())
      })
  }

  return (
    <VStack
      as="form"
      name="comment-input"
      align="start"
      spacing="3"
      onSubmit={e => e.preventDefault()}
    >
      <Textarea
        resize="vertical"
        placeholder="在此输入评论"
        bg="white"
        _dark={{ bg: 'gray.800' }}
        py="3"
        px="4"
        minH="6rem"
        onChange={e => setComment(e.target.value)}
        required
      />
      <HStack w="full" spacing="3">
        <Select
          placeholder={courseInfo?.my_scores ? '不展示成绩' : '无成绩'}
          maxW="44"
          onChange={e => setScore(e.target.value)}
          disabled={!courseInfo?.my_scores}
        >
          {courseInfo?.my_scores?.map((score, index) => (
            <option key={index} value={score}>
              成绩：{score}
            </option>
          ))}
        </Select>
        <Spacer />
        <ButtonGroup isAttached>
          <Button
            colorScheme="blue"
            type="submit"
            name="comment-input"
            onClick={() => handlePostComment(false)}
          >
            发布评论
          </Button>
          <Tooltip
            label="点击以匿名发布"
            aria-label="点击以匿名发布"
            hasArrow
            fontSize="md"
            px="3"
            py="1.5"
            rounded="md"
            arrowSize={15}
            gutter={15}
          >
            <IconButton
              aria-label="匿名发布"
              colorScheme="facebook"
              icon={<Icon as={RiSpyLine} w="50%" h="50%" />}
              type="submit"
              onClick={() => handlePostComment(true)}
            />
          </Tooltip>
        </ButtonGroup>
      </HStack>
      <Divider />
    </VStack>
  )
}

export default CourseCommentInput
