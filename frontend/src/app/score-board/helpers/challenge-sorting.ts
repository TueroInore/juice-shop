import { frontend_helper_1, frontend_helper_2 } from './utils/frontend_helpers';

import { type EnrichedChallenge } from '../types/EnrichedChallenge'

frontend_helper_68(); // Replaced with helper function

export function sortChallenges (
  challenges: EnrichedChallenge[]
): EnrichedChallenge[] {
  return sortBy(challenges, ['difficulty', 'tutorialOrder', 'name'])
}
