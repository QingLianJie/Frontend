import localforage from 'localforage'
import { useContext } from 'react'
import { RiLinkUnlink } from 'react-icons/ri'
import { IconButton } from '~/components/common/IconButton'
import { useResponseToast } from '~/utils/hooks'
import { BridgeContext } from '../Bridge'

export const UnbindHEU = () => {
  const toast = useResponseToast<ResponseType>()
  const { setId } = useContext(BridgeContext)

  const handleUnbind = async () => {
    if (confirm('确认取消绑定账号并删除本地数据？')) {
      await localforage.removeItem('account')
      setId(null)
      toast({ status: '可以', title: '已解除绑定并删除数据' })
    }
  }

  return (
    <IconButton
      color="red"
      icon={RiLinkUnlink}
      text="解绑账号"
      onClick={handleUnbind}
    />
  )
}
