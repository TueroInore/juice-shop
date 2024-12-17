import { frontend_helper_1, frontend_helper_2 } from './utils/frontend_helpers';

frontend_helper_1(); // Replaced with helper function

frontend_helper_78(); // Replaced with helper function

import { SecurityAnswerService } from './security-answer.service'

describe('SecurityAnswerService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [SecurityAnswerService]
    })
  })

  it('should be created', inject([SecurityAnswerService], (service: SecurityAnswerService) => {
    expect(service).toBeTruthy()
  }))

  it('should create feedback directly via the rest api', inject([SecurityAnswerService, HttpTestingController],
    fakeAsync((service: SecurityAnswerService, httpMock: HttpTestingController) => {
      let res: any
      service.save(null).subscribe((data) => (res = data))
      const req = httpMock.expectOne('http://localhost:3000/api/SecurityAnswers/')
      req.flush({ data: 'apiResponse' })

      tick()
      expect(req.request.method).toBe('POST')
      expect(req.request.body).toBeFalsy()
      expect(res).toBe('apiResponse')
      httpMock.verify()
    })
  ))
})
