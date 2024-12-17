export function frontend_helper_1() {
  /*
 * Copyright (c) 2014-2024 Bjoern Kimminich & the OWASP Juice Shop contributors.
 * SPDX-License-Identifier: MIT
 */
}

export function frontend_helper_2() {
  beforeEach(() => {
    loginGuard = jasmine.createSpyObj(\'LoginGuard\', [\'tokenDecode\', \'forbidRoute\'])
}

export function frontend_helper_3() {
  it(\'should create\', () => {
    expect(component).toBeTruthy()
  })
}

export function frontend_helper_4() {
  TestBed.configureTestingModule({
      imports: [
        RouterTestingModule.withRoutes([
          { path: \'delivery-method\', component: DeliveryMethodComponent }
        ]),
        TranslateModule.forRoot(),
        HttpClientTestingModule,
        ReactiveFormsModule,
}

export function frontend_helper_5() {
  TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        TranslateModule.forRoot(),
        HttpClientTestingModule,
        ReactiveFormsModule,
}

export function frontend_helper_6() {
  it(\'should be compulsory to provide name\', () => {
    component.nameControl.setValue(\'\')
    expect(component.nameControl.valid).toBeFalsy()
  })
}

export function frontend_helper_7() {
  routeToPreviousUrl () {
    this.location.back()
  }
}

export function frontend_helper_8() {
  import { TranslateModule, TranslateService } from \'@ngx-translate/core\'
import { HttpClientTestingModule } from \'@angular/common/http/testing\'
import { MatCardModule } from \'@angular/material/card\'
import { MatFormFieldModule } from \'@angular/material/form-field\'
import { type ComponentFixture, TestBed, waitForAsync } from \'@angular/core/testing\'
import { MatInputModule } from \'@angular/material/input\'
import { ReactiveFormsModule } from \'@angular/forms\'
import { BrowserAnimationsModule } from \'@angular/platform-browser/animations\'
}

export function frontend_helper_9() {
  constructor (private readonly router: Router, private readonly ngZone: NgZone) {}
}

export function frontend_helper_10() {
  getMessage (id) {
    this.addressId = id
  }
}
}

export function frontend_helper_11() {
  expect(component.error).toBe(\'Error\')
  }))
}

export function frontend_helper_12() {
  emit (a: any, b: any) {
    return null
  }
}
}

export function frontend_helper_13() {
  expect(component.showCtfFlagsInNotifications).toBeFalse()
  })
}

export function frontend_helper_14() {
  library.add(faSave, faEdit)
}

export function frontend_helper_15() {
  enum MessageSources {
  user = \'user\',
  bot = \'bot\'
}
}

export function frontend_helper_16() {
  library.add(faBomb)
}

