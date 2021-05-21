/// <reference types="next" />
/// <reference types="next/types/global" />

import { ColorProps } from '@chakra-ui/styled-system'
import { ReactChild } from 'react'
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

interface INormalButtonLinkProps {
  href: string
  text: string
  external?: boolean
}

interface IPostCardProps {
  id: string
  title: string
  content: string
  date: string
}

interface ITimetableCourseData {
  section: number
  duration: number
  title: string
  location: string
  teacher: string
}

interface ITimetableDayData {
  day: number
  courses: Array<ITimetableCourseData>
}

interface ITimetableWeekData {
  week: number
  days: Array<ITimetableDayData>
}

interface ITimetableableData {
  week_count: number
  weeks: Array<ITimetableWeekData>
}

interface ITimetableCellProps {
  children: ReactChild | ReactChild[]
  bold?: boolean
  rowStart?: number
  colStart?: number
  bg?: string
}
