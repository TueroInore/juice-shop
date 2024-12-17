import { frontend_helper_1, frontend_helper_2 } from './utils/frontend_helpers';

frontend_helper_1(); // Replaced with helper function

frontend_helper_78(); // Replaced with helper function

import { FeedbackService } from './feedback.service'

describe('FeedbackService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [FeedbackService]
    })
  })

  it('should be created', inject([FeedbackService], (service: FeedbackService) => {
    expect(service).toBeTruthy()
  }))

  it('should get all feedback directly from the rest api', inject([FeedbackService, HttpTestingController],
    fakeAsync((service: FeedbackService, httpMock: HttpTestingController) => {
      let res: any
      service.find(null).subscribe((data) => (res = data))
      const req = httpMock.expectOne('http://localhost:3000/api/Feedbacks/')
      req.flush({ data: 'apiResponse' })

frontend_helper_93(); // Replaced with helper function

  it('should delete feedback directly via the rest api', inject([FeedbackService, HttpTestingController],
    fakeAsync((service: FeedbackService, httpMock: HttpTestingController) => {
      let res: any
      service.del(1).subscribe((data) => (res = data))
      const req = httpMock.expectOne('http://localhost:3000/api/Feedbacks/1')
      req.flush({ data: 'apiResponse' })

      tick()
      expect(req.request.method).toBe('DELETE')
      expect(res).toBe('apiResponse')
      httpMock.verify()
    })
  ))

  it('should create feedback directly via the rest api', inject([FeedbackService, HttpTestingController],
    fakeAsync((service: FeedbackService, httpMock: HttpTestingController) => {
      let res: any
      service.save(null).subscribe((data) => (res = data))
      const req = httpMock.expectOne('http://localhost:3000/api/Feedbacks/')
      req.flush({ data: 'apiResponse' })

frontend_helper_88(); // Replaced with helper function