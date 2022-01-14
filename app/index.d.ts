type ResponseStatus = '可以' | '不行' | '有问题'

type AuthType = '登录' | '注册' | '重置密码' | '修改密码'

interface IResponse<T> {
  status: ResponseStatus
  type: T
  message?: string
}

type INotes = INote[]

interface INote {
  date: string
  content: string
  tag?: string
  links?: {
    text: string
    href: string
  }[]
}

type IFeeds = ICommentFeed[]

interface IComment {
  id: number
  content: string
  date: string
  author: IMember
  course: ICourse
}

interface ICommentFeed {
  type: '课程评论'
  data: IComment
}

interface IMember {
  id: number
  name: string
  avatar?: string
}

interface ICourse {
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
