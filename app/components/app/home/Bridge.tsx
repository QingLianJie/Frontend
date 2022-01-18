import {
  ButtonGroup,
  Divider,
  SystemProps,
  Text,
  VStack,
} from '@chakra-ui/react'
import { useEffect } from 'react'
import { useActionData, useLoaderData, useSubmit, useTransition } from 'remix'
import { BindHEUModal } from '~/components/app/bridge/modals/BindHEU'
import { Card } from '~/components/common/Card'
import type { IndexLoader } from '~/routes'
import type { BridgeType } from '~/types'
import { useNavToast } from '~/utils/hooks'
import { GetBridgeModal } from '../bridge/modals/GetBridge'
import { UnbindBridge } from '../bridge/Unbind'
import { UpdateBridge } from '../bridge/Update'

interface BridgeProps extends SystemProps {
  id: string
}

export const Bridge = ({ id, ...props }: BridgeProps) => {
  const { account } = useLoaderData<IndexLoader>()
  const action = useActionData()
  const toast = useNavToast<BridgeType>()

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
              <UnbindBridge />
            </>
          ) : (
            <>
              <BindHEUModal />
              <GetBridgeModal />
            </>
          )}
        </ButtonGroup>
      </VStack>
    </Card>
  )
}
