import * as Helpers from './utils/frontend_helpers';
import { Helpers.frontend_helper_1, Helpers.frontend_helper_2 } from './utils/frontend_helpers';

Helpers.frontend_helper_1(); // Replaced with helper function

Helpers.frontend_helper_78(); // Replaced with helper function

import { ProductService } from './product.service'

describe('ProductService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [ProductService]
    })
  })

  it('should be created', inject([ProductService], (service: ProductService) => {
    expect(service).toBeTruthy()
  }))

  it('should search for products directly from the rest api', inject([ProductService, HttpTestingController],
    fakeAsync((service: ProductService, httpMock: HttpTestingController) => {
      let res: any
      service.search('1').subscribe((data) => (res = data))
      const req = httpMock.expectOne('http://localhost:3000/rest/products/search?q=1')
      req.flush({ data: 'apiResponse' })

Helpers.frontend_helper_95(); // Replaced with helper function

  it('should get all products directly from the rest api', inject([ProductService, HttpTestingController],
    fakeAsync((service: ProductService, httpMock: HttpTestingController) => {
      let res: any
      service.find(null).subscribe((data) => (res = data))
      const req = httpMock.expectOne('http://localhost:3000/api/Products/')
      req.flush({ data: 'apiResponse' })

Helpers.frontend_helper_93(); // Replaced with helper function

  it('should get single product directly from the rest api', inject([ProductService, HttpTestingController],
    fakeAsync((service: ProductService, httpMock: HttpTestingController) => {
      let res: any
      service.get(1).subscribe((data) => (res = data))
      const req = httpMock.expectOne('http://localhost:3000/api/Products/1?d=' + encodeURIComponent(new Date().toDateString()))
      req.flush({ data: 'apiResponse' })

Helpers.frontend_helper_81(); // Replaced with helper function