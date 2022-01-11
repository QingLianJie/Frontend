import {
  Button,
  ButtonGroup,
  ButtonProps,
  Divider,
  Icon,
  Text,
  VStack,
} from '@chakra-ui/react'
import type { IconType } from 'react-icons'
import { RiLoginBoxLine, RiRefreshLine } from 'react-icons/ri'
import { HomeCard } from '~/components/common/containers/HomeCard'

export const NoContent = () => {
  const handleCustomAPI = () => {
    const url = prompt('请输入自定义 API 地址，如 http://localhost:8080')
    if (url) {
      localStorage.setItem('自定义 API 地址', url)
      location.reload()
    }
  }

  return (
    <HomeCard title="出现问题">
      <VStack
        align="flex-start"
        w="full"
        m="0"
        px="4"
        pt="3"
        pb="4"
        spacing="4"
        lineHeight="tall"
      >
        <Text px="2">
          这里什么都没有，可能是因为无法连接到「清廉街」。请检查网络连接和「清廉街」运行状态，或者使用「自定义
          API」进行连接。
        </Text>
        <Divider transition="all 0.2s" />
        <ButtonGroup w="full" px="2" pb="1" size="sm" gap="4">
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
    </HomeCard>
  )
}

interface NoContentButtonProps extends ButtonProps {
  text: string
  icon: IconType
}

const NoContentButton = ({ text, icon, ...props }: NoContentButtonProps) => (
  <Button
    variant="link"
    rounded="none"
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
    <Icon as={icon} aria-label={text} mr="3" fontSize="md" />
    {text}
  </Button>
)
