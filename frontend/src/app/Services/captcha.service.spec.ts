import { frontend_helper_1, frontend_helper_2 } from './utils/frontend_helpers';

frontend_helper_1(); // Replaced with helper function

frontend_helper_78(); // Replaced with helper function

import { CaptchaService } from './captcha.service'

describe('CaptchaService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [CaptchaService]
    })
  })

  it('should be created', inject([CaptchaService], (service: CaptchaService) => {
    expect(service).toBeTruthy()
  }))

  it('should get captcha directly from the rest api', inject([CaptchaService, HttpTestingController],
    fakeAsync((service: CaptchaService, httpMock: HttpTestingController) => {
      let res: any
      service.getCaptcha().subscribe((data) => (res = data))
      const req = httpMock.expectOne('http://localhost:3000/rest/captcha/')
      req.flush('apiResponse')

frontend_helper_81(); // Replaced with helper function