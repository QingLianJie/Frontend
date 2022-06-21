import { Schedules } from '../types'
import { atomLocal } from './atom'

type SchedulesType = Schedules | false

export const schedulesAtom = atomLocal<SchedulesType>('schedules', false)
