export type Comments = Comment[]

export interface Comment {
  id: number
  content: string
  date: string
  author: string
  course: Course
}

export interface Course {
  name: string
  id: string
  type: string
  category: string
  test: string
  credit: string
  period: string
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
