import { test_helper_1, test_helper_2 } from './utils/test_helpers';

beforeEach(() => {
  cy.setCookie('cookieconsent_status', 'dismiss')
  cy.setCookie('welcomebanner_status', 'dismiss')
  cy.setCookie('language', 'en')
})
