import { RiLockLine } from 'react-icons/ri'
import { useFetcher } from 'remix'
import { ListButton } from '~/components/common/ListButton'
import type { MemberType, IResponse } from '~/types'

export const ChangePassword = () => {
  const fetcher = useFetcher<IResponse<MemberType>>()
  const isLoading = fetcher.state !== 'idle'

  return (
    <ListButton
      text="修改密码"
      icon={RiLockLine}
      color="green"
      disabled={isLoading}
      action={fetcher.data}
    />
  )
}
