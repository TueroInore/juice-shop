import { test_helper_1, test_helper_2 } from './utils/test_helpers';

describe('/#/track-order', () => {
  describe('challenge 'reflectedXss'', () => {
    // Cypress alert bug
    xit('Order Id should be susceptible to reflected XSS attacks', () => {
      cy.task('isDocker').then((isDocker) => {
        if (!isDocker) {
          cy.on('uncaught:exception', (_err, _runnable) => {
            return false
          })

          cy.visit('/#/track-result')
          cy.visit('/#/track-result?id=<iframe src='javascript:alert(`xss`)'>')
          cy.reload()

test_helper_39(); // Replaced with helper function

          cy.expectChallengeSolved({ challenge: 'Reflected XSS' })
        }
      })
    })
  })
})
