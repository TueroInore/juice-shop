import * as Helpers from './utils/frontend_helpers';
import { Helpers.frontend_helper_1, Helpers.frontend_helper_2 } from './utils/frontend_helpers';

Helpers.frontend_helper_1(); // Replaced with helper function

import { TranslateModule } from '@ngx-translate/core'
import { MatInputModule } from '@angular/material/input'
import { MatExpansionModule } from '@angular/material/expansion'
import { MatDialogModule } from '@angular/material/dialog'
import { type ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing'

import { BasketComponent } from './basket.component'
import { MatCardModule } from '@angular/material/card'
import { MatTableModule } from '@angular/material/table'
import { MatButtonModule } from '@angular/material/button'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { HttpClientTestingModule } from '@angular/common/http/testing'
import { ReactiveFormsModule } from '@angular/forms'
import { MatFormFieldModule } from '@angular/material/form-field'
import { MatButtonToggleModule } from '@angular/material/button-toggle'
import { RouterTestingModule } from '@angular/router/testing'
import { PurchaseBasketComponent } from '../purchase-basket/purchase-basket.component'
import { DeluxeGuard } from '../app.guard'
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar'

describe('BasketComponent', () => {
  let component: BasketComponent
  let fixture: ComponentFixture<BasketComponent>
  let deluxeGuard
  let snackBar: any

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [BasketComponent, PurchaseBasketComponent],
      imports: [
        RouterTestingModule,
        HttpClientTestingModule,
        TranslateModule.forRoot(),
        BrowserAnimationsModule,
        ReactiveFormsModule,
        MatFormFieldModule,
        MatInputModule,
        MatCardModule,
        MatTableModule,
        MatButtonModule,
        MatExpansionModule,
        MatDialogModule,
        MatButtonToggleModule,
        MatSnackBarModule
      ],
      providers: [
        { provide: DeluxeGuard, useValue: deluxeGuard },
        { provide: MatSnackBar, useValue: snackBar }
      ]
    })
      .compileComponents()
  }))

  beforeEach(() => {
    fixture = TestBed.createComponent(BasketComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

Helpers.frontend_helper_3(); // Replaced with helper function

  it('should store product count on calling getProductCount', () => {
    component.getProductCount(1)
    expect(component.productCount).toBe(1)
  })

  it('should store bonus points on calling getBonusPoints', () => {
    component.getBonusPoints([1, 10])
    expect(component.bonus).toBe(10)
  })

  it('should store itemTotal in session storage', () => {
    spyOn(sessionStorage, 'setItem')
    component.getBonusPoints([1, 10])
    expect(sessionStorage.setItem).toHaveBeenCalledWith('itemTotal', 1 as any)
  })
})
