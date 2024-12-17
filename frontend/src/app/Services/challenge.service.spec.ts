import * as Helpers from './utils/frontend_helpers';
import { Helpers.frontend_helper_1, Helpers.frontend_helper_2 } from './utils/frontend_helpers';

Helpers.frontend_helper_1(); // Replaced with helper function

Helpers.frontend_helper_78(); // Replaced with helper function

import { ChallengeService } from './challenge.service'

describe('ChallengeService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule
      ],
      providers: [ChallengeService]
    })
  })

  it('should be created', inject([ChallengeService], (service: ChallengeService) => {
    expect(service).toBeTruthy()
  }))

  it('should get all challenges directly from the rest api', inject([ChallengeService, HttpTestingController],
    fakeAsync((service: ChallengeService, httpMock: HttpTestingController) => {
      let res: any
      service.find().subscribe((data) => (res = data))

      const req = httpMock.expectOne('http://localhost:3000/api/Challenges/')
      req.flush({ data: 'apiResponse' })
      tick()

Helpers.frontend_helper_83(); // Replaced with helper function

  it('should get current continue code directly from the rest api', inject([ChallengeService, HttpTestingController],
    fakeAsync((service: ChallengeService, httpMock: HttpTestingController) => {
      let res: any
      service.continueCode().subscribe((data) => (res = data))

      const req = httpMock.expectOne('http://localhost:3000/rest/continue-code')
      req.flush({ continueCode: 'apiResponse' })
      tick()

Helpers.frontend_helper_83(); // Replaced with helper function

  it('should pass continue code for restoring challenge progress on to the rest api', inject([ChallengeService, HttpTestingController],
    fakeAsync((service: ChallengeService, httpMock: HttpTestingController) => {
      let res: any
      service.restoreProgress('CODE').subscribe((data) => (res = data))

      const req = httpMock.expectOne('http://localhost:3000/rest/continue-code/apply/CODE')
      req.flush({ data: 'apiResponse' })
      tick()

Helpers.frontend_helper_84(); // Replaced with helper function

  it('should get current "Find It" coding challenge continue code directly from the rest api', inject([ChallengeService, HttpTestingController],
    fakeAsync((service: ChallengeService, httpMock: HttpTestingController) => {
      let res: any
      service.continueCodeFindIt().subscribe((data) => (res = data))

      const req = httpMock.expectOne('http://localhost:3000/rest/continue-code-findIt')
      req.flush({ continueCode: 'apiResponse' })
      tick()

Helpers.frontend_helper_83(); // Replaced with helper function

  it('should pass "Find It" coding challenge continue code for restoring progress on to the rest api', inject([ChallengeService, HttpTestingController],
    fakeAsync((service: ChallengeService, httpMock: HttpTestingController) => {
      let res: any
      service.restoreProgressFindIt('CODE').subscribe((data) => (res = data))

      const req = httpMock.expectOne('http://localhost:3000/rest/continue-code-findIt/apply/CODE')
      req.flush({ data: 'apiResponse' })
      tick()

Helpers.frontend_helper_84(); // Replaced with helper function

  it('should get current "Fix It" coding challenge continue code directly from the rest api', inject([ChallengeService, HttpTestingController],
    fakeAsync((service: ChallengeService, httpMock: HttpTestingController) => {
      let res: any
      service.continueCodeFixIt().subscribe((data) => (res = data))

      const req = httpMock.expectOne('http://localhost:3000/rest/continue-code-fixIt')
      req.flush({ continueCode: 'apiResponse' })
      tick()

Helpers.frontend_helper_83(); // Replaced with helper function

  it('should pass "Fix It" coding challenge continue code for restoring progress on to the rest api', inject([ChallengeService, HttpTestingController],
    fakeAsync((service: ChallengeService, httpMock: HttpTestingController) => {
      let res: any
      service.restoreProgressFixIt('CODE').subscribe((data) => (res = data))

      const req = httpMock.expectOne('http://localhost:3000/rest/continue-code-fixIt/apply/CODE')
      req.flush({ data: 'apiResponse' })
      tick()

Helpers.frontend_helper_84(); // Replaced with helper function

  it('should repeat notification directly from the rest api', inject([ChallengeService, HttpTestingController],
    fakeAsync((service: ChallengeService, httpMock: HttpTestingController) => {
      let res: any
      service.repeatNotification('CHALLENGE').subscribe((data) => (res = data))

      const req = httpMock.expectOne(req => req.url === 'http://localhost:3000/rest/repeat-notification')
      req.flush('apiResponse')
      tick()

      expect(req.request.method).toBe('GET')
      expect(req.request.params.get('challenge')).toBe('CHALLENGE')
      expect(res).toBe('apiResponse')
      httpMock.verify()
    })
  ))
})
