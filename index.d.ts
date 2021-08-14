interface IUser {
  pk: number
  username: string
  heu_username?: string
  email?: string
  image: string | null
  self?: boolean
}

interface IProfile {
  pk: number
  username: string
  heu_username?: string
  email?: string
  image: string | null
  self?: boolean
  comments: ICourseComment[]
}

interface IArticle {
  pk: number
  title: string
  body: string
  created: string
}

interface ICourse {
  id: number
  course_id: string
  name: string
  credit: string
  total_time: string
  assessment_method: string
  attributes: string
  kind: string
  general_category: string
  count: number
}

interface ICourseList {
  count: number
  next: string | null
  previous: string | null
  results: ICourse[]
}

interface ICourseInfo extends ICourse {
  comments: ICourseComment[]
  more_comments: string
  my_scores: null | string[]
  statistics: {
    all: {
      total: number
      exam: {
        [key: string]: number
      }
      test: {
        [key: string]: number
      }
    }
    [key: string]: {
      total: number
      exam: {
        [key: string]: number
      }
      test: {
        [key: string]: number
      }
    }
  }
}

interface ICourseComment {
  id: number
  content: string
  created: string
  anonymous: boolean
  user: IUser
  course?: ICourse
  score: string
  show: boolean
  self?: boolean
}

interface IRecentCourseGrade {
  created: string
  course: ICourse
}

type TaskStatus = 'Fail' | 'Success' | 'Pending' | 'Never'

interface IScoreAPI {
  heu_username: string
  result: '' | string[]
  created: number
  status: TaskStatus
}

interface IScore {
  id: string
  term: string // 开课学期
  course_id: string // 课程编号
  name: string // 课程名称
  grade: string // 成绩
  credit: string // 学分
  total_time: string // 总学时
  assessment_method: string // 考核方式
  assessment_type: string // 考试性质
  attributes: string // 课程属性
  kind: string // 课程性质
  general_category: string // 通识教育选修课程类别
  grade_mark: string // 成绩标记
}

type Scores = { [key: string]: IScore[] }

interface IScoreList {
  heu_username: string
  scores: Scores
  created: number
  status: TaskStatus
}

type TimetableWeek = [] | [string[]]

type TimetableRow = [
  TimetableWeek, // 周一
  TimetableWeek, // 周二
  TimetableWeek, // 周三
  TimetableWeek, // 周四
  TimetableWeek, // 周五
  TimetableWeek, // 周六
  TimetableWeek // 周日
]

type Timetable = [
  TimetableRow, // 第一大节
  TimetableRow, // 第二大节
  TimetableRow, // 第三大节
  TimetableRow, // 第四大节
  TimetableRow, // 第五大节
  TimetableWeek | [string] // 备注
][] // 每周

interface ITimetableAPI {
  heu_username: string
  created: number
  status: TaskStatus
  result: Timetable
}

interface ITask {
  user: number
  title: string
  description: string
  status: TaskStatus
  additional_info: string
  created: string
}

interface ITeachingEvaluation {
  todo: string[]
}

type ReportStatus = 'Fail' | 'Success' | 'Waiting'

interface IDailyReport {
  pk: number
  time: string
  status: ReportStatus
}

interface IDailyReportStatus {
  report_daily: boolean
}

interface ICOVID19Report {
  user: number
  title: string
  description: string
  status: ReportStatus
  additional_info: string
  created: string
}

interface ICOVID19ReportStatus {
  pingan_daily: boolean
}

interface IServiceStatus {
  result: {
    one: boolean
    pingjiao: boolean
    'cas-443': boolean
    edusys: boolean
  }
}

type RouterLink = {
  type: 'LINK'
  text: string
  href: string
  color?: {
    light: ColorProps['color']
    dark: ColorProps['color']
  }
  icon?: FC
}

type RouterMenu = {
  type: 'MENU'
  text: string
  color?: {
    light: ColorProps['color']
    dark: ColorProps['color']
  }
  icon?: FC
  children?: RouterLink[]
}

type RouterLinks = (RouterLink | RouterMenu)[]

type ShortcutLink = {
  text: string
  long: string
  href: string
  color?: {
    light: ColorProps['color']
    dark: ColorProps['color']
  }
  icon?: FC
}

type ShortcutLinks = ShortcutLink[]

type TaskLink = {
  text: string
  description: string
  href: string
  color?: {
    light: ColorProps['color']
    dark: ColorProps['color']
  }
  icon?: FC
}

type TaskLinks = TaskLink[]

type Link = {
  href: string
  text: string
}

type Links = Link[]

type Notice = {
  title: string
  date: string
  content: string
}

type Notices = Notice[]

type FAQ = {
  title: string
  content: ReactNode | ReactNode[] | string
}

type FAQs = FAQ[]

interface CourseInfoRate {
  key: string
  excellent: { rate: string | null; count: number | null }
  pass: { rate: string | null; count: number | null }
  fail: { rate: string | null; count: number | null }
}

type CourseStatChartData = {
  score: string
  count: number
  rate: string
}

interface CourseFilter {
  search?: string
  attributes?: string
  assessment_method?: string
  kind?: string
  credit?: string
  total_time?: string
  learned?: string
}
