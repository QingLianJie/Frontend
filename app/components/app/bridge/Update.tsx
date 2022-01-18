import { RiTimeLine } from 'react-icons/ri'
import { useSubmit, useTransition } from 'remix'
import { IconButton } from '~/components/common/IconButton'

export const UpdateBridge = () => {
  const submit = useSubmit()
  const handleUpdate = () => submit(null, { method: 'post', action: '/bridge' })

  const transition = useTransition()
  const isLoading = transition.state !== 'idle'

  return (
    <IconButton
      color="green"
      icon={RiTimeLine}
      text="更新数据"
      disabled={isLoading}
      onClick={handleUpdate}
    />
  )
}
