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

type RouterLinks = Array<RouterLink | RouterMenu>
