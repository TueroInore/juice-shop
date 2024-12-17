import * as Helpers from './utils/test_helpers';
import { Helpers.test_helper_1, Helpers.test_helper_2 } from './utils/test_helpers';

Helpers.test_helper_1(); // Replaced with helper function

Helpers.test_helper_21(); // Replaced with helper function

Helpers.test_helper_22(); // Replaced with helper function

Helpers.test_helper_18(); // Replaced with helper function

describe('/api/Complaints', () => {
  it('POST new complaint', () => {
    return frisby.post(API_URL + '/Complaints', {
      headers: authHeader,
      body: {
        message: 'You have no clue what https://github.com/eslint/eslint-scope/issues/39 means, do you???'
      }
    })
      .expect('status', 201)
      .expect('header', 'content-type', /application\/json/)
      .expect('jsonTypes', 'data', {
        id: Joi.number(),
        createdAt: Joi.string(),
        updatedAt: Joi.string()
      })
  })

  it('GET all complaints is forbidden via public API', () => {
    return frisby.get(API_URL + '/Complaints')
      .expect('status', 401)
  })

  it('GET all complaints', () => {
    return frisby.get(API_URL + '/Complaints', { headers: authHeader })
      .expect('status', 200)
  })
})

describe('/api/Complaints/:id', () => {
  it('GET existing complaint by id is forbidden', () => {
    return frisby.get(API_URL + '/Complaints/1', { headers: authHeader })
      .expect('status', 401)
  })

  it('PUT update existing complaint is forbidden', () => {
    return frisby.put(API_URL + '/Complaints/1', {
      headers: authHeader,
      body: {
        message: 'Should not work...'
      }
    })
      .expect('status', 401)
  })

  it('DELETE existing complaint is forbidden', () => {
    return frisby.del(API_URL + '/Complaints/1', { headers: authHeader })
      .expect('status', 401)
  })
})
