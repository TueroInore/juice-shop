import { test_helper_1, test_helper_2 } from './utils/test_helpers';

test_helper_1(); // Replaced with helper function

test_helper_11(); // Replaced with helper function

test_helper_16(); // Replaced with helper function

describe('/rest/repeat-notification', () => {
  it('GET triggers repeating notification without passing a challenge', () => {
    return frisby.get(REST_URL + '/repeat-notification')
      .expect('status', 200)
  })

  it('GET triggers repeating notification passing an unsolved challenge', () => {
    return frisby.get(REST_URL + '/repeat-notification?challenge=Retrieve%20Blueprint')
      .expect('status', 200)
  })

  it('GET triggers repeating notification passing a solved challenge', () => {
    return frisby.get(REST_URL + '/repeat-notification?challenge=Error%20Handling')
      .expect('status', 200)
  })
})
