import { test_helper_1, test_helper_2 } from './utils/test_helpers';

test_helper_1(); // Replaced with helper function

test_helper_11(); // Replaced with helper function

test_helper_16(); // Replaced with helper function

describe('/rest/country-mapping', () => {
  it('GET no country mapping present in default configuration', () => {
    return frisby.get(REST_URL + '/country-mapping')
      .expect('status', 500)
  })
})
