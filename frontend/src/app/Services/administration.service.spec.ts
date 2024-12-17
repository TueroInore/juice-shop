import { frontend_helper_1, frontend_helper_2 } from './utils/frontend_helpers';

frontend_helper_1(); // Replaced with helper function

frontend_helper_78(); // Replaced with helper function

import { AdministrationService } from './administration.service'

describe('AdministrationService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [AdministrationService]
    })
  })

  it('should be created', inject([AdministrationService], (service: AdministrationService) => {
    expect(service).toBeTruthy()
  }))

  it('should get application version directly from the rest api', inject([AdministrationService, HttpTestingController],
    fakeAsync((service: AdministrationService, httpMock: HttpTestingController) => {
      let res: any
      service.getApplicationVersion().subscribe((data) => (res = data))
      const req = httpMock.expectOne('http://localhost:3000/rest/admin/application-version')
      req.flush({ version: 'apiResponse' })
      tick()

frontend_helper_79(); // Replaced with helper function