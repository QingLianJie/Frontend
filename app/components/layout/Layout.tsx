import { Alert, CloseButton, Flex, Link, Text } from '@chakra-ui/react'
import { ReactNode, useState } from 'react'
import { Footer } from './Footer'
import { Header } from './header/Header'

interface LayoutProps {
  title?: string
  isCenter?: boolean
  children: ReactNode
}

export const Layout = ({ title, isCenter, children }: LayoutProps) => {
  const [hideAlert, setHideAlert] = useState(false)

  return (
    <Flex
      pt="20"
      minH="100vh"
      flexDir="column"
      align="center"
      justify="start"
      bg="gray.100"
      _dark={{
        bg: 'gray.900',
      }}
      transition="all 0.2s"
    >
      <Header title={title} />
      <Flex
        as="main"
        w="full"
        flexDir="column"
        align="center"
        justify={isCenter ? 'center' : 'flex-start'}
        flex="1"
        pt="2"
      >
        {children}
      </Flex>
      <Footer />
      <Alert
        pos="fixed"
        top="0"
        left="0"
        justifyContent="center"
        fontSize="sm"
        py="2"
        status="info"
        variant="solid"
        zIndex="99999"
        d={hideAlert ? 'none' : 'flex'}
      >
        <Text lineHeight="tall">
          这是开发中的网站，还不能用，请访问{' '}
          <Link href="https://qinglianjie.cn" isExternal mx="1">
            qinglianjie.cn
          </Link>{' '}
          来正常使用
        </Text>
        <CloseButton
          onClick={() => setHideAlert(true)}
          size="sm"
          position="absolute"
          right="2"
          top="2"
        />
      </Alert>
    </Flex>
  )
}
