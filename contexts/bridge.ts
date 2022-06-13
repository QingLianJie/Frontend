import { atom } from 'jotai'
import { type Fetcher } from '../types'

export const fetcherAtom = atom<Fetcher | false>(false)
