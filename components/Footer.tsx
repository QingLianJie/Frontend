import { Flex, Text } from '@chakra-ui/react'
import { IFooterProps } from '../next-env'

const Footer = ({ fill }: IFooterProps) => {
  return (
    <Flex
      as="footer"
      px="12"
      py="8"
      alignItems="flex-end"
      justifyContent="center"
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
    </Flex>
  )
}

export default Footer
