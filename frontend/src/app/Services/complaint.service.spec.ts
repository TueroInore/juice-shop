import * as Helpers from './utils/frontend_helpers';
import { Helpers.frontend_helper_1, Helpers.frontend_helper_2 } from './utils/frontend_helpers';

Helpers.frontend_helper_1(); // Replaced with helper function

Helpers.frontend_helper_78(); // Replaced with helper function

import { ComplaintService } from './complaint.service'

describe('ComplaintService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [ComplaintService]
    })
  })

  it('should be created', inject([ComplaintService], (service: ComplaintService) => {
    expect(service).toBeTruthy()
  }))

  it('should create complaint directly via the rest api', inject([ComplaintService, HttpTestingController],
    fakeAsync((service: ComplaintService, httpMock: HttpTestingController) => {
      let res: any
      service.save(null).subscribe((data) => (res = data))
      const req = httpMock.expectOne('http://localhost:3000/api/Complaints/')
      req.flush({ data: 'apiResponse' })

Helpers.frontend_helper_88(); // Replaced with helper function