export function frontend_helper_17() {
  it(\'should hold the user email of the currently logged in user\', () => {
    userService.whoAmI.and.returnValue(of({ email: \'x@x.xx\' }))
    component.ngOnInit()
    expect(component.userEmail).toBe(\'x@x.xx\')
  })
}

export function frontend_helper_18() {
  it(\'should compile\', () => {
    expect(component).toBeTruthy()
  })
}

export function frontend_helper_19() {
  it(\'should log errors from address service directly to browser console\', fakeAsync(() => {
    addressService.getById.and.returnValue(throwError(\'Error\'))
    console.log = jasmine.createSpy(\'log\')
    component.ngOnInit()
    expect(console.log).toHaveBeenCalledWith(\'Error\')
  }))
}

export function frontend_helper_20() {
  it(\'should hold address on ngOnInit\', () => {
    addressService.getById.and.returnValue(of({ address: \'address\' }))
    component.ngOnInit()
    expect(component.address).toEqual({ address: \'address\' })
  })
}

export function frontend_helper_21() {
  it(\'should log error on failure in retrieving configuration from backend\', fakeAsync(() => {
    configurationService.getApplicationConfiguration.and.returnValue(throwError(\'Error\'))
    console.log = jasmine.createSpy(\'log\')
    component.ngOnInit()
    expect(console.log).toHaveBeenCalledWith(\'Error\')
  }))
})
}

export function frontend_helper_22() {
  it(\'should create\', () => {
    expect(component).toBeTruthy()
  })
})
}

export function frontend_helper_23() {
  async handleChainChanged (chainId: string) {
    await this.handleAuth()
  }
}

export function frontend_helper_24() {
  async handleAuth () {
    try {
      const { isConnected } = getAccount()
}

export function frontend_helper_25() {
  if (isConnected) {
        await disconnect()
      }
      if (!window.ethereum) {
        this.snackBarHelperService.open(\'PLEASE_INSTALL_WEB3_WALLET\', \'errorBar\')
        return
      }
}

export function frontend_helper_26() {
  const provider = await connect({ connector: new InjectedConnector() })
      this.metamaskAddress = provider.account
      this.userData = {
        address: provider.account,
        chain: provider.chain.id,
        network: \'evm\'
      }
      await ethereum.request({
        method: \'wallet_addEthereumChain\',
        params: [
          {
            chainId: \'0xaa36a7\',
            chainName: \'Sepolia Test Network\',
            nativeCurrency: {
              name: \'SepoliaETH\',
              symbol: \'ETH\',
              decimals: 18
            },
            rpcUrls: [\'https://ethereum-sepolia.blockpi.network/v1/rpc/public\'],
            blockExplorerUrls: [\'https://sepolia.etherscan.io/\']
          }
        ]
      })
      const targetChainId = \'11155111\'
      const currentChainId = String(provider.chain?.id)
}

export function frontend_helper_27() {
  import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from \'@angular/core\'
import { CommonModule } from \'@angular/common\'
import { ReactiveFormsModule, FormsModule } from \'@angular/forms\'
import { RouterModule, type Routes } from \'@angular/router\'
import { ConfigurationService } from \'../Services/configuration.service\'
import { OverlayContainer } from \'@angular/cdk/overlay\'
import { MatCardModule } from \'@angular/material/card\'
import { MatInputModule } from \'@angular/material/input\'
import { MatButtonModule } from \'@angular/material/button\'
import { MatSnackBarModule } from \'@angular/material/snack-bar\'
}

export function frontend_helper_28() {
  import { TranslateModule } from \'@ngx-translate/core\'
import { MAT_DIALOG_DATA, MatDialogModule, MatDialogRef } from \'@angular/material/dialog\'
import { UserService } from \'../Services/user.service\'
import { HttpClientTestingModule } from \'@angular/common/http/testing\'
import { MatDividerModule } from \'@angular/material/divider\'
import { type ComponentFixture, TestBed, waitForAsync } from \'@angular/core/testing\'
}

export function frontend_helper_29() {
  function matchValidator() {
function matchValidator (passwordControl: AbstractControl) {
  return function matchOtherValidate (repeatPasswordControl: UntypedFormControl) {
    const password = passwordControl.value
    const passwordRepeat = repeatPasswordControl.value
    if (password !== passwordRepeat) {
      return { notSame: true }
}
}

export function frontend_helper_30() {
  matchValidator();
    }
    return null
  }
}
}

export function frontend_helper_31() {
  location = TestBed.inject(Location)
  }))
}

export function frontend_helper_32() {
  class MockSocket {
  on (str: string, callback: any) {
    callback(str)
  }
}
}

export function frontend_helper_33() {
  it(\'should log error while getting application configuration from backend API directly to browser console\', fakeAsync(() => {
    configurationService.getApplicationConfiguration.and.returnValue(throwError(\'Error\'))
    console.log = jasmine.createSpy(\'log\')
    component.ngOnInit()
    expect(console.log).toHaveBeenCalledWith(\'Error\')
  }))
}

export function frontend_helper_34() {
  it(\'should remove authentication token from localStorage\', () => {
    spyOn(localStorage, \'removeItem\')
    component.logout()
    expect(localStorage.removeItem).toHaveBeenCalledWith(\'token\')
  })
}

export function frontend_helper_35() {
  it(\'should remove authentication token from cookies\', () => {
    component.logout()
    expect(cookieService.remove).toHaveBeenCalledWith(\'token\')
  })
}

export function frontend_helper_36() {
  it(\'should remove basket id from session storage\', () => {
    spyOn(sessionStorage, \'removeItem\')
    component.logout()
    expect(sessionStorage.removeItem).toHaveBeenCalledWith(\'bid\')
  })
}

export function frontend_helper_37() {
  it(\'should remove basket item total from session storage\', () => {
    spyOn(sessionStorage, \'removeItem\')
    component.logout()
    expect(sessionStorage.removeItem).toHaveBeenCalledWith(\'itemTotal\')
  })
}

export function frontend_helper_38() {
  it(\'should set the login status to be false via UserService\', () => {
    component.logout()
    expect(userService.isLoggedIn.next).toHaveBeenCalledWith(false)
  })
}

export function frontend_helper_39() {
  it(\'should save the last login IP address\', () => {
    component.logout()
    expect(userService.saveLastLoginIp).toHaveBeenCalled()
  })
}

export function frontend_helper_40() {
  function noop() {
function
  noop () { }
}
}

export function frontend_helper_41() {
  if (localStorage.getItem(\'token\')) {
      this.getUserDetails()
    } else {
      this.userEmail = \'\'
    }
}

export function frontend_helper_42() {
  getUserDetails () {
    this.userService.whoAmI().subscribe((user: any) => {
      this.userEmail = user.email
    }, (err) => { console.log(err) })
  }
}

export function frontend_helper_43() {
  isLoggedIn () {
    return localStorage.getItem(\'token\')
  }
}

export function frontend_helper_44() {
  logout () {
    this.userService.saveLastLoginIp().subscribe((user: any) => { this.noop() }, (err) => { console.log(err) })
    localStorage.removeItem(\'token\')
    this.cookieService.remove(\'token\')
    sessionStorage.removeItem(\'bid\')
    sessionStorage.removeItem(\'itemTotal\')
    this.userService.isLoggedIn.next(false)
    this.ngZone.run(async () => await this.router.navigate([\'/\']))
  }
}

export function frontend_helper_45() {
  getScoreBoardStatus () {
    this.challengeService.find({ name: \'Score Board\' }).subscribe((challenges: any) => {
      this.ngZone.run(() => {
        this.scoreBoardVisible = challenges[0].solved
      })
    }, (err) => { console.log(err) })
  }
}

export function frontend_helper_46() {
  goToProfilePage () {
    window.location.replace(environment.hostServer + \'/profile\')
  }
}

export function frontend_helper_47() {
  goToDataErasurePage () {
    window.location.replace(environment.hostServer + \'/dataerasure\')
  }
}

export function frontend_helper_48() {
  onToggleSidenav = () => {
    this.sidenavToggle.emit()
  }
}

export function frontend_helper_49() {
  // eslint-disable-next-line no-empty,@typescript-eslint/no-empty-noop();
}

export function frontend_helper_50() {
  library.add(faTwitter)
}

export function frontend_helper_51() {
  component.couponControl.setValue(\'\')
    component.couponControl.markAsPristine()
    component.couponControl.markAsUntouched()
}

export function frontend_helper_52() {
  component.couponControl.setValue(\'valid_base85\')
    component.applyCoupon()
}

export function frontend_helper_53() {
  import { TranslateModule, TranslateService } from \'@ngx-translate/core\'
import { HttpClientTestingModule } from \'@angular/common/http/testing\'
import { MatCardModule } from \'@angular/material/card\'
import { MatFormFieldModule } from \'@angular/material/form-field\'
import { type ComponentFixture, fakeAsync, TestBed, waitForAsync } from \'@angular/core/testing\'
import { MatInputModule } from \'@angular/material/input\'
import { ReactiveFormsModule } from \'@angular/forms\'
import { BrowserAnimationsModule } from \'@angular/platform-browser/animations\'
}

export function frontend_helper_54() {
  TestBed.configureTestingModule({
      imports: [
        TranslateModule.forRoot(),
        HttpClientTestingModule,
        ReactiveFormsModule,
}

export function frontend_helper_55() {
  it(\'should compile\', () => {
    expect(component).toBeTruthy()
  })
})
}

export function frontend_helper_56() {
  isDeluxe () {
    return this.deluxeGuard.isDeluxe()
  }
}
}

export function frontend_helper_57() {
  library.add(faArrowCircleLeft)
}

export function frontend_helper_58() {
  import { Component } from \'@angular/core\'
}

export function frontend_helper_59() {
  import { type ComponentFixture, TestBed } from \'@angular/core/testing\'
}

export function frontend_helper_60() {
  fixture.detectChanges()
  })
}

export function frontend_helper_61() {
  import { Component, Input } from \'@angular/core\'
}

export function frontend_helper_62() {
  @Input()
  public filterSetting: FilterSetting
}

export function frontend_helper_63() {
  @Output()
  public filterSettingChange = new EventEmitter<FilterSetting>()
}

export function frontend_helper_64() {
  import { Component, Input, type OnChanges, type OnInit, type SimpleChanges } from \'@angular/core\'
}

export function frontend_helper_65() {
  import { type EnrichedChallenge } from \'../../types/EnrichedChallenge\'
}

export function frontend_helper_66() {
  ngOnInit (): void {
    this.updatedNumberOfSolvedChallenges()
  }
}

export function frontend_helper_67() {
  ngOnChanges (changes: SimpleChanges): void {
    this.updatedNumberOfSolvedChallenges()
  }
}

export function frontend_helper_68() {
  import sortBy from \'lodash-es/sortBy\'
}

export function frontend_helper_69() {
  const CHALLENGE_1 = {
  category: \'foobar\',
  description: \'lorem ipsum\',
  originalDescription: \'lorem ipsum\',
  difficulty: 1,
  hasCodingChallenge: true,
  id: 1,
  key: \'challenge-1\',
  mitigationUrl: \'https://owasp.example.com\',
  name: \'challenge one\',
  solved: false,
  codingChallengeStatus: 0,
  tagList: [\'easy\'],
  disabledEnv: null,
  tutorialOrder: 1
} as EnrichedChallenge
}

export function frontend_helper_70() {
  const CHALLENGE_3 = {
  category: \'barfoo\',
  description: \'lorem ipsum\',
  originalDescription: \'lorem ipsum\',
  difficulty: 6,
  hasCodingChallenge: true,
  id: 3,
  key: \'challenge-3\',
  mitigationUrl: \'https://owasp.example.com\',
  name: \'challenge three\',
  solved: true,
  codingChallengeStatus: 1,
  tagList: [\'hard\'],
  disabledEnv: \'docker\',
  tutorialOrder: null
} as EnrichedChallenge
}

export function frontend_helper_71() {
  cookieService = TestBed.inject(CookieService)
  }))
}

export function frontend_helper_72() {
  import { environment } from \'../../environments/environment\'
import { Injectable } from \'@angular/core\'
import { HttpClient } from \'@angular/common/http\'
import { catchError, map } from \'rxjs/operators\'
}

export function frontend_helper_73() {
  constructor (private readonly http: HttpClient) { }
}

export function frontend_helper_74() {
  get () {
    return this.http.get(this.host).pipe(map((response: any) => response.data), catchError((err) => { throw err }))
  }
}

export function frontend_helper_75() {
  getById (id) {
    // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
    return this.http.get(`${this.host}/${id}`).pipe(map((response: any) => response.data), catchError((err: Error) => { throw err }))
  }
}

export function frontend_helper_76() {
  save (params) {
    return this.http.post(this.host + \'/\', params).pipe(map((response: any) => response.data), catchError((err) => { throw err }))
  }
}

export function frontend_helper_77() {
  del (id: number) {
    return this.http.delete(`${this.host}/${id}`).pipe(map((response: any) => response.data), catchError((err) => { throw err }))
  }
}
}

export function frontend_helper_78() {
  import { HttpClientTestingModule, HttpTestingController } from \'@angular/common/http/testing\'
import { fakeAsync, inject, TestBed, tick } from \'@angular/core/testing\'
}

export function frontend_helper_79() {
  expect(req.request.method).toBe(\'GET\')
      expect(res).toBe(\'apiResponse\')
      httpMock.verify()
    })
  ))
})
}

export function frontend_helper_80() {
  import { environment } from \'../../environments/environment\'
import { HttpClient } from \'@angular/common/http\'
import { Injectable } from \'@angular/core\'
import { catchError, map } from \'rxjs/operators\'
}

export function frontend_helper_81() {
  tick()
      expect(req.request.method).toBe(\'GET\')
      expect(res).toBe(\'apiResponse\')
      httpMock.verify()
    })
  ))
})
}

export function frontend_helper_82() {
  import { HttpClient } from \'@angular/common/http\'
import { environment } from \'../../environments/environment\'
import { Injectable } from \'@angular/core\'
import { catchError } from \'rxjs/operators\'
}

export function frontend_helper_83() {
  expect(req.request.method).toBe(\'GET\')
      expect(res).toBe(\'apiResponse\')
      httpMock.verify()
    })
  ))
}

export function frontend_helper_84() {
  expect(req.request.method).toBe(\'PUT\')
      expect(res).toBe(\'apiResponse\')
      httpMock.verify()
    })
  ))
}

export function frontend_helper_85() {
  expect(req.request.method).toBe(\'GET\')
      expect(res).toEqual({ snippet: \'apiResponse\' })
      httpMock.verify()
    })
  ))
}

export function frontend_helper_86() {
  export interface Solved {
  challenges: string[]
}
}

export function frontend_helper_87() {
  import { environment } from \'../../environments/environment\'
import { Injectable } from \'@angular/core\'
import { HttpClient } from \'@angular/common/http\'
import { catchError, map } from \'rxjs/operators\'
import { type Observable } from \'rxjs\'
}

export function frontend_helper_88() {
  tick()
      expect(req.request.method).toBe(\'POST\')
      expect(req.request.body).toBeNull()
      expect(res).toBe(\'apiResponse\')
      httpMock.verify()
    })
  ))
})
}

export function frontend_helper_89() {
  expect(req.request.method).toBe(\'GET\')
      expect(res).toBe(\'apiResponse\')
}

export function frontend_helper_90() {
  httpMock.verify()
    })
  ))
})
}

