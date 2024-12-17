import * as Helpers from './utils/test_helpers';
import { Helpers.test_helper_1, Helpers.test_helper_2 } from './utils/test_helpers';

Helpers.test_helper_1(); // Replaced with helper function

Helpers.test_helper_15(); // Replaced with helper function

Helpers.test_helper_12(); // Replaced with helper function

describe('/api', () => {
  it('GET error when query /api without actual resource', () => {
    return frisby.get(API_URL)
      .expect('status', 500)
  })
})

describe('/rest', () => {
  it('GET error message with information leakage when calling unrecognized path with /rest in it', () => {
    return frisby.get(REST_URL + '/unrecognized')
      .expect('status', 500)
      .expect('bodyContains', '<h1>' + config.get<string>('application.name') + ' (Express')
      .expect('bodyContains', 'Unexpected path: /rest/unrecognized')
  })
})
