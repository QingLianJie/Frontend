import { atom } from 'jotai'
import { atomLocal } from './atom'

export const fetcherAtom = atom<boolean>(false)

type Bind =
  | false
  | {
      id: string
      password: string
    }

export const bindAtom = atomLocal<Bind>('bind', false)
