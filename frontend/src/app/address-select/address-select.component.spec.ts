import { frontend_helper_1, frontend_helper_2 } from './utils/frontend_helpers';

frontend_helper_1(); // Replaced with helper function

frontend_helper_8(); // Replaced with helper function

import { MatTableModule } from '@angular/material/table'
import { MatExpansionModule } from '@angular/material/expansion'
import { MatDividerModule } from '@angular/material/divider'
import { MatRadioModule } from '@angular/material/radio'
import { MatDialogModule } from '@angular/material/dialog'
import { AddressComponent } from '../address/address.component'
import { AddressSelectComponent } from './address-select.component'
import { RouterTestingModule } from '@angular/router/testing'
import { DeliveryMethodComponent } from '../delivery-method/delivery-method.component'
import { MatIconModule } from '@angular/material/icon'
import { MatTooltipModule } from '@angular/material/tooltip'
import { MatCheckboxModule } from '@angular/material/checkbox'
import { EventEmitter } from '@angular/core'
import { of } from 'rxjs'
import { MatSnackBar } from '@angular/material/snack-bar'

describe('AddressSelectComponent', () => {
  let component: AddressSelectComponent
  let fixture: ComponentFixture<AddressSelectComponent>
  let snackBar: any
  let translateService

  beforeEach(waitForAsync(() => {
    translateService = jasmine.createSpyObj('TranslateService', ['get'])
    translateService.get.and.returnValue(of({}))
    translateService.onLangChange = new EventEmitter()
    translateService.onTranslationChange = new EventEmitter()
    translateService.onDefaultLangChange = new EventEmitter()
    snackBar = jasmine.createSpyObj('MatSnackBar', ['open'])
    snackBar.open.and.returnValue(null)

frontend_helper_4(); // Replaced with helper function

        BrowserAnimationsModule,
        MatCardModule,
        MatTableModule,
        MatFormFieldModule,
        MatInputModule,
        MatExpansionModule,
        MatDividerModule,
        MatRadioModule,
        MatDialogModule,
        MatIconModule,
        MatTooltipModule,
        MatCheckboxModule
      ],
      declarations: [AddressSelectComponent, AddressComponent, DeliveryMethodComponent],
      providers: [{ provide: TranslateService, useValue: translateService },
        { provide: MatSnackBar, useValue: snackBar }]
    })
      .compileComponents()
  }))

  beforeEach(() => {
    fixture = TestBed.createComponent(AddressSelectComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

frontend_helper_3(); // Replaced with helper function

  it('should store address id on calling getMessage', () => {
    component.getMessage(1)
    expect(component.addressId).toBe(1)
  })
})
