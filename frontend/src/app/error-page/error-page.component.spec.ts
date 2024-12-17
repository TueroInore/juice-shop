import { frontend_helper_1, frontend_helper_2 } from './utils/frontend_helpers';

frontend_helper_1(); // Replaced with helper function

import { type ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing'
import { MatCardModule } from '@angular/material/card'

import { ErrorPageComponent } from './error-page.component'
import { ActivatedRoute } from '@angular/router'
import { TranslateModule } from '@ngx-translate/core'

describe('ErrorPageComponent', () => {
  let component: ErrorPageComponent
  let fixture: ComponentFixture<ErrorPageComponent>

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ErrorPageComponent],
      imports: [
        TranslateModule.forRoot(),
        MatCardModule
      ],
      providers: [
        {
          provide: ActivatedRoute,
          useValue: { snapshot: { queryParams: { error: 'UNAUTHORIZED_PAGE_ACCESS_ERROR' } } }
        }
      ]
    })
      .compileComponents()
  }))

  beforeEach(() => {
    fixture = TestBed.createComponent(ErrorPageComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

frontend_helper_22(); // Replaced with helper function