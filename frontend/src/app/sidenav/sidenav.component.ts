import * as Helpers from './utils/frontend_helpers';
import { Helpers.frontend_helper_1, Helpers.frontend_helper_2 } from './utils/frontend_helpers';

Helpers.frontend_helper_40(); // Replaced with helper function

Helpers.frontend_helper_1(); // Replaced with helper function

import { environment } from '../../environments/environment'
import { ChallengeService } from '../Services/challenge.service'
import { Component, EventEmitter, NgZone, type OnInit, Output } from '@angular/core'
import { SocketIoService } from '../Services/socket-io.service'
import { AdministrationService } from '../Services/administration.service'
import { Router } from '@angular/router'
import { UserService } from '../Services/user.service'
import { CookieService } from 'ngx-cookie'
import { ConfigurationService } from '../Services/configuration.service'
import { LoginGuard } from '../app.guard'
import { roles } from '../roles'

@Component({
  selector: 'sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})
export class SidenavComponent implements OnInit {
  public applicationName = 'OWASP Juice Shop'
  public showGitHubLink = true
  public userEmail = ''
  public scoreBoardVisible: boolean = false
  public version: string = ''
  public showPrivacySubmenu: boolean = false
  public showOrdersSubmenu: boolean = false
  public isShowing = false
  public offerScoreBoardTutorial: boolean = false
  @Output() public sidenavToggle = new EventEmitter()

  constructor (private readonly administrationService: AdministrationService, private readonly challengeService: ChallengeService,
    private readonly ngZone: NgZone, private readonly io: SocketIoService, private readonly userService: UserService, private readonly cookieService: CookieService,
    private readonly router: Router, private readonly configurationService: ConfigurationService, private readonly loginGuard: LoginGuard) { }

  ngOnInit () {
    this.administrationService.getApplicationVersion().subscribe((version: any) => {
      if (version) {
        // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
        this.version = `v${version}`
      }
    }, (err) => { console.log(err) })
    this.getApplicationDetails()
    this.getScoreBoardStatus()

Helpers.frontend_helper_41(); // Replaced with helper function

    this.userService.getLoggedInState().subscribe((isLoggedIn) => {
      if (isLoggedIn) {
        this.getUserDetails()
      } else {
        this.userEmail = ''
      }
    })
    this.ngZone.runOutsideAngular(() => {
      this.io.socket().on('challenge solved', (challenge) => {
        if (challenge.key === 'scoreBoardChallenge') {
          this.scoreBoardVisible = true
        }
      })
    })
  }

Helpers.frontend_helper_43(); // Replaced with helper function

Helpers.frontend_helper_44(); // Replaced with helper function

Helpers.frontend_helper_46(); // Replaced with helper function

Helpers.frontend_helper_47(); // Replaced with helper function

Helpers.frontend_helper_49(); // Replaced with helper function

Helpers.frontend_helper_45(); // Replaced with helper function

Helpers.frontend_helper_42(); // Replaced with helper function

Helpers.frontend_helper_48(); // Replaced with helper function

  getApplicationDetails () {
    this.configurationService.getApplicationConfiguration().subscribe((config: any) => {
      if (config?.application?.name) {
        this.applicationName = config.application.name
      }
      if (config?.application) {
        this.showGitHubLink = config.application.showGitHubLinks
      }
      if (config?.application.welcomeBanner.showOnFirstStart && config.hackingInstructor.isEnabled) {
        this.offerScoreBoardTutorial = config.application.welcomeBanner.showOnFirstStart && config.hackingInstructor.isEnabled
      }
    }, (err) => { console.log(err) })
  }

  isAccounting () {
    const payload = this.loginGuard.tokenDecode()
    return payload?.data?.role === roles.accounting
  }

  startHackingInstructor () {
    this.onToggleSidenav()
    console.log('Starting instructions for challenge "Score Board"')
    import(/* webpackChunkName: "tutorial" */ '../../hacking-instructor').then(module => {
      module.startHackingInstructorFor('Score Board')
    })
  }
}
