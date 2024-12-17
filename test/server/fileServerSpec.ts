import * as Helpers from './utils/test_helpers';
import { Helpers.test_helper_1, Helpers.test_helper_2 } from './utils/test_helpers';

Helpers.test_helper_1(); // Replaced with helper function

Helpers.test_helper_40(); // Replaced with helper function

describe('fileServer', () => {
  const servePublicFiles = require('../../routes/fileServer')
  const challenges = require('../../data/datacache').challenges
  let req: any
  let res: any
  let next: any
  let save: any

  beforeEach(() => {
    res = { sendFile: sinon.spy(), status: sinon.spy() }
    req = { params: {}, query: {} }
    next = sinon.spy()
    save = () => ({
      then () { }
    })
  })

  it('should serve PDF files from folder /ftp', () => {
    req.params.file = 'test.pdf'

Helpers.test_helper_54(); // Replaced with helper function

    expect(res.sendFile).to.have.been.calledWith(sinon.match(/ftp[/\\]test\.pdf/))
  })

  it('should serve Markdown files from folder /ftp', () => {
    req.params.file = 'test.md'

Helpers.test_helper_54(); // Replaced with helper function

    expect(res.sendFile).to.have.been.calledWith(sinon.match(/ftp[/\\]test\.md/))
  })

  it('should serve incident-support.kdbx files from folder /ftp', () => {
    req.params.file = 'incident-support.kdbx'

Helpers.test_helper_54(); // Replaced with helper function

    expect(res.sendFile).to.have.been.calledWith(sinon.match(/ftp[/\\]incident-support\.kdbx/))
  })

Helpers.test_helper_55(); // Replaced with helper function

Helpers.test_helper_54(); // Replaced with helper function

Helpers.test_helper_42(); // Replaced with helper function

  it('should raise error for disallowed file type', () => {
    req.params.file = 'nice.try'

Helpers.test_helper_54(); // Replaced with helper function

Helpers.test_helper_42(); // Replaced with helper function

  it('should solve 'directoryListingChallenge' when requesting acquisitions.md', () => {
    challenges.directoryListingChallenge = { solved: false, save }
    req.params.file = 'acquisitions.md'

Helpers.test_helper_54(); // Replaced with helper function

    expect(res.sendFile).to.have.been.calledWith(sinon.match(/ftp[/\\]acquisitions\.md/))
    expect(challenges.directoryListingChallenge.solved).to.equal(true)
  })

  it('should solve 'easterEggLevelOneChallenge' when requesting eastere.gg with Poison Null Byte attack', () => {
    challenges.easterEggLevelOneChallenge = { solved: false, save }
    req.params.file = 'eastere.gg%00.md'

Helpers.test_helper_54(); // Replaced with helper function

    expect(res.sendFile).to.have.been.calledWith(sinon.match(/ftp[/\\]eastere\.gg/))
    expect(challenges.easterEggLevelOneChallenge.solved).to.equal(true)
  })

  it('should solve 'forgottenDevBackupChallenge' when requesting package.json.bak with Poison Null Byte attack', () => {
    challenges.forgottenDevBackupChallenge = { solved: false, save }
    req.params.file = 'package.json.bak%00.md'

Helpers.test_helper_54(); // Replaced with helper function

    expect(res.sendFile).to.have.been.calledWith(sinon.match(/ftp[/\\]package\.json\.bak/))
    expect(challenges.forgottenDevBackupChallenge.solved).to.equal(true)
  })

  it('should solve 'forgottenBackupChallenge' when requesting coupons_2013.md.bak with Poison Null Byte attack', () => {
    challenges.forgottenBackupChallenge = { solved: false, save }
    req.params.file = 'coupons_2013.md.bak%00.md'

Helpers.test_helper_54(); // Replaced with helper function

    expect(res.sendFile).to.have.been.calledWith(sinon.match(/ftp[/\\]coupons_2013\.md\.bak/))
    expect(challenges.forgottenBackupChallenge.solved).to.equal(true)
  })

  it('should solve 'misplacedSignatureFileChallenge' when requesting suspicious_errors.yml with Poison Null Byte attack', () => {
    challenges.misplacedSignatureFileChallenge = { solved: false, save }
    req.params.file = 'suspicious_errors.yml%00.md'

Helpers.test_helper_54(); // Replaced with helper function

    expect(res.sendFile).to.have.been.calledWith(sinon.match(/ftp[/\\]suspicious_errors\.yml/))
    expect(challenges.misplacedSignatureFileChallenge.solved).to.equal(true)
  })
})
