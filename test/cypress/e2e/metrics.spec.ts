import { test_helper_1, test_helper_2 } from './utils/test_helpers';

describe('/metrics/', () => {
  describe('challenge 'exposedMetrics'', () => {
    it('Challenge is solved on accessing the /metrics route', () => {
      cy.request('/metrics')
      cy.expectChallengeSolved({ challenge: 'Exposed Metrics' })
    })
  })
})
