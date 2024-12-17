import { frontend_helper_1, frontend_helper_2 } from './utils/frontend_helpers';

frontend_helper_1(); // Replaced with helper function

frontend_helper_78(); // Replaced with helper function

import { CountryMappingService } from './country-mapping.service'

describe('CountryMappingService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [CountryMappingService]
    })
  })

  it('should be created', inject([CountryMappingService], (service: CountryMappingService) => {
    expect(service).toBeTruthy()
  }))

  it('should get the country mapping directly through the rest API', inject([CountryMappingService, HttpTestingController],
    fakeAsync((service: CountryMappingService, httpMock: HttpTestingController) => {
      let res: any
      service.getCountryMapping().subscribe((data) => (res = data))

      const req = httpMock.expectOne('http://localhost:3000/rest/country-mapping')
      req.flush('apiResponse')

      tick()

frontend_helper_89(); // Replaced with helper function

frontend_helper_90(); // Replaced with helper function