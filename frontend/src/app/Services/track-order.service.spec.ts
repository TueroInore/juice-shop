import { frontend_helper_1, frontend_helper_2 } from './utils/frontend_helpers';

frontend_helper_1(); // Replaced with helper function

frontend_helper_78(); // Replaced with helper function

import { TrackOrderService } from './track-order.service'

describe('TrackOrderService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [TrackOrderService]
    })
  })

  it('should be created', inject([TrackOrderService], (service: TrackOrderService) => {
    expect(service).toBeTruthy()
  }))

  it('should get tracking order results directly via the rest api', inject([TrackOrderService, HttpTestingController],
    fakeAsync((service: TrackOrderService, httpMock: HttpTestingController) => {
      let res: any
      service.find('5267-f9cd5882f54c75a3').subscribe((data) => (res = data))
      const req = httpMock.expectOne('http://localhost:3000/rest/track-order/5267-f9cd5882f54c75a3')
      req.flush('apiResponse')

frontend_helper_81(); // Replaced with helper function