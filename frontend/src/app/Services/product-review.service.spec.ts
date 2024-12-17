import { frontend_helper_1, frontend_helper_2 } from './utils/frontend_helpers';

frontend_helper_1(); // Replaced with helper function

frontend_helper_78(); // Replaced with helper function

import { ProductReviewService } from './product-review.service'

describe('ProductReviewService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [ProductReviewService]
    })
  })

  it('should be created', inject([ProductReviewService], (service: ProductReviewService) => {
    expect(service).toBeTruthy()
  }))

  it('should get product reviews directly via the rest api', inject([ProductReviewService, HttpTestingController],
    fakeAsync((service: ProductReviewService, httpMock: HttpTestingController) => {
      let res: any
      service.get(42).subscribe((data) => (res = data))
      const req = httpMock.expectOne('http://localhost:3000/rest/products/42/reviews')
      req.flush({ data: 'apiResponse' })

frontend_helper_95(); // Replaced with helper function

  it('should create product reviews directly via the rest api', inject([ProductReviewService, HttpTestingController],
    fakeAsync((service: ProductReviewService, httpMock: HttpTestingController) => {
      let res: any
      service.create(42, { message: 'A', author: 'B' }).subscribe((data: any) => (res = data))
      const req = httpMock.expectOne('http://localhost:3000/rest/products/42/reviews')
      req.flush({ data: 'apiResponse' })

      tick()
      expect(req.request.method).toBe('PUT')
      expect(req.request.body).toEqual({ message: 'A', author: 'B' })
      expect(res).toBe('apiResponse')
      httpMock.verify()
    })
  ))

  it('should edit product reviews directly via the rest api', inject([ProductReviewService, HttpTestingController],
    fakeAsync((service: ProductReviewService, httpMock: HttpTestingController) => {
      let res: any
      service.patch(null as unknown as { id: string, message: string }).subscribe((data: any) => (res = data))
      const req = httpMock.expectOne('http://localhost:3000/rest/products/reviews')
      req.flush({ data: 'apiResponse' })

      tick()
      expect(req.request.method).toBe('PATCH')
      expect(req.request.body).toBe(null)
      expect(res).toBe('apiResponse')
      httpMock.verify()
    })
  ))
})
