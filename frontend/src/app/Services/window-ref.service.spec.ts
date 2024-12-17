import { frontend_helper_1, frontend_helper_2 } from './utils/frontend_helpers';

frontend_helper_1(); // Replaced with helper function

frontend_helper_94(); // Replaced with helper function

import { WindowRefService } from './window-ref.service'

describe('WindowRefService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [WindowRefService]
    })
  })

  it('should be created', inject([WindowRefService], (service: WindowRefService) => {
    expect(service).toBeTruthy()
  }))
})
