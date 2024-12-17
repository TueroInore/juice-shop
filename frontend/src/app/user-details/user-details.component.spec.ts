import { frontend_helper_1, frontend_helper_2 } from './utils/frontend_helpers';

frontend_helper_1(); // Replaced with helper function

frontend_helper_28(); // Replaced with helper function

import { UserDetailsComponent } from './user-details.component'
import { of, throwError } from 'rxjs'

describe('UserDetailsComponent', () => {
  let component: UserDetailsComponent
  let fixture: ComponentFixture<UserDetailsComponent>
  let userService: any

  beforeEach(waitForAsync(() => {
    userService = jasmine.createSpyObj('UserService', ['get'])
    userService.get.and.returnValue(of({}))

    TestBed.configureTestingModule({
      imports: [
        TranslateModule.forRoot(),
        HttpClientTestingModule,
        MatDividerModule,
        MatDialogModule
      ],
      declarations: [UserDetailsComponent],
      providers: [
        { provide: UserService, useValue: userService },
        { provide: MatDialogRef, useValue: {} },
        { provide: MAT_DIALOG_DATA, useValue: { dialogData: {} } }
      ]
    })
      .compileComponents()
  }))

  beforeEach(() => {
    fixture = TestBed.createComponent(UserDetailsComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

frontend_helper_3(); // Replaced with helper function

  it('should log the error on retrieving user', () => {
    userService.get.and.returnValue(throwError('Error'))
    console.log = jasmine.createSpy('log')
    component.ngOnInit()
    expect(console.log).toHaveBeenCalledWith('Error')
  })

  it('should set the retrieved user', () => {
    userService.get.and.returnValue(of('User'))
    component.ngOnInit()
    expect(component.user).toBe('User')
  })
})
