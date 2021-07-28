import { Input, VStack } from '@chakra-ui/react'

const CourseListFilter = () => {
  return (
    <VStack as="form" align="start" py="0.5">
      <Input
        type="search"
        placeholder="搜索课程名和课程 ID"
        bg="white"
        _dark={{ bg: 'gray.800' }}
      />
    </VStack>
  )
}

export default CourseListFilter
