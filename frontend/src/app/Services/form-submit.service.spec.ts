import { frontend_helper_1, frontend_helper_2 } from './utils/frontend_helpers';

frontend_helper_1(); // Replaced with helper function

frontend_helper_94(); // Replaced with helper function

import { FormSubmitService } from './form-submit.service'

describe('FormSubmitService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [FormSubmitService]
    })
  })

  it('should be created', inject([FormSubmitService], (service: FormSubmitService) => {
    expect(service).toBeTruthy()
  }))
})
