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

type Link = {
  href: string
  text: string
}

type Links = Link[]
