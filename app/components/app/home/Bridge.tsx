import {
  ButtonGroup,
  Divider,
  SystemProps,
  Text,
  VStack
} from '@chakra-ui/react'
import { useEffect } from 'react'
import { RiLinkUnlink, RiTimeLine } from 'react-icons/ri'
import { useActionData, useLoaderData, useSubmit, useTransition } from 'remix'
import { BindHEUModal } from '~/components/app/bridge/modals/BindHEU'
import { Card } from '~/components/common/Card'
import { IconButton } from '~/components/common/IconButton'
import type { IndexLoader } from '~/routes'
import type { BridgeType } from '~/types'
import { useNavToast } from '~/utils/hooks'
import { GetBridgeModal } from '../bridge/modals/GetBridge'

interface BridgeProps extends SystemProps {
  id: string
}

export const Bridge = ({ id, ...props }: BridgeProps) => {
  const { account } = useLoaderData<IndexLoader>()
  const submit = useSubmit()

  const handleUnbind = () => {
    if (confirm('确认取消绑定账号并删除本地数据？'))
      submit(null, { method: 'delete', action: '/?index' })
  }

  const handleUpdate = () => submit(null, { method: 'post', action: '/bridge' })

  const transition = useTransition()
  const isLoading = transition.state !== 'idle'

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
              <IconButton
                color="green"
                icon={RiTimeLine}
                text="更新数据"
                disabled={isLoading}
                onClick={handleUpdate}
              />
              <IconButton
                color="red"
                icon={RiLinkUnlink}
                text="解绑账号"
                disabled={isLoading}
                onClick={handleUnbind}
              />
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