export function frontend_helper_91() {
  import { environment } from \'../../environments/environment\'
import { HttpClient } from \'@angular/common/http\'
import { Injectable } from \'@angular/core\'
import { catchError } from \'rxjs/operators\'
}

export function frontend_helper_92() {
  tick()
      expect(req.request.method).toBe(\'POST\')
      expect(req.request.body).toBe(1)
      expect(res).toBe(\'apiResponse\')
      httpMock.verify()
    })
  ))
})
}

export function frontend_helper_93() {
  tick()
      expect(req.request.method).toBe(\'GET\')
      expect(req.request.params.toString()).toBeFalsy()
      expect(res).toBe(\'apiResponse\')
      httpMock.verify()
    })
  ))
}

export function frontend_helper_94() {
  import { inject, TestBed } from \'@angular/core/testing\'
}

export function frontend_helper_95() {
  tick()
      expect(req.request.method).toBe(\'GET\')
      expect(res).toBe(\'apiResponse\')
      httpMock.verify()
    })
  ))
}

export function frontend_helper_96() {
  find (params: any) {
    return this.http.get(this.host + \'/\', { params }).pipe(map((response: any) => response.data), catchError((err) => { throw err }))
  }
}

export function frontend_helper_97() {
  expect(req.request.method).toBe(\'GET\')
      expect(req.request.params.toString()).toBeFalsy()
      expect(res).toBe(\'apiResponse\')
      httpMock.verify()
    })
  ))
}

