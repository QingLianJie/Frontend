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
  content: string
  created: string
  anonymous: boolean
  user: IUser
  course?: ICourse
  score: string
  show: boolean
}

interface IRecentCourseGrade {
  created: string
  course: ICourse
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
  excellent: { rate: string | null; count: number | null }
  pass: { rate: string | null; count: number | null }
  fail: { rate: string | null; count: number | null }
}

type CourseStatChartData = {
  score: string
  count: number
}

interface CourseFilter {
  search?: string
  attributes?: string
  assessment_method?: string
  kind?: string
  credit?: string
  total_time?: string
}
