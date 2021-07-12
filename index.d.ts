interface IUser {
  pk: number
  username: string
  email: string
  first_name: string
  last_name: string
}

type Link = {
  href: string
  text: string
}

type Links = Link[]
