import { RiLinkUnlink } from 'react-icons/ri'
import { useSubmit, useTransition } from 'remix'
import { IconButton } from '~/components/common/IconButton'

export const UnbindBridge = () => {
  const submit = useSubmit()
  const handleUnbind = () => {
    if (confirm('确认取消绑定账号并删除本地数据？'))
      submit(null, { method: 'delete', action: '/?index' })
  }

  const transition = useTransition()
  const isLoading = transition.state !== 'idle'

  return (
    <IconButton
      color="red"
      icon={RiLinkUnlink}
      text="解绑账号"
      disabled={isLoading}
      onClick={handleUnbind}
    />
  )
}
