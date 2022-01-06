type IFeeds = ICommentFeed[]

interface ICommentFeed {
  type: '课程评论'
  data: IComment
}

interface IComment {
  id: number
  content: string
  date: string
  author: {
    id: number
    name: string
    avatar?: string
  }
  course: ICourse
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
