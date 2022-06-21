import { type Bridge } from '@qing-dev/bridge'
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

export const bridgeAtom = atom<Bridge | null>(null)

type Timestamp = string | false

export const timestampAtom = atomLocal<Timestamp>('timestamp', false)
