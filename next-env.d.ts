/// <reference types="next" />
/// <reference types="next/types/global" />

import { IconType } from 'react-icons/lib'

interface IHeaderProps {
  title: string
  nav?: boolean
}

interface IFooterProps {
  fill?: boolean
}

interface IListIconLinkProps {
  href: string
  icon: IconType
  text: string
  color: string
  small?: boolean
}

interface IPostCardProps {
  id: string
  title: string
  content: string
  date: string
}
