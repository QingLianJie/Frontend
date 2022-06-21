import { Schedule } from '../types'
import { atomLocal } from './atom'

type SchedulesType = Schedule | false

export const schedulesAtom = atomLocal<SchedulesType>('schedules', false)
