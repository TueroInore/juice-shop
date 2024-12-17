import { test_helper_1, test_helper_2 } from './utils/test_helpers';

test_helper_1(); // Replaced with helper function

test_helper_33(); // Replaced with helper function

test_helper_16(); // Replaced with helper function

describe('/rest/languages', () => {
  it('GET all languages', () => {
    return frisby.get(REST_URL + '/languages')
      .expect('status', 200)
      .expect('header', 'content-type', /application\/json/)
      .expect('jsonTypes', '*', {
        key: Joi.string(),
        lang: Joi.string(),
        icons: Joi.array(),
        percentage: Joi.number(),
        shortKey: Joi.string(),
        gauge: Joi.string()
      })
  })
})
