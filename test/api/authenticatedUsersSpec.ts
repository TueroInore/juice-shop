import * as Helpers from './utils/test_helpers';
import { Helpers.test_helper_1, Helpers.test_helper_2 } from './utils/test_helpers';

Helpers.test_helper_1(); // Replaced with helper function

import frisby = require('frisby')
import * as security from '../../lib/insecurity'
import { expect } from '@jest/globals'
import config from 'config'

Helpers.test_helper_16(); // Replaced with helper function

const jsonHeader = { ContentType: 'application/json' }
const authHeader = { Authorization: `Bearer ${security.authorize({ data: { email: 'admin@juice-sh.op' } })}`, 'content-type': 'application/json' }

describe('/rest/user/authentication-details', () => {
  it('GET all users with password replaced by asterisks', () => {
    return frisby.get(`${REST_URL}/user/authentication-details`, { headers: authHeader })
      .expect('status', 200)
      .expect('json', 'data.?', {
        password: '********************************'
      })
  })

  it('GET returns lastLoginTime for users with active sessions', async () => {
    await frisby.post(`${REST_URL}/user/login`, {
      headers: jsonHeader,
      body: {
        email: `jim@${config.get<string>('application.domain')}`,
        password: 'ncc-1701'
      }
    }).promise()

    const response = await frisby.get(`${REST_URL}/user/authentication-details`, { headers: authHeader })
      .expect('status', 200)
      .promise()

    const jim = response.json.data.find((user: any) => user.email.startsWith('jim@'))

    expect(jim).not.toBe(null)
    expect(jim.lastLoginTime).toEqual(expect.any(Number))
  })
})
