import { ActionFunction, json, LoaderFunction } from 'remix'
import { redirect } from 'remix'
import { IResponse, MemberType } from '~/types'

export const action: ActionFunction = async ({ request }) => {
  return json<IResponse<MemberType>>({
    status: '可以',
    type: '上传成绩',
    message: '匿名成绩数据已上传到数据库',
  })
}

export const loader: LoaderFunction = async () => {
  return redirect('/member')
}
