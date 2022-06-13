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
  description: string
  href: string
}

type Fetcher = (options: FetcherOptions) => Promise<string>

interface FetcherOptions {
  url: string
  method: 'GET' | 'POST'
  referer?: string
  headers?: { [key: string]: string }
  form?: string
}
