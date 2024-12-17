import { test_helper_1, test_helper_2 } from './utils/test_helpers';

test_helper_1(); // Replaced with helper function

test_helper_40(); // Replaced with helper function

describe('appConfiguration', () => {
  const retrieveAppConfiguration = require('../../routes/appConfiguration')
  let req: any
  let res: any

  it('should return configuration object', () => {
    req = {}
    res = { json: sinon.spy() }

    retrieveAppConfiguration()(req, res)
    expect(res.json).to.have.been.calledWith({ config: require('config') })
  })
})
