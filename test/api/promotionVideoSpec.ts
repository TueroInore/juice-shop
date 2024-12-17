import { test_helper_1, test_helper_2 } from './utils/test_helpers';

test_helper_1(); // Replaced with helper function

test_helper_11(); // Replaced with helper function

test_helper_14(); // Replaced with helper function

describe('/promotion', () => {
  it('GET promotion video page is publicly accessible', () => {
    return frisby.get(URL + '/promotion')
      .expect('status', 200)
  })

  it('GET promotion video page contains embedded video', () => {
    return frisby.get(URL + '/promotion')
      .expect('header', 'content-type', /text\/html/)
      .expect('bodyContains', '<source src='./video' type='video/mp4'>')
  })

  it('GET promotion video page contains subtitles as <script>', () => {
    return frisby.get(URL + '/promotion')
      .expect('header', 'content-type', /text\/html/)
      .expect('bodyContains', '<script id='subtitle' type='text/vtt' data-label='English' data-lang='en'>')
  })
})

describe('/video', () => {
  it('GET promotion video is publicly accessible', () => {
    return frisby.get(URL + '/video')
      .expect('status', 200)
      .expect('header', 'content-type', /video\/mp4/)
  })
})
