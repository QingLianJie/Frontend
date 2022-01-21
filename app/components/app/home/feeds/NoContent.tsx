import { ButtonGroup, Divider, Flex, Text, VStack } from '@chakra-ui/react'
import { useEffect, useState } from 'react'
import { RiLoginBoxLine, RiRefreshLine } from 'react-icons/ri'
import { useLoaderData } from 'remix'
import { Card } from '~/components/common/Card'
import { IconButton } from '~/components/common/IconButton'
import version from '~/version.json'

export const NoContent = () => {
  const { error } = useLoaderData()
  const [message, setMessage] = useState<string[]>([])

  useEffect(
    () =>
      setMessage([
        `Dat. ${new Date().toISOString()}`,
        `Ver. ${version.version}` || 'Unknown Verison',
        `Age. ${navigator.userAgent}`,
        `Loc. ${location.href}`,
        `Int. ${localStorage.getItem('自定义 API 地址') || 'No Custom API'}`,
        `Scr. ${screen.width}x${screen.height} ${devicePixelRatio * 100}% ${
          screen.orientation.type
        }`,
        `Err. ${error || 'Unknown Error'}`,
      ]),
    []
  )

  const handleCustomAPI = () => {
    const url = prompt('请输入自定义 API 地址，如 http://localhost:8080')
    if (url) {
      localStorage.setItem('自定义 API 地址', url)
      location.reload()
    }
  }

  return (
    <>
      <Card title="出现问题！">
        <VStack
          align="flex-start"
          w="full"
          m="0"
          px="4"
          pt="3"
          pb="4"
          spacing="3"
          lineHeight="tall"
        >
          <Text px="2" lineHeight="tall" fontSize="smd" textAlign="justify">
            这里曾经有一些课程评论，但是现在什么都没有。可能是因为无法连接到服务器，所以请检查「网站坏掉了吗」页面，或者使用「自定义
            API」连接到自定义服务器。
          </Text>

          <ButtonGroup w="full" gap="2" p="1" pt="2">
            <IconButton
              text="刷新页面"
              icon={RiRefreshLine}
              fontSize="smd"
              onClick={() => location.reload()}
            />
            <IconButton
              text="自定义 API"
              icon={RiLoginBoxLine}
              fontSize="smd"
              onClick={handleCustomAPI}
            />
          </ButtonGroup>
        </VStack>
      </Card>

      <Card title="调试信息">
        <Flex pt="3" pb="6" px="6" fontFamily="mono" fontSize="sm">
          {message.length !== 0 ? (
            <VStack
              as="ul"
              align="flex-start"
              w="full"
              spacing="0.5"
              lineHeight="tall"
            >
              {message.map(item => (
                <Text
                  as="li"
                  key={item}
                  listStyleType="none"
                  overflowWrap="break-word"
                >
                  - {item}
                </Text>
              ))}
            </VStack>
          ) : (
            <Text>- Loading ...</Text>
          )}
        </Flex>
      </Card>
    </>
  )
}
