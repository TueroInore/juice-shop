import * as Helpers from './utils/frontend_helpers';
import { Helpers.frontend_helper_1, Helpers.frontend_helper_2 } from './utils/frontend_helpers';

Helpers.frontend_helper_1(); // Replaced with helper function

Helpers.frontend_helper_78(); // Replaced with helper function

import { RecycleService } from './recycle.service'

describe('RecycleService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [RecycleService]
    })
  })

  it('should be created', inject([RecycleService], (service: RecycleService) => {
    expect(service).toBeTruthy()
  }))

  it('should find the recycle directly from the rest api', inject([RecycleService, HttpTestingController],
    fakeAsync((service: RecycleService, httpMock: HttpTestingController) => {
      let res: any
      service.find().subscribe((data) => (res = data))
      const req = httpMock.expectOne('http://localhost:3000/api/Recycles/')
      req.flush({ data: 'apiResponse' })

Helpers.frontend_helper_93(); // Replaced with helper function

  it('should create recycle directly via the rest api', inject([RecycleService, HttpTestingController],
    fakeAsync((service: RecycleService, httpMock: HttpTestingController) => {
      let res: any
      service.save(1).subscribe((data) => (res = data))
      const req = httpMock.expectOne('http://localhost:3000/api/Recycles/')
      req.flush({ data: 'apiResponse' })

Helpers.frontend_helper_92(); // Replaced with helper function