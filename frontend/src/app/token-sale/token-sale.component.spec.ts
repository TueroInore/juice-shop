import { frontend_helper_1, frontend_helper_2 } from './utils/frontend_helpers';

frontend_helper_1(); // Replaced with helper function

import { type ComponentFixture, fakeAsync, TestBed, waitForAsync } from '@angular/core/testing'
import { TranslateModule } from '@ngx-translate/core'
import { TokenSaleComponent } from './token-sale.component'
import { of, throwError } from 'rxjs'
import { ConfigurationService } from '../Services/configuration.service'
import { MatCardModule } from '@angular/material/card'
import { MatButtonModule } from '@angular/material/button'

describe('TokenSaleComponent', () => {
  let component: TokenSaleComponent
  let fixture: ComponentFixture<TokenSaleComponent>
  let configurationService: any

  beforeEach(waitForAsync(() => {
    configurationService = jasmine.createSpyObj('ConfigurationService', ['getApplicationConfiguration'])
    configurationService.getApplicationConfiguration.and.returnValue(of({ application: { } }))
    TestBed.configureTestingModule({
      declarations: [TokenSaleComponent],
      imports: [
        TranslateModule.forRoot(),
        MatCardModule,
        MatButtonModule
      ],
      providers: [
        { provide: ConfigurationService, useValue: configurationService }
      ]
    })
      .compileComponents()
  }))

  beforeEach(() => {
    fixture = TestBed.createComponent(TokenSaleComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

frontend_helper_3(); // Replaced with helper function

  it('should set altcoinName as obtained from configuration', () => {
    configurationService.getApplicationConfiguration.and.returnValue(of({ application: { altcoinName: 'Coin' } }))
    component.ngOnInit()
    expect(component.altcoinName).toBe('Coin')
  })

frontend_helper_21(); // Replaced with helper function