import type { SystemProps } from '@chakra-ui/react'
import { ButtonGroup, Divider, Skeleton, Text, VStack } from '@chakra-ui/react'
import localforage from 'localforage'
import type { Dispatch } from 'react'
import { createContext, useEffect, useState } from 'react'
import { RiLoader2Line } from 'react-icons/ri'
import { ClientOnly } from 'remix-utils'
import { BindHEU } from '~/components/app/bridge/modals/BindHEU'
import { Card } from '~/components/common/Card'
import { IconButton } from '~/components/common/IconButton'
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
  const [isLoaded, setIsLoaded] = useState<boolean>(false)

  useEffect(() => {
    const check = async () => {
      const store = await localforage.getItem<IAccount>('account')
      if (store) {
        setId(store.id)
      }
      setIsLoaded(true)
    }
    check()
  }, [])

  return (
    <Card title="HEU" {...props}>
      <VStack w="full" align="flex-start" px="5" pt="3" pb="5" spacing="4">
        <Skeleton isLoaded={isLoaded}>
          {id ? (
            <Text as="div" px="1" lineHeight="tall">
              <Text>
                已绑定到：<Text as="strong">{decodeBase64(id)}</Text>
              </Text>
              <Text fontSize="sm" pt="0.5">
                数据最后更新：未更新
              </Text>
            </Text>
          ) : (
            <Text px="1" lineHeight="tall">
              欢迎来到 <Text as="strong">清廉街</Text>，这台设备还没有绑定 HEU
              账号。
            </Text>
          )}
        </Skeleton>
        <BridgeContext.Provider value={{ id, setId }}>
          <Skeleton isLoaded={isLoaded}>
            <ButtonGroup w="full" gap="2">
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
          </Skeleton>
        </BridgeContext.Provider>
      </VStack>
    </Card>
  )
}
