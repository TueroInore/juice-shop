import * as Helpers from './utils/frontend_helpers';
import { Helpers.frontend_helper_1, Helpers.frontend_helper_2 } from './utils/frontend_helpers';

Helpers.frontend_helper_1(); // Replaced with helper function

Helpers.frontend_helper_78(); // Replaced with helper function

import { LanguagesService } from './languages.service'

describe('LanguagesService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [HttpClientTestingModule],
    providers: [LanguagesService]
  }))

  it('should be created', () => {
    const service: LanguagesService = TestBed.inject(LanguagesService)
    expect(service).toBeTruthy()
  })

  it('should get the language list through the rest API', inject([LanguagesService, HttpTestingController],
    fakeAsync((service: LanguagesService, httpMock: HttpTestingController) => {
      let res: any
      service.getLanguages().subscribe((data) => (res = data))

      const req = httpMock.expectOne('http://localhost:3000/rest/languages')
      req.flush('apiResponse')

      tick()

Helpers.frontend_helper_89(); // Replaced with helper function

Helpers.frontend_helper_90(); // Replaced with helper function