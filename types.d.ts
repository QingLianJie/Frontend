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

interface Score {
  name: string
  id: string
  type: string
  nature: string
  test: string
  credit: number
  period: number
  score: any
  category?: string
  mark?: string
}

type Scores = Score[]

interface TermScore {
  name: string
  scores: Scores
}

type TermScores = TermScore[]

interface ScheduleWeek {
  name: string
  rows: ScheduleRow[]
}
export interface ScheduleRow {
  name: string // 第几大节
  cols: ScheduleCol[]
}

export interface ScheduleCol {
  name: string // 星期几
  courses: ScheduleCourse[]
}

export interface ScheduleCourse {
  name: string
  teacher: string[]
  week: number[]
  location?: string
  section?: number[]
}

interface Schedule {
  name: string
  weeks: ScheduleWeek[]
}

type Schedules = Schedule[]
