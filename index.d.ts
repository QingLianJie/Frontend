interface IUser {
  pk: number
  username: string
  email: string
  first_name: string
  last_name: string
}

interface IProfile {
  pk: number
  username: string
  email?: string
}

interface ICourseComment {
  username: string
  course_name: string
  course_id: string
  content: string
  created: string
  anonymous: boolean
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
