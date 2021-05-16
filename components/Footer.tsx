import { Flex, Text } from '@chakra-ui/react'
import { IFooterProps } from '../next-env'

const Footer = ({ fill }: IFooterProps) => {
  return (
    <Flex
      as="footer"
      minH="24"
      px="4"
      py="8"
      alignItems="flex-end"
      justifyContent="space-between"
      flex={fill ? '1' : 'initial'}
      flexWrap="wrap"
    >
      <Text
        fontSize="sm"
        color="gray.500"
        fontWeight="bold"
        py="1"
        lineHeight="1.75"
      >
        Working In Progress
      </Text>
      <Text
        fontSize="sm"
        color="gray.500"
        fontWeight="bold"
        py="1"
        lineHeight="1.75"
      >
        当前为测试版本，不代表最终成果
      </Text>
    </Flex>
  )
}

export default Footer
