import { Button, Icon, Input, Select, VStack } from '@chakra-ui/react'
import { useEffect } from 'react'
import { RiEraserLine, RiSearchLine } from 'react-icons/ri'
import { Form, useTransition } from 'remix'
import { Card } from '~/components/common/Card'
import { NumberInput } from '~/components/common/NumberInput'
import { courseType } from '~/contents/courses/query'

export const Filter = () => {
  const transition = useTransition()

  useEffect(() => {
    if (transition.state === 'submitting') {
      const session = sessionStorage.getItem('search-history')
      const arr = session ? JSON.parse(session) : []
      sessionStorage.setItem(
        'search-history',
        JSON.stringify([transition.submission.action, ...arr])
      )
    }
  }, [transition])

  return (
    <Card title="筛选课程">
      <VStack
        as={Form}
        method="get"
        w="full"
        align="flex-start"
        px="5"
        pt="3"
        pb="5"
        spacing="3"
      >
        <Input
          type="search"
          name="name"
          placeholder="输入课程名或课程 ID"
          bg="white"
          _dark={{ bg: 'gray.800' }}
          size="sm"
          transition="all 0.2s"
          rounded="md"
        />

        <Select
          name="type"
          placeholder="课程类型"
          bg="white"
          _dark={{ bg: 'gray.800' }}
          size="sm"
          rounded="md"
          transition="all 0.2s"
        >
          {courseType.type.map((value, index) => (
            <option value={value} key={index}>
              {value}
            </option>
          ))}
        </Select>

        <Select
          name="test"
          placeholder="考核方式"
          bg="white"
          _dark={{ bg: 'gray.800' }}
          size="sm"
          rounded="md"
          transition="all 0.2s"
        >
          {courseType.test.map((value, index) => (
            <option value={value} key={index}>
              {value}
            </option>
          ))}
        </Select>

        <Select
          name="category"
          placeholder="课程分类"
          bg="white"
          _dark={{ bg: 'gray.800' }}
          size="sm"
          rounded="md"
          transition="all 0.2s"
        >
          {courseType.category.map((value, index) => (
            <option value={value} key={index}>
              {value}
            </option>
          ))}
        </Select>

        <NumberInput
          name="credit"
          addon="学分"
          placeholder="输入学分数"
          min={0}
          max={10}
          step={0.5}
          rounded="md"
          size="sm"
        />

        <NumberInput
          name="period"
          addon="学时"
          placeholder="输入学时数"
          min={0}
          max={200}
          step={1}
          rounded="md"
          size="sm"
        />

        <Button
          type="submit"
          colorScheme="red"
          isFullWidth
          size="sm"
          pr="6"
          leftIcon={<Icon as={RiSearchLine} aria-label="搜索" fontSize="smd" />}
          iconSpacing="3"
        >
          搜索课程
        </Button>
        <Button
          type="reset"
          isFullWidth
          size="sm"
          pr="6"
          leftIcon={<Icon as={RiEraserLine} aria-label="清空" fontSize="smd" />}
          iconSpacing="3"
        >
          重置筛选
        </Button>
      </VStack>
    </Card>
  )
}
