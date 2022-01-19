import { RiLogoutBoxRLine } from 'react-icons/ri'
import { useFetcher } from 'remix'
import { ListButton } from '~/components/common/ListButton'
import type { MemberType, IResponse } from '~/types'

export const Logout = () => {
  const fetcher = useFetcher<IResponse<MemberType>>()
  const isLoading = fetcher.state !== 'idle'

  return (
    <fetcher.Form method="post" action="/member/logout?index">
      <ListButton
        text="退出登录"
        icon={RiLogoutBoxRLine}
        color="blue"
        disabled={isLoading}
        action={fetcher.data}
        type="submit"
      />
    </fetcher.Form>
  )
}
