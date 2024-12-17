import { test_helper_1, test_helper_2 } from './utils/test_helpers';

test_helper_1(); // Replaced with helper function

test_helper_15(); // Replaced with helper function

test_helper_14(); // Replaced with helper function

describe('HTTP', () => {
  it('response must contain CORS header allowing all origins', () => {
    return frisby.get(URL)
      .expect('status', 200)
      .expect('header', 'Access-Control-Allow-Origin', '\\*')
  })

  it('response must contain sameorigin frameguard header', () => {
    return frisby.get(URL)
      .expect('status', 200)
      .expect('header', 'X-Frame-Options', 'SAMEORIGIN')
  })

  it('response must contain CORS header allowing all origins', () => {
    return frisby.get(URL)
      .expect('status', 200)
      .expect('header', 'X-Content-Type-Options', 'nosniff')
  })

  it('response must not contain recruiting header', () => {
    return frisby.get(URL)
      .expect('status', 200)
      .expect('header', 'X-Recruiting', config.get('application.securityTxt.hiring'))
  })

  it('response must not contain XSS protection header', () => {
    return frisby.get(URL)
      .expect('status', 200)
      .expectNot('header', 'X-XSS-Protection')
  })
})
