import { RiUpload2Line } from 'react-icons/ri'
import { useFetcher } from 'remix'
import { ResponseToast } from '~/components/common/actions/ResponseToast'
import { ListButton } from '~/components/common/ListButton'
import { type IResponse, type MemberType } from '~/types'

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
    <>
      <ResponseToast action={fetcher.data} />
      <ListButton
        text="上传成绩"
        icon={RiUpload2Line}
        color="yellow"
        disabled={isLoading}
        onClick={handleUploadScores}
      />
    </>
  )
}
