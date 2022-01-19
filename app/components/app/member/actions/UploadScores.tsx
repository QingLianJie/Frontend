import { RiUpload2Line } from 'react-icons/ri'
import { useFetcher } from 'remix'
import { ListButton } from '~/components/common/ListButton'
import type { MemberType, IResponse } from '~/types'

export const UploadScores = () => {
  const fetcher = useFetcher<IResponse<MemberType>>()
  const isLoading = fetcher.state !== 'idle'

  const handleUploadScores = () => {
    if (confirm('确认上传匿名的成绩数据，用于课程统计吗？')) {
      fetcher.submit(
        { data: '假装是成绩数据' },
        { method: 'post', action: '/member/upload-scores?index' }
      )
    }
  }

  return (
    <ListButton
      text="上传成绩"
      icon={RiUpload2Line}
      color="yellow"
      disabled={isLoading}
      action={fetcher.data}
      onClick={handleUploadScores}
    />
  )
}
