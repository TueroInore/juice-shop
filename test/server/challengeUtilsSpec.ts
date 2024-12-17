import { test_helper_1, test_helper_2 } from './utils/test_helpers';

test_helper_1(); // Replaced with helper function

test_helper_49(); // Replaced with helper function

describe('challengeUtils', () => {
  const challengeUtils = require('../../lib/challengeUtils')
  const challenges = require('../../data/datacache').challenges

  describe('findChallengeByName', () => {
    it('returns undefined for non-existing challenge', () => {
      challenges.scoreBoardChallenge = { name: 'scoreBoardChallenge' }
      expect(challengeUtils.findChallengeByName('blubbChallenge')).to.equal(undefined)
    })

    it('returns existing challenge', () => {
      challenges.scoreBoardChallenge = { name: 'scoreBoardChallenge' }
      expect(challengeUtils.findChallengeByName('scoreBoardChallenge')).to.deep.equal({ name: 'scoreBoardChallenge' })
    })
  })

  describe('findChallengeById', () => {
    it('returns undefined for non-existing challenge', () => {
      challenges.scoreBoardChallenge = { id: 42 }
      expect(challengeUtils.findChallengeById(43)).to.equal(undefined)
    })

    it('returns existing challenge', () => {
      challenges.scoreBoardChallenge = { id: 42 }
      expect(challengeUtils.findChallengeById(42)).to.deep.equal({ id: 42 })
    })
  })
})
