import * as Helpers from './utils/test_helpers';
import { Helpers.test_helper_1, Helpers.test_helper_2 } from './utils/test_helpers';

Helpers.test_helper_1(); // Replaced with helper function

import sinon = require('sinon')
import config from 'config'
import type { Product as ProductConfig } from '../../lib/config.types'
import chai = require('chai')
import sinonChai = require('sinon-chai')
const expect = chai.expect
chai.use(sinonChai)
const cache = require('../../data/datacache')
const security = require('../../lib/insecurity')
const utils = require('../../lib/utils')

describe('verify', () => {
  const verify = require('../../routes/verify')
  const challenges = require('../../data/datacache').challenges
  let req: any
  let res: any
  let next: any
  let save: any
  let err: any

  beforeEach(() => {
    req = { body: {}, headers: {} }
    res = { json: sinon.spy() }
    next = sinon.spy()
    save = () => ({
      then () { }
    })
  })

  describe(''forgedFeedbackChallenge'', () => {
    beforeEach(() => {
      security.authenticatedUsers.put('token12345', {
        data: {
          id: 42,
          email: 'test@juice-sh.op'
        }
      })
      challenges.forgedFeedbackChallenge = { solved: false, save }
    })

    it('is not solved when an authenticated user passes his own ID when writing feedback', () => {
      req.body.UserId = 42
      req.headers = { authorization: 'Bearer token12345' }

Helpers.test_helper_62(); // Replaced with helper function

Helpers.test_helper_63(); // Replaced with helper function

    it('is not solved when an authenticated user passes no ID when writing feedback', () => {
      req.body.UserId = undefined
      req.headers = { authorization: 'Bearer token12345' }

Helpers.test_helper_62(); // Replaced with helper function

Helpers.test_helper_63(); // Replaced with helper function

    it('is solved when an authenticated user passes someone elses ID when writing feedback', () => {
      req.body.UserId = 1
      req.headers = { authorization: 'Bearer token12345' }

Helpers.test_helper_62(); // Replaced with helper function

      expect(challenges.forgedFeedbackChallenge.solved).to.equal(true)
    })

    it('is solved when an unauthenticated user passes someones ID when writing feedback', () => {
      req.body.UserId = 1
      req.headers = {}

Helpers.test_helper_62(); // Replaced with helper function

      expect(challenges.forgedFeedbackChallenge.solved).to.equal(true)
    })
  })

  describe('accessControlChallenges', () => {
    it(''scoreBoardChallenge' is solved when the 1px.png transpixel is requested', () => {
      challenges.scoreBoardChallenge = { solved: false, save }
      req.url = 'http://juice-sh.op/public/images/padding/1px.png'

Helpers.test_helper_64(); // Replaced with helper function

      expect(challenges.scoreBoardChallenge.solved).to.equal(true)
    })

    it(''adminSectionChallenge' is solved when the 19px.png transpixel is requested', () => {
      challenges.adminSectionChallenge = { solved: false, save }
      req.url = 'http://juice-sh.op/public/images/padding/19px.png'

Helpers.test_helper_64(); // Replaced with helper function

      expect(challenges.adminSectionChallenge.solved).to.equal(true)
    })

    it(''tokenSaleChallenge' is solved when the 56px.png transpixel is requested', () => {
      challenges.tokenSaleChallenge = { solved: false, save }
      req.url = 'http://juice-sh.op/public/images/padding/56px.png'

Helpers.test_helper_64(); // Replaced with helper function

      expect(challenges.tokenSaleChallenge.solved).to.equal(true)
    })

    it(''extraLanguageChallenge' is solved when the Klingon translation file is requested', () => {
      challenges.extraLanguageChallenge = { solved: false, save }
      req.url = 'http://juice-sh.op/public/i18n/tlh_AA.json'

Helpers.test_helper_64(); // Replaced with helper function

      expect(challenges.extraLanguageChallenge.solved).to.equal(true)
    })

    it(''retrieveBlueprintChallenge' is solved when the blueprint file is requested', () => {
      challenges.retrieveBlueprintChallenge = { solved: false, save }
      cache.retrieveBlueprintChallengeFile = 'test.dxf'
      req.url = 'http://juice-sh.op/public/images/products/test.dxf'

Helpers.test_helper_64(); // Replaced with helper function

      expect(challenges.retrieveBlueprintChallenge.solved).to.equal(true)
    })

    it(''missingEncodingChallenge' is solved when the crazy cat photo is requested', () => {
      challenges.missingEncodingChallenge = { solved: false, save }
      req.url = 'http://juice-sh.op/public/images/uploads/%F0%9F%98%BC-%23zatschi-%23whoneedsfourlegs-1572600969477.jpg'

Helpers.test_helper_64(); // Replaced with helper function

      expect(challenges.missingEncodingChallenge.solved).to.equal(true)
    })

    it(''accessLogDisclosureChallenge' is solved when any server access log file is requested', () => {
      challenges.accessLogDisclosureChallenge = { solved: false, save }
      req.url = 'http://juice-sh.op/support/logs/access.log.2019-01-15'

Helpers.test_helper_64(); // Replaced with helper function

      expect(challenges.accessLogDisclosureChallenge.solved).to.equal(true)
    })
  })

  describe(''errorHandlingChallenge'', () => {
    beforeEach(() => {
      challenges.errorHandlingChallenge = { solved: false, save }
    })

    it('is solved when an error occurs on a response with OK 200 status code', () => {
      res.statusCode = 200
      err = new Error()

Helpers.test_helper_65(); // Replaced with helper function

      expect(challenges.errorHandlingChallenge.solved).to.equal(true)
    })

    describe('is solved when an error occurs on a response with error', () => {
      const httpStatus = [402, 403, 404, 500]
      httpStatus.forEach(statusCode => {
        it(`${statusCode} status code`, () => {
          res.statusCode = statusCode
          err = new Error()

Helpers.test_helper_65(); // Replaced with helper function

          expect(challenges.errorHandlingChallenge.solved).to.equal(true)
        })
      })
    })

    it('is not solved when no error occurs on a response with OK 200 status code', () => {
      res.statusCode = 200
      err = undefined

Helpers.test_helper_65(); // Replaced with helper function

      expect(challenges.errorHandlingChallenge.solved).to.equal(false)
    })

    describe('is not solved when no error occurs on a response with error', () => {
      const httpStatus = [401, 402, 404, 500]
      httpStatus.forEach(statusCode => {
        it(`${statusCode} status code`, () => {
          res.statusCode = statusCode
          err = undefined

Helpers.test_helper_65(); // Replaced with helper function

          expect(challenges.errorHandlingChallenge.solved).to.equal(false)
        })
      })
    })

    it('should pass occured error on to next route', () => {
      res.statusCode = 500
      err = new Error()

Helpers.test_helper_65(); // Replaced with helper function

      expect(next).to.have.been.calledWith(err)
    })
  })

  describe('databaseRelatedChallenges', () => {
    describe(''changeProductChallenge'', () => {
      const products = require('../../data/datacache').products

      beforeEach(() => {
        challenges.changeProductChallenge = { solved: false, save }
        products.osaft = { reload () { return { then (cb: any) { cb() } } } }
      })

      it(`is solved when the link in the O-Saft product goes to ${config.get<string>('challenges.overwriteUrlForProductTamperingChallenge')}`, () => {
        products.osaft.description = `O-Saft, yeah! <a href='${config.get<string>('challenges.overwriteUrlForProductTamperingChallenge')}' target='_blank'>More...</a>`

Helpers.test_helper_66(); // Replaced with helper function

        expect(challenges.changeProductChallenge.solved).to.equal(true)
      })

      it('is not solved when the link in the O-Saft product is changed to an arbitrary URL', () => {
        products.osaft.description = 'O-Saft, nooo! <a href='http://arbitrary.url' target='_blank'>More...</a>'

Helpers.test_helper_66(); // Replaced with helper function

        expect(challenges.changeProductChallenge.solved).to.equal(false)
      })

      it('is not solved when the link in the O-Saft product remained unchanged', () => {
        let urlForProductTamperingChallenge = null
        for (const product of config.get<ProductConfig[]>('products')) {
          if (product.urlForProductTamperingChallenge !== undefined) {
            urlForProductTamperingChallenge = product.urlForProductTamperingChallenge
            break
          }
        }
        products.osaft.description = `Vanilla O-Saft! <a href='${urlForProductTamperingChallenge}' target='_blank'>More...</a>`

Helpers.test_helper_66(); // Replaced with helper function

        expect(challenges.changeProductChallenge.solved).to.equal(false)
      })
    })
  })

  describe('jwtChallenges', () => {
    beforeEach(() => {
      challenges.jwtUnsignedChallenge = { solved: false, save }
      challenges.jwtForgedChallenge = { solved: false, save }
    })

    it(''jwtUnsignedChallenge' is solved when forged unsigned token has email jwtn3d@juice-sh.op in the payload', () => {
      /*
      Header: { 'alg': 'none', 'typ': 'JWT' }
      Payload: { 'data': { 'email': 'jwtn3d@juice-sh.op' }, 'iat': 1508639612, 'exp': 9999999999 }
       */
      req.headers = { authorization: 'Bearer eyJhbGciOiJub25lIiwidHlwIjoiSldUIn0.eyJkYXRhIjp7ImVtYWlsIjoiand0bjNkQGp1aWNlLXNoLm9wIn0sImlhdCI6MTUwODYzOTYxMiwiZXhwIjo5OTk5OTk5OTk5fQ.' }

Helpers.test_helper_67(); // Replaced with helper function

Helpers.test_helper_68(); // Replaced with helper function

    it(''jwtUnsignedChallenge' is solved when forged unsigned token has string 'jwtn3d@' in the payload', () => {
      /*
      Header: { 'alg': 'none', 'typ': 'JWT' }
      Payload: { 'data': { 'email': 'jwtn3d@' }, 'iat': 1508639612, 'exp': 9999999999 }
       */
      req.headers = { authorization: 'Bearer eyJhbGciOiJub25lIiwidHlwIjoiSldUIn0.eyJkYXRhIjp7ImVtYWlsIjoiand0bjNkQCJ9LCJpYXQiOjE1MDg2Mzk2MTIsImV4cCI6OTk5OTk5OTk5OX0.' }

Helpers.test_helper_67(); // Replaced with helper function

Helpers.test_helper_68(); // Replaced with helper function

    it(''jwtUnsignedChallenge' is not solved via regularly signed token even with email jwtn3d@juice-sh.op in the payload', () => {
      const token = security.authorize({ data: { email: 'jwtn3d@juice-sh.op' } })
      req.headers = { authorization: `Bearer ${token}` }

Helpers.test_helper_67(); // Replaced with helper function

      expect(challenges.jwtForgedChallenge.solved).to.equal(false)
    })

    if (utils.isChallengeEnabled(challenges.jwtForgedChallenge)) {
      it(''jwtForgedChallenge' is solved when forged token HMAC-signed with public RSA-key has email rsa_lord@juice-sh.op in the payload', () => {
        /*
        Header: { 'alg': 'HS256', 'typ': 'JWT' }
        Payload: { 'data': { 'email': 'rsa_lord@juice-sh.op' }, 'iat': 1508639612, 'exp': 9999999999 }
         */
        req.headers = { authorization: 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJkYXRhIjp7ImVtYWlsIjoicnNhX2xvcmRAanVpY2Utc2gub3AifSwiaWF0IjoxNTgyMjIxNTc1fQ.ycFwtqh4ht4Pq9K5rhiPPY256F9YCTIecd4FHFuSEAg' }

Helpers.test_helper_67(); // Replaced with helper function

Helpers.test_helper_69(); // Replaced with helper function

      it(''jwtForgedChallenge' is solved when forged token HMAC-signed with public RSA-key has string 'rsa_lord@' in the payload', () => {
        /*
        Header: { 'alg': 'HS256', 'typ': 'JWT' }
        Payload: { 'data': { 'email': 'rsa_lord@' }, 'iat': 1508639612, 'exp': 9999999999 }
         */
        req.headers = { authorization: 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJkYXRhIjp7ImVtYWlsIjoicnNhX2xvcmRAIn0sImlhdCI6MTU4MjIyMTY3NX0.50f6VAIQk2Uzpf3sgH-1JVrrTuwudonm2DKn2ec7Tg8' }

Helpers.test_helper_67(); // Replaced with helper function

Helpers.test_helper_69(); // Replaced with helper function

      it(''jwtForgedChallenge' is not solved when token regularly signed with private RSA-key has email rsa_lord@juice-sh.op in the payload', () => {
        const token = security.authorize({ data: { email: 'rsa_lord@juice-sh.op' } })
        req.headers = { authorization: `Bearer ${token}` }

Helpers.test_helper_67(); // Replaced with helper function

        expect(challenges.jwtForgedChallenge.solved).to.equal(false)
      })
    }
  })
})
