import {
  HStack,
  Popover,
  PopoverArrow,
  PopoverBody,
  PopoverContent,
  PopoverTrigger,
  Text,
  VStack,
} from '@chakra-ui/react'
import type { ReactNode } from 'react'
import { calcRate } from '~/utils/math'

interface CourseCardProps {
  course: ICourse
  children: ReactNode
}

export const CourseCard = ({ course, children }: CourseCardProps) => (
  <Popover trigger="hover" isLazy={true} placement="top-start">
    <PopoverTrigger>{children}</PopoverTrigger>
    <PopoverContent shadow="xl" _dark={{ bg: 'gray.800' }}>
      <PopoverArrow _dark={{ borderColor: 'gray.800' }} />
      <PopoverBody py="4" px="5">
        <VStack w="full" align="flex-start" spacing="1">
          <HStack w="full" justify="space-between" pb="2">
            <Text fontWeight="bold">{course.name}</Text>
            <Text fontSize="sm" color="gray.500" _dark={{ color: 'gray.400' }}>
              {course.id}
            </Text>
          </HStack>
          <HStack w="full" justify="flex-start" spacing="3" fontSize="sm">
            <Text>{course.type}</Text>
            <Text>{course.test}</Text>
            <Text>{course.category}</Text>
          </HStack>
          <HStack w="full" justify="flex-start" spacing="3" fontSize="sm">
            <Text>学分：{course.credit}</Text>
            <Text>学时：{course.period}</Text>
          </HStack>
          <HStack w="full" justify="flex-start" spacing="3" fontSize="sm">
            <Text>
              优秀率：
              <Text
                as="strong"
                color="green.500"
                _dark={{ color: 'green.400' }}
              >
                {calcRate(
                  course.statistics.excellent / course.statistics.total
                )}
              </Text>
            </Text>
            <Text>
              挂科率：
              <Text as="strong" color="red.500" _dark={{ color: 'red.400' }}>
                {calcRate(course.statistics.fail / course.statistics.total)}
              </Text>
            </Text>
          </HStack>
        </VStack>
      </PopoverBody>
    </PopoverContent>
  </Popover>
)
