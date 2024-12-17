import { frontend_helper_1, frontend_helper_2 } from './utils/frontend_helpers';

frontend_helper_1(); // Replaced with helper function

frontend_helper_78(); // Replaced with helper function

import { CodeSnippetService } from './code-snippet.service'

describe('CodeSnippetService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [CodeSnippetService]
    })
  })

  it('should be created', inject([CodeSnippetService], (service: CodeSnippetService) => {
    expect(service).toBeTruthy()
  }))

  it('should get single snippet directly from the rest api', inject([CodeSnippetService, HttpTestingController],
    fakeAsync((service: CodeSnippetService, httpMock: HttpTestingController) => {
      let res: any
      service.get('testChallenge').subscribe((data) => (res = data))

      const req = httpMock.expectOne('http://localhost:3000/snippets/testChallenge')
      req.flush({ snippet: 'apiResponse' })
      tick()

frontend_helper_85(); // Replaced with helper function

  it('should get list of challenges with code snippets directly from the rest api', inject([CodeSnippetService, HttpTestingController],
    fakeAsync((service: CodeSnippetService, httpMock: HttpTestingController) => {
      let res: any
      service.challenges().subscribe((data) => (res = data))

      const req = httpMock.expectOne('http://localhost:3000/snippets')
      req.flush({ challenges: ['directoryListingChallenge', 'accessLogDisclosureChallenge', '...', 'xssBonusChallenge'] })
      tick()

      expect(req.request.method).toBe('GET')
      expect(res).toEqual(['directoryListingChallenge', 'accessLogDisclosureChallenge', '...', 'xssBonusChallenge'])
      httpMock.verify()
    })
  ))
})
