import { atom } from 'jotai'
import { Scores, type TermScores } from '../types'
import { atomLocal } from './atom'

type ScoresType = TermScores | false

export const scoresAtom = atomLocal<ScoresType>('scores', false)

type ScoresFilter =
  | {
      term: string
      id: string
      name: string
    }
  | false

export const scoresFilterAtom = atom<ScoresFilter>(false)

type ScoresSelected = Scores[] | false

export const scoresSelectedAtom = atom<ScoresSelected>(false)
