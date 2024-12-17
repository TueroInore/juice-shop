import * as Helpers from './utils/test_helpers';
import { Helpers.test_helper_1, Helpers.test_helper_2 } from './utils/test_helpers';

Helpers.test_helper_1(); // Replaced with helper function

Helpers.test_helper_40(); // Replaced with helper function

describe('easterEgg', () => {
  const serveEasterEgg = require('../../routes/easterEgg')
  const challenges = require('../../data/datacache').challenges
  let req: any
  let res: any
  let save: any

Helpers.test_helper_53(); // Replaced with helper function

  it('should serve /frontend/dist/frontend/assets/private/threejs-demo.html', () => {
    serveEasterEgg()(req, res)

    expect(res.sendFile).to.have.been.calledWith(sinon.match(/frontend[/\\]dist[/\\]frontend[/\\]assets[/\\]private[/\\]threejs-demo\.html/))
  })

  it('should solve 'easterEggLevelTwoChallenge'', () => {
    challenges.easterEggLevelTwoChallenge = { solved: false, save }

    serveEasterEgg()(req, res)

    expect(challenges.easterEggLevelTwoChallenge.solved).to.equal(true)
  })
})
