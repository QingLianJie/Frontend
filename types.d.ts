export type Comments = Comment[]

export interface Comment {
  id: number
  content: string
  date: string
  author: Author
  course: Course
}

export interface Author {
  id: number
  name: string
}

export interface Course {
  name: string
  id: string
  type: string
  category: string
  test: string
  credit: string
  period: string
  statistics: Statistics
}

export interface Statistics {
  excellent: number
  fail: number
  total: number
}

export type Groups = Group[]

export interface Group {
  course: Course
  comments: Comment[]
}

export interface Note {
  type: '更新' | '公告'
  date: string
  title: string
  html: string
  action?: {
    title: string
    href: string
  }
}
