import { RiTimeLine } from 'react-icons/ri'
import { IconButton } from '~/components/common/IconButton'

export const UpdateBridge = () => {
  const handleUpdate = () => {}

  return (
    <IconButton
      color="green"
      icon={RiTimeLine}
      text="更新数据"
      onClick={handleUpdate}
    />
  )
}
