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
import { RiLink, RiLinkUnlink, RiPercentLine, RiTimeLine } from 'react-icons/ri'
import { Card } from '~/components/common/containers/Card'

interface MemberProps extends SystemProps {}

export const Member = (props: MemberProps) => {
  const [isBind, setBind] = useState(false)

  return (
    <Card title="HEU 账号" {...props}>
      <VStack
        w="full"
        align="flex-start"
        px="4"
        pt="3"
        pb="4"
        spacing="3"
        divider={<Divider transition="all 0.2s" />}
      >
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

        <ButtonGroup w="full" gap="0">
          {isBind ? (
            <>
              <MemberButton
                color="green"
                icon={RiTimeLine}
                text="更新"
                long="更新数据"
              />
              <MemberButton
                color="red"
                icon={RiLinkUnlink}
                text="解绑"
                long="解绑账号"
                onClick={() => setBind(false)}
              />
            </>
          ) : (
            <>
              <MemberButton
                color="purple"
                icon={RiLink}
                text="绑定"
                long="绑定账号"
                onClick={() => setBind(true)}
              />
              <MemberButton
                color="orange"
                icon={RiPercentLine}
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

const MemberButton = ({
  icon,
  text,
  long,
  color,
  ...props
}: MemberButtonProps) => (
  <Button
    p="2"
    py="1"
    color={`${color}.500`}
    _hover={{
      color: `${color}.600`,
    }}
    _active={{
      color: `${color}.600`,
    }}
    _dark={{
      color: `${color}.400`,
      _hover: {
        color: `${color}.300`,
      },
      _active: {
        color: `${color}.300`,
      },
    }}
    variant="link"
    lineHeight="tall"
    rounded="sm"
    {...props}
  >
    <Icon aria-label={text} as={icon} mr="3" fontSize="lg" />
    <Text
      isTruncated
      fontSize="smd"
      d={{ base: 'none', sm: 'inline', xl: 'none' }}
    >
      {text}
    </Text>
    <Text
      isTruncated
      fontSize="smd"
      d={{ base: 'inline', sm: 'none', xl: 'inline' }}
    >
      {long}
    </Text>
  </Button>
)
