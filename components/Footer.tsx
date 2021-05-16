import { Flex, Text } from '@chakra-ui/react'
import { IFooterProps } from '../next-env'

const Footer = ({ fill }: IFooterProps) => {
  return (
    <Flex
      as="footer"
      minH="24"
      px="4"
      py="6"
      flexDirection="column"
      alignItems="center"
      justifyContent="flex-end"
      flex={fill ? '1' : 'initial'}
    >
      <Text fontSize="md" color="gray.500" fontWeight="bold" py="4">
        Working In Progress
      </Text>
    </Flex>
  )
}

export default Footer
