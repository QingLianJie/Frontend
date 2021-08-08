import {
  Badge,
  Checkbox,
  CheckboxGroup,
  FormControl,
  FormLabel,
  Input,
  Text,
  VStack,
} from '@chakra-ui/react'
import { Dispatch, SetStateAction, useEffect, useState } from 'react'
import { useDebounce } from 'use-debounce'
import { calcCourseList } from '../../../../utils/calc/profile-comments'

interface CourseCommentFilterProps {
  profile: IProfile | undefined
  setComments: Dispatch<SetStateAction<ICourseComment[] | undefined>>
  setLoading: Dispatch<SetStateAction<boolean>>
}

const CourseCommentFilter = ({
  profile,
  setComments,
  setLoading,
}: CourseCommentFilterProps) => {
  const [search, setSearch] = useState('')
  const [debounceSearch] = useDebounce(search, 300)
  const [identity, setIdentity] = useState<(string | number)[]>([])
  const [course, setCourse] = useState<(string | number)[]>([])

  useEffect(() => {
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
    }, 0)

    setComments(
      profile?.comments.filter(comment => {
        if (debounceSearch !== '') {
          if (!comment.content.includes(debounceSearch)) {
            return false
          }
        }

        if (identity.length !== 0) {
          if (
            (identity.includes('normal') &&
              !identity.includes('anonymous') &&
              comment.anonymous) ||
            (identity.includes('anonymous') &&
              !identity.includes('normal') &&
              !comment.anonymous)
          )
            return false
        }

        if (comment.course && course.length !== 0) {
          if (!course.includes(comment.course.course_id)) return false
        }

        return true
      })
    )

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [debounceSearch, identity, course, profile])

  return (
    <VStack align="start" spacing="3">
      <Input
        type="search"
        placeholder="搜索评论内容"
        bg="white"
        _dark={{ bg: 'gray.800' }}
        onChange={e => setSearch(e.target.value)}
      />

      {profile?.self && (
        <FormControl>
          <FormLabel py="3">按身份筛选</FormLabel>
          <CheckboxGroup onChange={e => setIdentity(e)}>
            <VStack align="start" spacing="4">
              <Checkbox value="normal" spacing="3">
                以
                <Text as="span" fontWeight="600">
                  &nbsp;{profile?.username}&nbsp;
                </Text>
                身份评论的
              </Checkbox>
              <Checkbox value="anonymous" spacing="3">
                以
                <Text as="span" fontWeight="600">
                  &nbsp;匿名&nbsp;
                </Text>
                身份评论的
              </Checkbox>
            </VStack>
          </CheckboxGroup>
        </FormControl>
      )}

      <FormControl>
        <FormLabel py="3">按课程筛选</FormLabel>
        <CheckboxGroup onChange={e => setCourse(e)}>
          <VStack align="start" spacing="4">
            {profile &&
              calcCourseList(profile.comments).map((course, index) => (
                <Checkbox
                  value={course.course.course_id}
                  key={index}
                  spacing="3"
                >
                  {course.course.name}
                  <Badge as="span" px="1.5" py="0.5" ms="2">
                    {course.count}
                  </Badge>
                </Checkbox>
              ))}
          </VStack>
        </CheckboxGroup>
      </FormControl>
    </VStack>
  )
}

export default CourseCommentFilter
