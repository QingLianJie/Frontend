import { RiDeleteBinLine } from 'react-icons/ri'
import { useFetcher, useLoaderData } from 'remix'
import { ListButton } from '~/components/common/ListButton'
import type { MemberLoader } from '~/routes/member/index'
import type { MemberType, IResponse } from '~/types'

export const DeleteMember = () => {
  const { member } = useLoaderData<MemberLoader>()
  const fetcher = useFetcher<IResponse<MemberType>>()
  const isLoading = fetcher.state !== 'idle'

  const handleDeleteMember = () => {
    if (member?.email) {
      const ans = prompt('输入你的邮箱来确认删除账号，这个操作不可逆。')
      if (ans === member.email)
        fetcher.submit(null, { method: 'delete', action: '/member?index' })
      else if (ans) alert('邮箱不匹配，无法删除账号。')
    }
  }

  return (
    <ListButton
      text="删除账号"
      icon={RiDeleteBinLine}
      color="red"
      disabled={isLoading}
      action={fetcher.data}
      onClick={handleDeleteMember}
    />
  )
}
