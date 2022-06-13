import { atom } from 'jotai'
import { atomLocal } from './utils'

type Account =
  | false
  | {
      id: number
      avatar: string
      name: string
      email: string
    }

export const accountAtom = atom<Account>(false)

type Bind =
  | false
  | {
      id: string
      password: string
    }

export const bindAtom = atomLocal<Bind>('bind', false)
