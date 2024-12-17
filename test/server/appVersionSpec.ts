import * as Helpers from './utils/test_helpers';
import { Helpers.test_helper_1, Helpers.test_helper_2 } from './utils/test_helpers';

Helpers.test_helper_1(); // Replaced with helper function

Helpers.test_helper_44(); // Replaced with helper function

describe('appVersion', () => {
  const retrieveAppVersion = require('../../routes/appVersion')
  let req: any
  let res: any

  it('should ' + config.get<boolean>('application.showVersionNumber') ? '' : 'not ' + 'return version specified in package.json', () => {
    req = {}
    res = { json: sinon.spy() }

    retrieveAppVersion()(req, res)
    expect(res.json).to.have.been.calledWith({ version: config.get<boolean>('application.showVersionNumber') ? require('../../package.json').version : '' })
  })
})
