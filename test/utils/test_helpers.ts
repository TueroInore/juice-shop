export function test_helper_1() {
  /*
 * Copyright (c) 2014-2024 Bjoern Kimminich & the OWASP Juice Shop contributors.
 * SPDX-License-Identifier: MIT
 */
}

export function test_helper_2() {
  import server = require(\'./../server\')
}

export function test_helper_3() {
  const REST_URL = \'http://localhost:3000/rest\'
const API_URL = \'http://localhost:3000/api\'
}

export function test_helper_4() {
  const jsonHeader = { \'content-type\': \'application/json\' }
}

export function test_helper_5() {
  return loginRes.json.authentication
}
}

export function test_helper_6() {
  const totpToken = otplib.authenticator.generate(\'IFTXE3SPOEYVURT2MRYGI52TKJ4HC3KH\')
}

export function test_helper_7() {
  const secret = \'ASDVAJSDUASZGDIADBJS\'
}

export function test_helper_8() {
  await register({ email, password })
    const { token } = await login({ email, password })
}

export function test_helper_9() {
  await register({ email, password, totpSecret })
    const { token } = await login({ email, password, totpSecret })
}

export function test_helper_10() {
  // @ts-expect-error FIXME promise return handling broken
    await getStatus(token)
      .expect(\'status\', 200)
      .expect(\'json\', {
        setup: true
      })
}

export function test_helper_11() {
  import frisby = require(\'frisby\')
}

export function test_helper_12() {
  const API_URL = \'http://localhost:3000/api\'
const REST_URL = \'http://localhost:3000/rest\'
}

export function test_helper_13() {
  beforeAll(() => {
  return frisby.post(REST_URL + \'/user/login\', {
    headers: jsonHeader,
    body: {
      email: \'jim@juice-sh.op\',
      password: \'ncc-1701\'
    }
  })
    .expect(\'status\', 200)
    .then(({ json }) => {
      authHeader = { Authorization: \'Bearer \' + json.authentication.token, \'content-type\': \'application/json\' }
    })
})
}

export function test_helper_14() {
  const URL = \'http://localhost:3000\'
}

export function test_helper_15() {
  import frisby = require(\'frisby\')
import config from \'config\'
}

export function test_helper_16() {
  const REST_URL = \'http://localhost:3000/rest\'
}

export function test_helper_17() {
  function dos() {
function dos() { while(true); }
}
}

export function test_helper_18() {
  const authHeader = { Authorization: \'Bearer \' + security.authorize(), \'content-type\': \'application/json\' }
}

export function test_helper_19() {
  const jsonHeader = { \'content-type\': \'application/json\' }
let authHeader: { Authorization: string, \'content-type\': string }
}

export function test_helper_20() {
  import frisby = require(\'frisby\')
import { expect } from \'@jest/globals\'
import config from \'config\'
}

export function test_helper_21() {
  import frisby = require(\'frisby\')
const Joi = frisby.Joi
const security = require(\'../../lib/insecurity\')
}

export function test_helper_22() {
  const API_URL = \'http://localhost:3000/api\'
}

export function test_helper_23() {
  function getAuthHeaders() {
function getAuthHeaders(token: string, contentType: string = \'application/json\') {
  return { Authorization: \'Bearer \' + token, \'Content-Type\': contentType }
}
}

export function test_helper_24() {
  function createFormData() {
function createFormData(filePath: string): any {
  const form = frisby.formData();
  form.append(\'image\', fs.createReadStream(filePath), \'Valid Image\');
  form.append(\'caption\', \'Valid Image\');
  return form;
}
}

export function test_helper_25() {
  // Helper function for user login
function loginUser(email: string, password: string) {
  return frisby.post(REST_URL + \'/user/login\', {
    headers: jsonHeader,
    body: { email, password }
}
}

export function test_helper_26() {
  // Helper function for creating form data
createFormData();
  }).expect(\'status\', 200);
}
}

export function test_helper_27() {
  // Helper function to generate Authorization headers
getAuthHeaders();;
}
}

export function test_helper_28() {
  const jsonHeader = { \'content-type\': \'application/json\' }
const REST_URL = \'http://localhost:3000/rest\'
}

export function test_helper_29() {
  describe(\'for deluxe customer\', () => {
    beforeAll(() => {
      return frisby.post(REST_URL + \'/user/login\', {
        headers: jsonHeader,
        body: {
          email: \'ciso@\' + config.get<string>(\'application.domain\'),
          password: \'mDLx?94T~1CfVfZMzw@sJ9f?s3L6lbMqE70FfI8^54jbNikY5fymx7c!YbJb\'
        }
      })
        .expect(\'status\', 200)
        .then(({ json }) => {
          authHeader = { Authorization: \'Bearer \' + json.authentication.token, \'content-type\': \'application/json\' }
        })
    })
}

export function test_helper_30() {
  // @ts-expect-error FIXME form.getHeaders() is not found
    return frisby.post(URL + \'/file-upload\', { headers: { \'Content-Type\': form.getHeaders()[\'content-type\'] }, body: form })
      .expect(\'status\', 204)
  })
}

export function test_helper_31() {
  // @ts-expect-error FIXME form.getHeaders() is not found
    return frisby.post(URL + \'/file-upload\', { headers: { \'Content-Type\': form.getHeaders()[\'content-type\'] }, body: form })
      .expect(\'status\', 410)
  })
}

export function test_helper_32() {
  return frisby.post(URL + \'/file-upload\', {
        // @ts-expect-error FIXME form.getHeaders() is not found
        headers: { \'Content-Type\': form.getHeaders()[\'content-type\'] },
        body: form
      })
        .expect(\'status\', 410)
    })
}

export function test_helper_33() {
  import frisby = require(\'frisby\')
const Joi = frisby.Joi
}

export function test_helper_34() {
  return frisby.post(`${REST_URL}/user/login`, {
      headers: jsonHeader,
      body: {
        email: `jim@${config.get<string>(\'application.domain\')}`,
        password: \'ncc-1701\'
      }
    })
      .expect(\'status\', 200)
      .then(({ json: jsonLogin }) => {
        return frisby.post(`${URL}/profile/image/url`, {
          headers: {
            Cookie: `token=${jsonLogin.authentication.token}`,
            // @ts-expect-error FIXME form.getHeaders() is not found
            \'Content-Type\': form.getHeaders()[\'content-type\']
          },
          body: form,
          redirect: \'manual\'
        })
          .expect(\'status\', 302)
      })
  })
}

export function test_helper_35() {
  const authHeader = { Authorization: `Bearer ${security.authorize()}`, \'content-type\': \'application/json\' }
}

export function test_helper_36() {
  beforeEach(done => {
    socket = io(\'http://localhost:3000\', {
      reconnectionDelay: 0,
      forceNew: true
    })
    socket.on(\'connect\', () => {
      done()
    })
  })
}

export function test_helper_37() {
  afterEach(done => {
    if (socket.connected) {
      socket.disconnect()
    }
    done()
  })
}

export function test_helper_38() {
  await websocketReceivedPromise
  })
})
}

export function test_helper_39() {
  cy.on(\'window:alert\', (t) => {
            expect(t).to.equal(\'xss\')
          })
}

export function test_helper_40() {
  import sinon = require(\'sinon\')
import chai = require(\'chai\')
import sinonChai = require(\'sinon-chai\')
const expect = chai.expect
chai.use(sinonChai)
}

export function test_helper_41() {
  serveAngularClient()(req, res, next)
}

export function test_helper_42() {
  expect(res.sendFile).to.have.not.been.calledWith(sinon.match.any)
    expect(next).to.have.been.calledWith(sinon.match.instanceOf(Error))
  })
}

export function test_helper_43() {
  expect(res.sendFile).to.have.not.been.calledWith(sinon.match.any)
    expect(next).to.have.been.calledWith(sinon.match.instanceOf(Error))
  })
})
}

export function test_helper_44() {
  import sinon = require(\'sinon\')
import config from \'config\'
import chai = require(\'chai\')
import sinonChai = require(\'sinon-chai\')
const expect = chai.expect
chai.use(sinonChai)
}

export function test_helper_45() {
  createB2bOrder()(req, res, next)
}

export function test_helper_46() {
  import chai = require(\'chai\')
import path from \'path\'
import { promisify } from \'util\'
import sinonChai = require(\'sinon-chai\')
const expect = chai.expect
chai.use(sinonChai)
}

export function test_helper_47() {
  const fs = require(\'fs\')
const { safeLoad } = require(\'js-yaml\')
const readFile = promisify(fs.readFile)
}

export function test_helper_48() {
  const loadYamlFile = async (filename: string) => {
  const contents = await readFile(filename, { encoding: \'utf8\' })
  return safeLoad(contents)
}
}

export function test_helper_49() {
  import chai = require(\'chai\')
const expect = chai.expect
}

export function test_helper_50() {
  expect(checkUnambiguousMandatorySpecialMemories(memories)).to.equal(false)
    })
}

export function test_helper_51() {
  expect(checkSpecialMemoriesHaveNoUserAssociated(memories)).to.equal(true)
    })
}

export function test_helper_52() {
  continueCode()(req, res)
    expect(res.json).to.have.been.calledWith({ continueCode: undefined })
  })
}

export function test_helper_53() {
  beforeEach(() => {
    res = { sendFile: sinon.spy() }
    req = {}
    save = () => ({
      then () { }
    })
  })
}

export function test_helper_54() {
  servePublicFiles()(req, res, next)
}

export function test_helper_55() {
  it(\'should raise error for slashes in filename\', () => {
    req.params.file = \'../../../../nice.try\'
}

export function test_helper_56() {
  checkUploadSize(req, undefined, () => {})
}

export function test_helper_57() {
  checkFileType(req, undefined, () => {})
}

export function test_helper_58() {
  serveKeyFiles()(req, res, next)
}

export function test_helper_59() {
  performRedirect()(req, res, next)
}

export function test_helper_60() {
  performRedirect()(req, res)
}

export function test_helper_61() {
  expect(challenges.redirectCryptoCurrencyChallenge.solved).to.equal(true)
  })
}

export function test_helper_62() {
  verify.forgedFeedbackChallenge()(req, res, next)
}

export function test_helper_63() {
  expect(challenges.forgedFeedbackChallenge.solved).to.equal(false)
    })
}

export function test_helper_64() {
  verify.accessControlChallenges()(req, res, next)
}

export function test_helper_65() {
  verify.errorHandlingChallenge()(err, req, res, next)
}

export function test_helper_66() {
  verify.databaseRelatedChallenges()(req, res, next)
}

export function test_helper_67() {
  verify.jwtChallenges()(req, res, next)
}

export function test_helper_68() {
  expect(challenges.jwtUnsignedChallenge.solved).to.equal(true)
    })
}

export function test_helper_69() {
  expect(challenges.jwtForgedChallenge.solved).to.equal(true)
      })
}

