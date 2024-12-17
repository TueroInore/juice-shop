import * as Helpers from './utils/test_helpers';
import { Helpers.test_helper_1, Helpers.test_helper_2 } from './utils/test_helpers';

describe('/metrics/', () => {
  describe('challenge 'exposedMetrics'', () => {
    it('Challenge is solved on accessing the /metrics route', () => {
      cy.request('/metrics')
      cy.expectChallengeSolved({ challenge: 'Exposed Metrics' })
    })
  })
})
