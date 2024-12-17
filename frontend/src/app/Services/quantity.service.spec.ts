import { frontend_helper_1, frontend_helper_2 } from './utils/frontend_helpers';

frontend_helper_1(); // Replaced with helper function

frontend_helper_78(); // Replaced with helper function

import { QuantityService } from './quantity.service'

describe('QuantityService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [QuantityService]
    })
  })

  it('should be created', inject([QuantityService], (service: QuantityService) => {
    expect(service).toBeTruthy()
  }))

  it('should get all quantities directly from the rest api', inject([QuantityService, HttpTestingController],
    fakeAsync((service: QuantityService, httpMock: HttpTestingController) => {
      let res
      service.getAll().subscribe((data) => (res = data))
      const req = httpMock.expectOne('http://localhost:3000/api/Quantitys/')
      req.flush({ data: 'apiResponse' })

frontend_helper_93(); // Replaced with helper function

  it('should change quantity directly via the rest api', inject([QuantityService, HttpTestingController],
    fakeAsync((service: QuantityService, httpMock: HttpTestingController) => {
      let res
      service.put(42, {}).subscribe((data) => (res = data))
      const req = httpMock.expectOne('http://localhost:3000/api/Quantitys/42')
      req.flush({ data: 'apiResponse' })

      tick()
      expect(req.request.method).toBe('PUT')
      expect(req.request.body).toEqual({})
      expect(res).toBe('apiResponse')
      httpMock.verify()
    })
  ))
})
