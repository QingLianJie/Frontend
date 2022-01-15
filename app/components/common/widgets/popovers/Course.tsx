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

interface CoursePopoverProps {
  course: ICourse
  children: ReactNode
}

export const CoursePopover = ({ course, children }: CoursePopoverProps) => (
  <Popover trigger="hover" placement="top-start" strategy="fixed">
    <PopoverTrigger>{children}</PopoverTrigger>
    <PopoverContent
      shadow="xl"
      _dark={{ bg: 'gray.800', shadow: 'dark-lg' }}
      zIndex="3000"
    >
      <PopoverArrow _dark={{ bg: 'inherit !important' }} />
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
