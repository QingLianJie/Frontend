import { atom } from 'jotai'

type Account =
  | false
  | {
      id: number
      avatar: string
      name: string
      email: string
    }

export const accountAtom = atom<Account>(false)
