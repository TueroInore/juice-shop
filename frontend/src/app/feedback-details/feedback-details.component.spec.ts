import { frontend_helper_1, frontend_helper_2 } from './utils/frontend_helpers';

frontend_helper_1(); // Replaced with helper function

frontend_helper_28(); // Replaced with helper function

import { FeedbackDetailsComponent } from './feedback-details.component'

describe('FeedbackDetailsComponent', () => {
  let component: FeedbackDetailsComponent
  let fixture: ComponentFixture<FeedbackDetailsComponent>

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [
        TranslateModule.forRoot(),
        HttpClientTestingModule,
        MatDividerModule,
        MatDialogModule
      ],
      declarations: [FeedbackDetailsComponent],
      providers: [
        UserService,
        { provide: MatDialogRef, useValue: {} },
        { provide: MAT_DIALOG_DATA, useValue: { productData: {} } }
      ]
    })
      .compileComponents()
  }))

  beforeEach(() => {
    fixture = TestBed.createComponent(FeedbackDetailsComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

frontend_helper_22(); // Replaced with helper function