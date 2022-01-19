import type { SystemProps } from '@chakra-ui/react'
import { ButtonGroup, Divider, Text, VStack } from '@chakra-ui/react'
import localforage from 'localforage'
import type { Dispatch } from 'react'
import { createContext, useEffect, useState } from 'react'
import { BindHEU } from '~/components/app/bridge/modals/BindHEU'
import { Card } from '~/components/common/Card'
import type { IAccount } from '~/types'
import { decodeBase64 } from '~/utils/system'
import { UnbindHEU } from './actions/UnbindHEU'
import { UpdateBridge } from './actions/UpdateBridge'
import { GetExtension } from './modals/GetExtension'

interface ContextProps {
  id: string | null
  setId: Dispatch<string | null>
}

export const BridgeContext = createContext<ContextProps>({
  id: null,
  setId: () => {},
})

interface BridgeProps extends SystemProps {}

export const Bridge = ({ ...props }: BridgeProps) => {
  const [id, setId] = useState<string | null>(null)

  useEffect(() => {
    const check = async () => {
      const store = await localforage.getItem<IAccount>('account')
      if (store) {
        setId(store.id)
      }
    }
    check()
  }, [])

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
        {id ? (
          <Text px="2" lineHeight="tall">
            已绑定到：<Text as="strong">{decodeBase64(id)}</Text>
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
        <BridgeContext.Provider value={{ id, setId }}>
          <ButtonGroup w="full" gap="2" p="1">
            {id ? (
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
        </BridgeContext.Provider>
      </VStack>
    </Card>
  )
}
