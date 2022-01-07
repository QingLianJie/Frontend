import {
  Button,
  ButtonGroup,
  Divider,
  Icon,
  Text,
  VStack,
} from '@chakra-ui/react'
import { useState } from 'react'
import { RiLinkM, RiLinkUnlinkM, RiTimeLine } from 'react-icons/ri'
import { HomeCard } from '~/libs/common/containers/HomeCard'

export const HomeMember = () => {
  const [isBind, setBind] = useState(false)

  return (
    <HomeCard title="HEU 账号">
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
          {isBind && (
            <>
              <Button isFullWidth colorScheme="green">
                <Icon
                  aria-label="更新"
                  as={RiTimeLine}
                  ml="-2"
                  mr="2"
                  fontSize="xl"
                  d={{
                    md: 'none',
                    lg: 'flex',
                  }}
                />
                <Text isTruncated>更新</Text>
              </Button>
              <Divider h="10" orientation="vertical" />
            </>
          )}
          <Button
            isFullWidth
            colorScheme={isBind ? 'red' : 'purple'}
            onClick={() => setBind(v => !v)}
          >
            <Icon
              aria-label="绑定与解绑"
              as={isBind ? RiLinkUnlinkM : RiLinkM}
              ml="-2"
              mr="2"
              fontSize="xl"
              d={{
                md: 'none',
                lg: 'flex',
              }}
            />
            <Text isTruncated>{isBind ? '解绑' : '绑定 HEU 账号'}</Text>
          </Button>
        </ButtonGroup>
      </VStack>
    </HomeCard>
  )
}
