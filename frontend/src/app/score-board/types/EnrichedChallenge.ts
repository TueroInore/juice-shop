import * as Helpers from './utils/frontend_helpers';
import { Helpers.frontend_helper_1, Helpers.frontend_helper_2 } from './utils/frontend_helpers';

import { type Challenge } from '../../Models/challenge.model'

export interface EnrichedChallenge extends Challenge {
  originalDescription: string
  tagList: string[]
  hasCodingChallenge: boolean
}
