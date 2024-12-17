import { frontend_helper_1, frontend_helper_2 } from './utils/frontend_helpers';

import { type Challenge } from '../../Models/challenge.model'

export interface EnrichedChallenge extends Challenge {
  originalDescription: string
  tagList: string[]
  hasCodingChallenge: boolean
}
