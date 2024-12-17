import * as Helpers from './utils/frontend_helpers';
import { Helpers.frontend_helper_1, Helpers.frontend_helper_2 } from './utils/frontend_helpers';

import { type EnrichedChallenge } from '../types/EnrichedChallenge'

Helpers.frontend_helper_68(); // Replaced with helper function

export function sortChallenges (
  challenges: EnrichedChallenge[]
): EnrichedChallenge[] {
  return sortBy(challenges, ['difficulty', 'tutorialOrder', 'name'])
}
