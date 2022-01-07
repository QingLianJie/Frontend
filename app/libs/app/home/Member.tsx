import { Button, ButtonGroup, Icon, Text, VStack } from '@chakra-ui/react'
import { useState } from 'react'
import { RiLinkM, RiLinkUnlinkM, RiTimeLine } from 'react-icons/ri'
import { HomeCard } from '~/libs/common/containers/HomeCard'

export const HomeMember = () => {
  const [isBind, setBind] = useState(false)

  return (
    <HomeCard title="HEU 账号">
      <VStack w="full" align="flex-start" px="5" pt="3" pb="5" spacing="5">
        {isBind ? (
          <Text px="1" lineHeight="tall">
            已绑定到：<Text as="strong">20180000XX</Text>
            <Text fontSize="sm" pt="0.5">
              数据最后更新：今天 20:30
            </Text>
          </Text>
        ) : (
          <Text px="1" lineHeight="tall">
            欢迎来到 <Text as="strong">清廉街</Text>，这台设备还没有绑定 HEU
            账号。
          </Text>
        )}
        <ButtonGroup w="full" variant="outline" spacing="3">
          {isBind && (
            <Button
              isFullWidth
              colorScheme="green"
              leftIcon={
                <Icon aria-label="更新" as={RiTimeLine} ml="-1" fontSize="xl" />
              }
            >
              更新
            </Button>
          )}

          <Button
            isFullWidth
            colorScheme={isBind ? 'red' : 'purple'}
            leftIcon={
              <Icon
                aria-label="绑定与解绑"
                as={isBind ? RiLinkUnlinkM : RiLinkM}
                ml="-1"
                fontSize="xl"
              />
            }
            onClick={() => setBind(v => !v)}
          >
            {isBind ? '解绑' : '绑定 HEU 账号'}
          </Button>
        </ButtonGroup>
      </VStack>
    </HomeCard>
  )
}
