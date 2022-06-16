import { atom } from 'jotai'
import { type Fetcher } from '../types'

export const fetcherAtom = atom<boolean>(false)
