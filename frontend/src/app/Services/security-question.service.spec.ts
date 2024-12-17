import * as Helpers from './utils/frontend_helpers';
import { Helpers.frontend_helper_1, Helpers.frontend_helper_2 } from './utils/frontend_helpers';

Helpers.frontend_helper_1(); // Replaced with helper function

Helpers.frontend_helper_78(); // Replaced with helper function

import { SecurityQuestionService } from './security-question.service'

describe('SecurityQuestionService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [SecurityQuestionService]
    })
  })

  it('should be created', inject([SecurityQuestionService], (service: SecurityQuestionService) => {
    expect(service).toBeTruthy()
  }))

  it('should get all challenges directly from the rest api', inject([SecurityQuestionService, HttpTestingController],
    fakeAsync((service: SecurityQuestionService, httpMock: HttpTestingController) => {
      let res: any
      service.find(null).subscribe((data) => (res = data))
      const req = httpMock.expectOne('http://localhost:3000/api/SecurityQuestions/')
      req.flush({ data: 'apiResponse' })
      tick()

Helpers.frontend_helper_97(); // Replaced with helper function

  it('should get security question by user email directly from the rest api', inject([SecurityQuestionService, HttpTestingController],
    fakeAsync((service: SecurityQuestionService, httpMock: HttpTestingController) => {
      let res: any
      service.findBy('x@y.z').subscribe((data) => (res = data))
      const req = httpMock.expectOne('http://localhost:3000/rest/user/security-question?email=x@y.z')
      req.flush({ question: 'apiResponse' })
      tick()

Helpers.frontend_helper_79(); // Replaced with helper function