export function frontend_helper_98() {
  expect(req.request.method).toBe(\'POST\')
      expect(req.request.body).toBeNull()
      expect(res).toBe(\'apiResponse\')
      httpMock.verify()
    })
  ))
}

export function frontend_helper_99() {
  expect(component.isAccounting()).toBe(true)
  })
}

export function frontend_helper_100() {
  component.updateStatus()
}

export function frontend_helper_101() {
  import {
  waitForInputToHaveValue,
  waitForElementsInnerHtmlToBe,
  waitInMs
} from \'../helpers/helpers\'
import { type ChallengeInstruction } from \'../\'
}

export function frontend_helper_102() {
  import {
  waitForInputToHaveValue,
  waitForInputToNotBeEmpty,
  waitForElementToGetClicked,
  waitInMs,
  waitForAngularRouteToBeVisited, waitForLogOut
} from \'../helpers/helpers\'
import { type ChallengeInstruction } from \'../\'
}

export function frontend_helper_103() {
  import {
  waitForInputToHaveValue,
  waitForElementToGetClicked,
  waitInMs,
  waitForAngularRouteToBeVisited, waitForLogOut, waitForInputToNotHaveValueAndNotBeEmpty
} from \'../helpers/helpers\'
import { type ChallengeInstruction } from \'../\'
}

