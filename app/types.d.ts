export type ResponseStatus = '可以' | '不行' | '有问题'

export type MemberType =
  | '登录'
  | '登出'
  | '注册'
  | '上传成绩'
  | '删除账号'
  | '重置密码'
  | '修改密码'

export type BridgeType = '绑定账号' | '解绑账号' | '更新数据'

export interface IResponse<T> {
  status: ResponseStatus
  type: T
  message?: string
  to?: string
}

export type INotes = INote[]

export interface INote {
  date: string
  content: string
  tag?: string
}

export type IFeeds = IComment[]

export interface IComment {
  id: number
  content: string
  date: string
  author: IMember
  course: ICourse
}

export interface IMemberComment {
  id: number
  content: string
  date: string
  course: ICourse
}

export interface IMember {
  id: number
  name: string
  email?: string
}

export interface ICourse {
  name: string
  id: string
  type: string
  category: string
  test: string
  credit: string
  period: string
  statistics: {
    excellent: number
    fail: number
    total: number
  }
}
