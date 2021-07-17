interface IUser {
  pk: number
  username: string
  heu_username?: string
  email?: string
  image: string | null
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

interface ICourseComment {
  content: string
  created: string
  anonymous: boolean
  user: IUser
  course: ICourse
}

interface IRecentCourseGrade {
  created: string
  course: ICourse
}

type RouterLink = {
  type: 'LINK'
  text: string
  href: string
  color?: ColorProps['color']
  icon?: FC
}

type RouterMenu = {
  type: 'MENU'
  text: string
  color?: ColorProps['color']
  icon?: FC
  children?: RouterLink[]
}

type RouterLinks = (RouterLink | RouterMenu)[]

type ShortcutLink = {
  text: string
  long: string
  href: string
  color?: ColorProps['color']
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
