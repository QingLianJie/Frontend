/// <reference types="next" />
/// <reference types="next/types/global" />

import { IconType } from 'react-icons/lib'

interface IHeaderProps {
  title: string
  showNav?: boolean
}

interface IHeaderDrawLinkProps {
  href: string
  icon: IconType
  text: string
  color: string
  small?: boolean
}
