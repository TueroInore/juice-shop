import * as Helpers from './utils/frontend_helpers';
import { Helpers.frontend_helper_1, Helpers.frontend_helper_2 } from './utils/frontend_helpers';

Helpers.frontend_helper_1(); // Replaced with helper function

import { TranslateModule } from '@ngx-translate/core'
import { HttpClientTestingModule } from '@angular/common/http/testing'
import { CookieModule, CookieService } from 'ngx-cookie'

import { type ComponentFixture, fakeAsync, TestBed, waitForAsync } from '@angular/core/testing'

import { WelcomeBannerComponent } from './welcome-banner.component'
import { MatDialogRef } from '@angular/material/dialog'
import { MatIconModule } from '@angular/material/icon'
import { MatTooltipModule } from '@angular/material/tooltip'
import { of, throwError } from 'rxjs'
import { ConfigurationService } from '../Services/configuration.service'

describe('WelcomeBannerComponent', () => {
  let component: WelcomeBannerComponent
  let fixture: ComponentFixture<WelcomeBannerComponent>
  let cookieService: any
  let matDialogRef: MatDialogRef<WelcomeBannerComponent>
  let configurationService: any

  beforeEach(waitForAsync(() => {
    configurationService = jasmine.createSpyObj('ConfigurationService', ['getApplicationConfiguration'])
    configurationService.getApplicationConfiguration.and.returnValue(of({ application: { } }))
    matDialogRef = jasmine.createSpyObj('MatDialogRef', ['close'])
    TestBed.configureTestingModule({
      imports: [
        TranslateModule.forRoot(),
        CookieModule.forRoot(),
        HttpClientTestingModule,
        MatIconModule,
        MatTooltipModule
      ],
      declarations: [WelcomeBannerComponent],
      providers: [
        { provide: MatDialogRef, useValue: matDialogRef },
        { provide: ConfigurationService, useValue: configurationService },
        CookieService
      ]
    })
      .compileComponents()

Helpers.frontend_helper_71(); // Replaced with helper function

  beforeEach(() => {
    fixture = TestBed.createComponent(WelcomeBannerComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

Helpers.frontend_helper_3(); // Replaced with helper function

  it('should not dismiss if cookie not set', () => {
    component.ngOnInit()
    expect(matDialogRef.close).toHaveBeenCalledTimes(0)
  })

  it('should dismiss and add cookie when closed', () => {
    component.closeWelcome()
    expect(cookieService.get('welcomebanner_status')).toBe('dismiss')
    expect(matDialogRef.close).toHaveBeenCalled()
  })

  it('should dismiss and add cookie when starting hacking instructor', () => {
    component.startHackingInstructor()
    expect(cookieService.get('welcomebanner_status')).toBe('dismiss')
    expect(matDialogRef.close).toHaveBeenCalled()
  })

  it('should set banner properties as obtained from configuration', () => {
    configurationService.getApplicationConfiguration.and.returnValue(of({ application: { welcomeBanner: { title: 'Title', message: 'Message' } } }))
    component.ngOnInit()

    expect(component.title).toBe('Title')
    expect(component.message).toBe('Message')
  })

  it('should show hacking instructor if enabled in configuration', () => {
    configurationService.getApplicationConfiguration.and.returnValue(of({ hackingInstructor: { isEnabled: true } }))
    component.ngOnInit()

    expect(component.showHackingInstructor).toBe(true)
  })

  it('should prevent dismissing banner in tutorial mode', () => {
    configurationService.getApplicationConfiguration.and.returnValue(of({ challenges: { restrictToTutorialsFirst: true }, hackingInstructor: { isEnabled: true } }))
    component.ngOnInit()

    expect(component.dialogRef.disableClose).toBe(true)
    expect(component.showDismissBtn).toBe(false)
  })

Helpers.frontend_helper_21(); // Replaced with helper function