import * as Helpers from './utils/test_helpers';
import { Helpers.test_helper_1, Helpers.test_helper_2 } from './utils/test_helpers';

Helpers.test_helper_1(); // Replaced with helper function

Helpers.test_helper_40(); // Replaced with helper function

describe('redirect', () => {
  const performRedirect = require('../../routes/redirect')
  const challenges = require('../../data/datacache').challenges
  let req: any
  let res: any
  let next: any
  let save: any

  beforeEach(() => {
    req = { query: {} }
    res = { redirect: sinon.spy(), status: sinon.spy() }
    next = sinon.spy()
    save = () => ({
      then () { }
    })
  })

  describe('should be performed for all allowlisted URLs', () => {
    for (const url of require('../../lib/insecurity').redirectAllowlist) {
      it(url, () => {
        req.query.to = url

Helpers.test_helper_59(); // Replaced with helper function

        expect(res.redirect).to.have.been.calledWith(url)
      })
    }
  })

  it('should raise error for URL not on allowlist', () => {
    req.query.to = 'http://kimminich.de'

Helpers.test_helper_59(); // Replaced with helper function

    expect(res.redirect).to.have.not.been.calledWith(sinon.match.any)
    expect(next).to.have.been.calledWith(sinon.match.instanceOf(Error))
  })

  it('redirecting to https://blockchain.info/address/1AbKfgvw9psQ41NbLi8kufDQTezwG8DRZm should solve the 'redirectCryptoCurrencyChallenge'', () => {
    req.query.to = 'https://blockchain.info/address/1AbKfgvw9psQ41NbLi8kufDQTezwG8DRZm'
    challenges.redirectCryptoCurrencyChallenge = { solved: false, save }

Helpers.test_helper_60(); // Replaced with helper function

Helpers.test_helper_61(); // Replaced with helper function

  it('redirecting to https://explorer.dash.org/address/Xr556RzuwX6hg5EGpkybbv5RanJoZN17kW should solve the 'redirectCryptoCurrencyChallenge'', () => {
    req.query.to = 'https://explorer.dash.org/address/Xr556RzuwX6hg5EGpkybbv5RanJoZN17kW'
    challenges.redirectCryptoCurrencyChallenge = { solved: false, save }

Helpers.test_helper_60(); // Replaced with helper function

Helpers.test_helper_61(); // Replaced with helper function

  it('redirecting to https://etherscan.io/address/0x0f933ab9fcaaa782d0279c300d73750e1311eae6 should solve the 'redirectCryptoCurrencyChallenge'', () => {
    req.query.to = 'https://etherscan.io/address/0x0f933ab9fcaaa782d0279c300d73750e1311eae6'
    challenges.redirectCryptoCurrencyChallenge = { solved: false, save }

Helpers.test_helper_60(); // Replaced with helper function

Helpers.test_helper_61(); // Replaced with helper function

  it('tricking the allowlist should solve 'redirectChallenge'', () => {
    req.query.to = 'http://kimminich.de?to=https://github.com/juice-shop/juice-shop'
    challenges.redirectChallenge = { solved: false, save }

Helpers.test_helper_60(); // Replaced with helper function

    expect(challenges.redirectChallenge.solved).to.equal(true)
  })
})
