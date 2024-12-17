import { frontend_helper_1, frontend_helper_2 } from './utils/frontend_helpers';

frontend_helper_1(); // Replaced with helper function

frontend_helper_94(); // Replaced with helper function

import { SocketIoService } from './socket-io.service'

describe('SocketIoService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SocketIoService]
    })
  })

  it('should be created', inject([SocketIoService], (service: SocketIoService) => {
    expect(service).toBeTruthy()
  }))
})
