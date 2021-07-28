import { Button, Checkbox, Fade, Input, Select, VStack } from '@chakra-ui/react'
import { useRouter } from 'next/router'
import { FormEvent, useEffect, useState } from 'react'
import { courseQuery } from '../../../../../data/course-query'
import useUser from '../../../../../hooks/useUser'
import NumberInput from '../../../../common/form/input/NumberInput'

interface CourseListFilterProps {
  action: (query: CourseFilter) => void
}

const CourseListFilter = ({ action }: CourseListFilterProps) => {
  const router = useRouter()
  const { user } = useUser()

  const [search, setSearch] = useState('')
  const [type, setType] = useState('')
  const [assessment, setAssessment] = useState('')
  const [courseClass, setCourseClass] = useState('')
  const [credit, setCredit] = useState('')
  const [time, setTime] = useState('')
  const [learned, setLearned] = useState('false')

  useEffect(() => {
    if (router.isReady) {
      const search = String(router.query.search || '')
      const type = String(router.query.attributes || '')
      const assessment = String(router.query.assessment_method || '')
      const courseClass = String(router.query.kind || '')
      const credit = String(router.query.credit || '')
      const time = String(router.query.total_time || '')
      const learned = String(router.query.learned || 'false')

      setSearch(search)
      setType(type)
      setAssessment(assessment)
      setCourseClass(courseClass)
      setCredit(credit)
      setTime(time)
      setLearned(learned)
      console.log(learned, learned === 'true')

      const query: CourseFilter = {
        search: search,
        attributes: type,
        assessment_method: assessment,
        kind: courseClass,
        credit: credit,
        total_time: time,
        learned: learned,
      }
      for (const key in query) {
        if (query[key as keyof CourseFilter] === '') {
          delete query[key as keyof CourseFilter]
        }
      }

      action(query)
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [router.isReady])

  const handleFilter = (e?: FormEvent) => {
    e?.preventDefault()
    const query: CourseFilter = {
      search: search,
      attributes: type,
      assessment_method: assessment,
      kind: courseClass,
      credit: credit,
      total_time: time,
      learned: learned,
    }
    for (const key in query) {
      if (query[key as keyof CourseFilter] === '') {
        delete query[key as keyof CourseFilter]
      }
    }

    action(query)
  }

  const handleClear = () => {
    setSearch('')
    setType('')
    setAssessment('')
    setCourseClass('')
    setCredit('')
    setTime('')
    setLearned('false')
    action({})
  }

  return router.isReady ? (
    <Fade in>
      <VStack as="form" align="start" spacing="4" onSubmit={handleFilter}>
        <Input
          type="search"
          placeholder="输入课程名或课程 ID"
          bg="white"
          _dark={{ bg: 'gray.800' }}
          value={search}
          onChange={e => setSearch(e.target.value)}
        />

        <Select
          placeholder="未选择类型"
          bg="white"
          _dark={{ bg: 'gray.800' }}
          value={type}
          onChange={e => setType(e.target.value)}
        >
          {courseQuery.type.map((value, index) => (
            <option value={value} key={index}>
              {value}
            </option>
          ))}
        </Select>

        <Select
          placeholder="未选择考核方式"
          bg="white"
          _dark={{ bg: 'gray.800' }}
          value={assessment}
          onChange={e => setAssessment(e.target.value)}
        >
          {courseQuery.assessment.map((value, index) => (
            <option value={value} key={index}>
              {value}
            </option>
          ))}
        </Select>

        <Select
          placeholder="未选择分类"
          bg="white"
          _dark={{ bg: 'gray.800' }}
          value={courseClass}
          onChange={e => setCourseClass(e.target.value)}
        >
          {courseQuery.class.map((value, index) => (
            <option value={value} key={index}>
              {value}
            </option>
          ))}
        </Select>

        <NumberInput
          addon="学分"
          placeholder="输入学分数"
          min={0}
          max={10}
          step={0.5}
          value={credit}
          action={(_, num) => setCredit(num.toString())}
        />

        <NumberInput
          addon="学时"
          placeholder="输入学时数"
          min={0}
          max={200}
          step={1}
          value={time}
          action={(_, num) => setTime(num.toString())}
        />

        {user?.heu_username && (
          <Checkbox
            value="learn"
            spacing="3"
            isChecked={learned === 'true'}
            onChange={e => setLearned(e.target.checked ? 'true' : 'false')}
          >
            只看我学过的
          </Checkbox>
        )}

        <Button type="submit" colorScheme="red" isFullWidth>
          搜索课程
        </Button>

        <Button type="button" isFullWidth onClick={handleClear}>
          清除搜索条件
        </Button>
      </VStack>
    </Fade>
  ) : null
}

export default CourseListFilter
