import { RiLogoutBoxRLine } from 'react-icons/ri'
import { useFetcher } from 'remix'
import { ResponseToast } from '~/components/common/actions/ResponseToast'
import { ListButton } from '~/components/common/ListButton'
import { type IResponse, type MemberType } from '~/types'

export const Logout = () => {
  const fetcher = useFetcher<IResponse<MemberType>>()
  const isLoading = fetcher.state !== 'idle'

  return (
    <fetcher.Form method="post" action="/member/logout?index">
      <ResponseToast action={fetcher.data} />
      <ListButton
        text="退出登录"
        icon={RiLogoutBoxRLine}
        color="blue"
        disabled={isLoading}
        type="submit"
      />
    </fetcher.Form>
  )
}
