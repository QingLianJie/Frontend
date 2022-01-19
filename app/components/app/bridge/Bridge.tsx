import type { SystemProps } from '@chakra-ui/react'
import { ButtonGroup, Divider, Text, VStack } from '@chakra-ui/react'
import { useEffect } from 'react'
import { useActionData, useLoaderData } from 'remix'
import { BindHEU } from '~/components/app/bridge/modals/BindHEU'
import { Card } from '~/components/common/Card'
import { RootLoader } from '~/root'
import type { BridgeType } from '~/types'
import { useResponseToast } from '~/utils/hooks'
import { UnbindHEU } from './actions/UnbindHEU'
import { UpdateBridge } from './actions/UpdateBridge'
import { GetExtension } from './modals/GetExtension'

interface BridgeProps extends SystemProps {
  id: string
}

export const Bridge = ({ id, ...props }: BridgeProps) => {
  const { account } = useLoaderData<RootLoader>()
  const action = useActionData()
  const toast = useResponseToast<BridgeType>()

  useEffect(() => action && toast({ ...action }), [action])

  return (
    <Card id={id} title="HEU 账号" {...props}>
      <VStack
        w="full"
        align="flex-start"
        px="4"
        pt="3"
        pb="4"
        spacing="3"
        divider={<Divider transition="all 0.2s" />}
      >
        {account ? (
          <Text px="2" lineHeight="tall">
            已绑定到：<Text as="strong">{account.id}</Text>
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

        <ButtonGroup w="full" gap="2" p="1">
          {account ? (
            <>
              <UpdateBridge />
              <UnbindHEU />
            </>
          ) : (
            <>
              <BindHEU />
              <GetExtension />
            </>
          )}
        </ButtonGroup>
      </VStack>
    </Card>
  )
}
