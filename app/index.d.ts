type INotes = INote[]

interface INote {
  date: string
  content: string
  link?: string
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
