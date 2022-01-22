import { Center, Heading, Text } from '@chakra-ui/react'
import type { MetaFunction } from 'remix'

export const meta: MetaFunction = () => ({
  title: '404 - 清廉街',
})

export default function MemberLayout() {
  return (
    <Center flexDir="column" flex="1">
      <Heading
        as="h1"
        px="12"
        pt="12"
        pb={{ base: '4', sm: '6' }}
        fontSize={{ base: '3xl', sm: '4xl' }}
        fontFamily="mono"
      >
        404 Not Found
      </Heading>
      <Text fontSize={{ base: 'xl', sm: '2xl' }}>你找的页面不见了</Text>
    </Center>
  )
}
