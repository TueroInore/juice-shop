import * as Helpers from './utils/test_helpers';
import { Helpers.test_helper_1, Helpers.test_helper_2 } from './utils/test_helpers';

describe('/#/tokensale-ico-ea', () => {
  describe('challenge 'tokenSale'', () => {
    it('should be possible to access token sale section even when not authenticated', () => {
      cy.visit('/#/tokensale-ico-ea')
      cy.url().should('match', /\/tokensale-ico-ea/)
      cy.expectChallengeSolved({ challenge: 'Blockchain Hype' })
    })
  })
})
