import {
  Button,
  ButtonGroup,
  ButtonProps,
  Divider,
  Flex,
  Icon,
  Text,
  VStack,
} from '@chakra-ui/react'
import { useEffect, useState } from 'react'
import type { IconType } from 'react-icons'
import { RiLoginBoxLine, RiRefreshLine } from 'react-icons/ri'
import { Card } from '~/components/common/containers/Card'
import version from '~/version.json'

export const NoContent = () => {
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
          divider={<Divider transition="all 0.2s" />}
        >
          <Text px="2" lineHeight="tall" textAlign="justify">
            这里曾经有一些课程评论，但是现在什么都没有。可能是因为无法连接到「清廉街」的服务器，所以请检查「网站坏掉了吗」页面，或者使用「自定义
            API」进行连接。
          </Text>

          <ButtonGroup w="full" gap="2" p="1">
            <NoContentButton
              onClick={() => location.reload()}
              text="刷新页面"
              icon={RiRefreshLine}
            />
            <NoContentButton
              onClick={handleCustomAPI}
              text="自定义 API"
              icon={RiLoginBoxLine}
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

interface NoContentButtonProps extends ButtonProps {
  text: string
  icon: IconType
}

const NoContentButton = ({ text, icon, ...props }: NoContentButtonProps) => (
  <Button
    variant="link"
    p="1"
    py="0"
    rounded="sm"
    fontSize="smd"
    lineHeight="tall"
    color="gray.500"
    _hover={{
      color: 'gray.700',
    }}
    _dark={{
      color: 'gray.400',
      _hover: {
        color: 'gray.200',
      },
    }}
    {...props}
  >
    <Icon as={icon} aria-label={text} mr="3" fontSize="lg" />
    {text}
  </Button>
)
