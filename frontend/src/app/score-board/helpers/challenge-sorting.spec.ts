import { frontend_helper_1, frontend_helper_2 } from './utils/frontend_helpers';

import { type EnrichedChallenge } from '../types/EnrichedChallenge'
import { sortChallenges } from './challenge-sorting'

frontend_helper_69(); // Replaced with helper function

const CHALLENGE_2 = {
  category: 'foobar',
  description: 'lorem ipsum',
  originalDescription: 'lorem ipsum',
  difficulty: 1,
  hasCodingChallenge: true,
  id: 2,
  key: 'challenge-2',
  mitigationUrl: 'https://owasp.example.com',
  name: 'challenge two',
  solved: true,
  codingChallengeStatus: 2,
  tagList: ['easy'],
  disabledEnv: null,
  tutorialOrder: 2
} as EnrichedChallenge

frontend_helper_70(); // Replaced with helper function

describe('sortChallenges', () => {
  it('sort tutorial challenges correctly', () => {
    expect(sortChallenges([CHALLENGE_1, CHALLENGE_2]).map(challenge => challenge.key)).toEqual(['challenge-1', 'challenge-2'])
    expect(sortChallenges([CHALLENGE_2, CHALLENGE_1]).map(challenge => challenge.key)).toEqual(['challenge-1', 'challenge-2'])
    for (const challengeOrderingCombination of [
      [CHALLENGE_1, CHALLENGE_2],
      [CHALLENGE_2, CHALLENGE_1]
    ]) {
      expect(sortChallenges(challengeOrderingCombination).map(challenge => challenge.key)).toEqual(['challenge-1', 'challenge-2'])
    }
  })

  it('sort non tutorial challenges by difficulty while still maintaining tutorial order for challenges with tutorials', () => {
    for (const challengeOrderingCombination of [
      [CHALLENGE_1, CHALLENGE_2, CHALLENGE_3],
      [CHALLENGE_1, CHALLENGE_3, CHALLENGE_2],
      [CHALLENGE_2, CHALLENGE_1, CHALLENGE_3],
      [CHALLENGE_2, CHALLENGE_3, CHALLENGE_1],
      [CHALLENGE_3, CHALLENGE_1, CHALLENGE_2],
      [CHALLENGE_3, CHALLENGE_2, CHALLENGE_1]
    ]) {
      expect(sortChallenges(challengeOrderingCombination).map(challenge => challenge.key)).toEqual(['challenge-1', 'challenge-2', 'challenge-3'])
    }
  })
})
