import type { ButtonProps, SystemProps } from '@chakra-ui/react'
import {
  Button,
  ButtonGroup,
  Divider,
  Icon,
  Text,
  VStack,
} from '@chakra-ui/react'
import { useState } from 'react'
import type { IconType } from 'react-icons'
import { RiLinkM, RiLinkUnlinkM, RiPlugLine, RiTimeLine } from 'react-icons/ri'
import { HomeCard } from '~/libs/common/containers/HomeCard'

interface HomeMemberProps extends SystemProps {}

export const HomeMember = (props: HomeMemberProps) => {
  const [isBind, setBind] = useState(false)

  return (
    <HomeCard title="HEU 账号" {...props}>
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
        <Divider pt="1" />
        <ButtonGroup w="full" variant="ghost" isAttached>
          {isBind ? (
            <>
              <HomeMemberButton
                colorScheme="green"
                icon={RiTimeLine}
                text="更新"
              />
              <Divider h="9" orientation="vertical" />
              <HomeMemberButton
                colorScheme="red"
                icon={RiLinkUnlinkM}
                text="解绑"
                onClick={() => setBind(false)}
              />
            </>
          ) : (
            <>
              <HomeMemberButton
                colorScheme="purple"
                icon={RiLinkM}
                text="绑定"
                onClick={() => setBind(true)}
              />
              <Divider h="9" orientation="vertical" />
              <HomeMemberButton
                colorScheme="orange"
                icon={RiPlugLine}
                text="插件"
              />
            </>
          )}
        </ButtonGroup>
      </VStack>
    </HomeCard>
  )
}

interface HomeMemberButtonProps extends ButtonProps {
  icon: IconType
  text: string
}

const HomeMemberButton = ({ icon, text, ...props }: HomeMemberButtonProps) => (
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
    <Text isTruncated>{text}</Text>
  </Button>
)
