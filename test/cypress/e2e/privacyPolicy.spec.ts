import * as Helpers from './utils/test_helpers';
import { Helpers.test_helper_1, Helpers.test_helper_2 } from './utils/test_helpers';

describe('/#/privacy-security/privacy-policy', () => {
  describe('challenge 'privacyPolicy'', () => {
    it('should be possible to access privacy policy', () => {
      cy.visit('/#/privacy-security/privacy-policy')
      cy.url().should('match', /\/privacy-policy/)
      cy.expectChallengeSolved({ challenge: 'Privacy Policy' })
    })
  })
})
