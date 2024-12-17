import * as Helpers from './utils/test_helpers';
import { Helpers.test_helper_1, Helpers.test_helper_2 } from './utils/test_helpers';

Helpers.test_helper_1(); // Replaced with helper function

Helpers.test_helper_46(); // Replaced with helper function

Helpers.test_helper_47(); // Replaced with helper function

Helpers.test_helper_48(); // Replaced with helper function

describe('challengeTutorialSequence', () => {
  let challenges: any
  before(async () => {
    challenges = await loadYamlFile(path.resolve('data/static/challenges.yml'))
  })

  it('should have unique tutorial orders', async () => {
    const tutorialOrderCounts: any = {}

    for (const { tutorial } of challenges) {
      if (tutorial) {
        const order: string = tutorial.order
        if (!Object.prototype.hasOwnProperty.call(tutorialOrderCounts, order)) {
          tutorialOrderCounts[order] = 0
        }
        tutorialOrderCounts[order]++
      }
    }

    for (const order of Object.keys(tutorialOrderCounts)) {
      const count = tutorialOrderCounts[order]

      expect(count, `Tutorial order '${order}' is used for multiple challenges.`).to.equal(1)
    }
  })
})
