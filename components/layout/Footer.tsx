import { Button, Container, Flex, Spacer, Text } from '@chakra-ui/react'
import { BASE_API_URL } from '../../data/api-config'

const Footer = () => {
  const handleApiUrl = () => {
    const url = window.prompt('输入自定义的 API 地址', BASE_API_URL)
    window.localStorage.setItem('BASE_URL', url || '')
    window.location.reload()
  }

  return (
    <Flex as="footer" px={{ base: 6, md: 8, lg: 12 }} py="8">
      <Container
        w="full"
        maxW="container.xl"
        mx="auto"
        d="flex"
        px={{ base: 0, md: 4 }}
        alignItems="center"
        gap="4"
        flexWrap="wrap"
      >
        <Text fontSize="sm" color="gray.500">
          清廉街 © 2021
        </Text>
        <Button
          variant="link"
          fontSize="sm"
          color="gray.500"
          fontWeight="normal"
          lineHeight="inherit"
          p="0"
          _hover={{ textDecor: 'none' }}
          onClick={handleApiUrl}
        >
          自定义 API 地址
        </Button>
        <Spacer />
        <Text
          as="a"
          fontSize="sm"
          color="gray.500"
          _hover={{ color: 'blue.500' }}
          href="https://beian.miit.gov.cn/"
          target="_blank"
          rel="noopener noreferrer"
        >
          黑ICP备2021003925号-1
        </Text>
      </Container>
    </Flex>
  )
}

export default Footer
