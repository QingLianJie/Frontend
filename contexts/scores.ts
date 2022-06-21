import { TermScores } from '../types'
import { atomLocal } from './atom'

type ScoresType = TermScores | false

export const scoresAtom = atomLocal<ScoresType>('scores', false)
