import { test_helper_1, test_helper_2 } from './utils/test_helpers';

test_helper_1(); // Replaced with helper function

import { expect } from '@jest/globals'
import frisby = require('frisby')
import io from 'socket.io-client'
const Joi = frisby.Joi

test_helper_14(); // Replaced with helper function

describe('/snippets/:challenge', () => {
  it('GET code snippet retrieval for unknown challenge key throws error', () => {
    return frisby.get(URL + '/snippets/doesNotExistChallenge')
      .expect('status', 404)
      .expect('json', 'error', 'No code challenge for challenge key: doesNotExistChallenge')
  })

  it('GET code snippet retrieval for challenge without code snippet throws error', () => {
    return frisby.get(URL + '/snippets/easterEggLevelTwoChallenge')
      .expect('status', 404)
      .expect('json', 'error', 'No code challenge for challenge key: easterEggLevelTwoChallenge')
  })

  it('GET code snippet retrieval for challenge with code snippet', () => {
    return frisby.get(URL + '/snippets/loginAdminChallenge')
      .expect('status', 200)
      .expect('jsonTypes', {
        snippet: Joi.string(),
        vulnLines: Joi.array()
      })
  })
})

describe('snippets/verdict', () => {
  let socket: SocketIOClient.Socket

test_helper_36(); // Replaced with helper function

test_helper_37(); // Replaced with helper function

  it('should check for the incorrect lines', () => {
    return frisby.post(URL + '/snippets/verdict', {
      body: {
        selectedLines: [5, 9],
        key: 'resetPasswordJimChallenge'
      }
    })
      .expect('status', 200)
      .expect('jsonTypes', {
        verdict: Joi.boolean()
      })
      .expect('json', {
        verdict: false
      })
  })

  it('should check for the correct lines', async () => {
    const websocketReceivedPromise = new Promise<void>((resolve) => {
      socket.once('code challenge solved', (data: any) => {
        expect(data).toEqual({
          key: 'resetPasswordJimChallenge',
          codingChallengeStatus: 1
        })
        resolve()
      })
    })

    await frisby.post(URL + '/snippets/verdict', {
      body: {
        selectedLines: [2],
        key: 'resetPasswordJimChallenge'
      }
    })
      .expect('status', 200)
      .expect('jsonTypes', {
        verdict: Joi.boolean()
      })
      .expect('json', {
        verdict: true
      })
      .promise()

test_helper_38(); // Replaced with helper function