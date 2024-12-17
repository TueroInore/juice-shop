import { test_helper_1, test_helper_2 } from './utils/test_helpers';

test_helper_1(); // Replaced with helper function

test_helper_40(); // Replaced with helper function

describe('premiumReward', () => {
  const servePremiumContent = require('../../routes/premiumReward')
  const challenges = require('../../data/datacache').challenges
  let req: any
  let res: any
  let save: any

test_helper_53(); // Replaced with helper function

  it('should serve /frontend/dist/frontend/assets/private/JuiceShop_Wallpaper_1920x1080_VR.jpg', () => {
    servePremiumContent()(req, res)

    expect(res.sendFile).to.have.been.calledWith(sinon.match(/frontend[/\\]dist[/\\]frontend[/\\]assets[/\\]private[/\\]JuiceShop_Wallpaper_1920x1080_VR\.jpg/))
  })

  it('should solve 'premiumPaywallChallenge'', () => {
    challenges.premiumPaywallChallenge = { solved: false, save }

    servePremiumContent()(req, res)

    expect(challenges.premiumPaywallChallenge.solved).to.equal(true)
  })
})
