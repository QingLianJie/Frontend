export interface IAccount {
  id: string
  password: string
}

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
  error?: string[]
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

export interface ICourseComment {
  id: number
  content: string
  date: string
  author: IMember
}

export interface IMember {
  id: number
  name: string
  email?: string
}

export interface IPaginatedCourses {
  total: number
  pages: {
    total: number
    current: number
  }
  courses: ICourse[]
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

export type TableRow = {
  excellent: string
  fail: string
  tooltip: {
    excellent: string
    fail: string
  }
} & Omit<ICourse, 'statistics'>

export type TableColumn = {
  name: string
  key: keyof TableRow
  numeric?: boolean
  hide?: boolean
}

export type CourseTestType = '考试' | '考查' | '其他'

export interface IStatictics {
  overview: {
    excellent: number
    fail: number
    total: number
  }
  statistics: 考查[]
}

type 考查 = {
  name: string
  type: '考查'
  excellent: number
  fail: number
  total: number
  data: {
    不及格: number
    中等: number
    优秀: number
    及格: number
    良好: number
  }
}

type 考试 = {
  name: string
  type: '考试'
  excellent: number
  fail: number
  total: number
  data: number[]
}

type 其他 = {
  name: string
  type: '其他'
  excellent: number
  fail: number
  total: number
  data: {
    [key: string]: number
  }
}
