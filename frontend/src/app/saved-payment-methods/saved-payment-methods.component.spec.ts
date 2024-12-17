import { frontend_helper_1, frontend_helper_2 } from './utils/frontend_helpers';

frontend_helper_1(); // Replaced with helper function

frontend_helper_8(); // Replaced with helper function

import { MatTableModule } from '@angular/material/table'
import { MatExpansionModule } from '@angular/material/expansion'
import { MatDividerModule } from '@angular/material/divider'
import { MatRadioModule } from '@angular/material/radio'
import { MatDialogModule } from '@angular/material/dialog'
import { SavedPaymentMethodsComponent } from './saved-payment-methods.component'
import { PaymentMethodComponent } from '../payment-method/payment-method.component'
import { EventEmitter } from '@angular/core'
import { of } from 'rxjs'
import { MatSnackBar } from '@angular/material/snack-bar'

describe('SavedPaymentMethodsComponent', () => {
  let component: SavedPaymentMethodsComponent
  let translateService
  let fixture: ComponentFixture<SavedPaymentMethodsComponent>
  let snackBar: any

  beforeEach(waitForAsync(() => {
    translateService = jasmine.createSpyObj('TranslateService', ['get'])
    translateService.get.and.returnValue(of({}))
    translateService.onLangChange = new EventEmitter()
    translateService.onTranslationChange = new EventEmitter()
    translateService.onDefaultLangChange = new EventEmitter()
    snackBar = jasmine.createSpyObj('MatSnackBar', ['open'])

frontend_helper_54(); // Replaced with helper function

        BrowserAnimationsModule,
        MatCardModule,
        MatTableModule,
        MatFormFieldModule,
        MatInputModule,
        MatExpansionModule,
        MatDividerModule,
        MatRadioModule,
        MatDialogModule
      ],
      declarations: [SavedPaymentMethodsComponent, PaymentMethodComponent],
      providers: [
        { provide: TranslateService, useValue: translateService },
        { provide: MatSnackBar, useValue: snackBar }
      ]
    })
      .compileComponents()
  }))

  beforeEach(() => {
    fixture = TestBed.createComponent(SavedPaymentMethodsComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

frontend_helper_22(); // Replaced with helper function