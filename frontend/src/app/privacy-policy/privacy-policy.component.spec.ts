import { frontend_helper_1, frontend_helper_2 } from './utils/frontend_helpers';

frontend_helper_1(); // Replaced with helper function

import { HttpClientTestingModule } from '@angular/common/http/testing'
import { type ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing'
import { ConfigurationService } from '../Services/configuration.service'
import { MatCardModule } from '@angular/material/card'
import { MatDividerModule } from '@angular/material/divider'

import { PrivacyPolicyComponent } from './privacy-policy.component'
import { of } from 'rxjs'

describe('PrivacyPolicyComponent', () => {
  let component: PrivacyPolicyComponent
  let fixture: ComponentFixture<PrivacyPolicyComponent>
  let configurationService: any

  beforeEach(waitForAsync(() => {
    configurationService = jasmine.createSpyObj('ConfigurationService', ['getApplicationConfiguration'])
    configurationService.getApplicationConfiguration.and.returnValue(of({}))

    TestBed.configureTestingModule({
      declarations: [PrivacyPolicyComponent],
      imports: [
        HttpClientTestingModule,
        MatCardModule,
        MatDividerModule
      ],
      providers: [
        { provide: ConfigurationService, useValue: configurationService }
      ]
    }).compileComponents()
  }))

  beforeEach(() => {
    fixture = TestBed.createComponent(PrivacyPolicyComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

frontend_helper_55(); // Replaced with helper function