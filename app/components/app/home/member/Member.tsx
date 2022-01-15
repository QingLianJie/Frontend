import {
  Button,
  ButtonGroup,
  ButtonProps,
  Divider,
  Icon,
  SystemProps,
  Text,
  VStack,
} from '@chakra-ui/react'
import { useState } from 'react'
import type { IconType } from 'react-icons'
import { RiLinkM, RiLinkUnlinkM, RiPlugLine, RiTimeLine } from 'react-icons/ri'
import { Card } from '~/components/common/containers/Card'

interface MemberProps extends SystemProps {}

export const Member = (props: MemberProps) => {
  const [isBind, setBind] = useState(false)

  return (
    <Card title="HEU 账号" {...props}>
      <VStack w="full" align="flex-start" px="4" pt="3" pb="4" spacing="3">
        {isBind ? (
          <Text px="2" lineHeight="tall">
            已绑定到：<Text as="strong">20180000XX</Text>
            <br />
            <Text as="span" fontSize="sm" pt="0.5">
              数据最后更新：今天 20:30
            </Text>
          </Text>
        ) : (
          <Text px="2" lineHeight="tall">
            欢迎来到 <Text as="strong">清廉街</Text>，这台设备还没有绑定 HEU
            账号。
          </Text>
        )}
        <Divider pt="1" transition="all 0.2s" />
        <ButtonGroup w="full" variant="ghost" isAttached>
          {isBind ? (
            <>
              <MemberButton
                colorScheme="green"
                icon={RiTimeLine}
                text="更新"
                long="更新数据"
              />
              <Divider h="9" orientation="vertical" transition="all 0.2s" />
              <MemberButton
                colorScheme="red"
                icon={RiLinkUnlinkM}
                text="解绑"
                long="解绑账号"
                onClick={() => setBind(false)}
              />
            </>
          ) : (
            <>
              <MemberButton
                colorScheme="purple"
                icon={RiLinkM}
                text="绑定"
                long="绑定账号"
                onClick={() => setBind(true)}
              />
              <Divider h="9" orientation="vertical" transition="all 0.2s" />
              <MemberButton
                colorScheme="orange"
                icon={RiPlugLine}
                text="插件"
                long="获取插件"
              />
            </>
          )}
        </ButtonGroup>
      </VStack>
    </Card>
  )
}

interface MemberButtonProps extends ButtonProps {
  icon: IconType
  text: string
  long?: string
}

const MemberButton = ({ icon, text, long, ...props }: MemberButtonProps) => (
  <Button isFullWidth py="2" h="auto" {...props}>
    <Icon
      aria-label={text}
      as={icon}
      ml="-2"
      mr="2"
      fontSize="xl"
      d={{
        md: 'none',
        lg: 'flex',
      }}
    />
    <Text isTruncated d={{ base: 'none', sm: 'inline' }}>
      {text}
    </Text>
    <Text isTruncated d={{ base: 'inline', sm: 'none' }}>
      {long}
    </Text>
  </Button>
)
