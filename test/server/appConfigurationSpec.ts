/*
 * Copyright (c) 2014-2024 Bjoern Kimminich & the OWASP Juice Shop contributors.
 * SPDX-License-Identifier: MIT
 */

import sinon = require('sinon')
import chai = require('chai')
import sinonChai = require('sinon-chai')
const expect = chai.expect
chai.use(sinonChai)

describe('appConfiguration', () => {
  const retrieveAppConfiguration = require('../../routes/appConfiguration')
  let req: unknown
  let res: unknown

  it('should return configuration object', () => {
    req = {}
    res = { json: sinon.spy() }

    retrieveAppConfiguration()(req, res)
    expect(res.json).to.have.been.calledWith({ config: require('config') })
  })
})
