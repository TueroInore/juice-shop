import * as Helpers from './utils/frontend_helpers';
import { Helpers.frontend_helper_1, Helpers.frontend_helper_2 } from './utils/frontend_helpers';

Helpers.frontend_helper_1(); // Replaced with helper function

Helpers.frontend_helper_87(); // Replaced with helper function

interface ConfigResponse {
  config: Config
}
export interface Config {
  server: {
    port: number
  }
  application: {
    domain: string
    name: string
    logo: string
    favicon: string
    theme: string
    showVersionNumber: boolean
    showGitHubLinks: boolean
    localBackupEnabled: boolean
    numberOfRandomFakeUsers: number
    altcoinName: string
    privacyContactEmail: string
    social: {
      twitterUrl: string
      facebookUrl: string
      slackUrl: string
      redditUrl: string
      pressKitUrl: string
      nftUrl: string
      questionnaireUrl: string
    }
    recyclePage: {
      topProductImage: string
      bottomProductImage: string
    }
    welcomeBanner: {
      showOnFirstStart: boolean
      title: string
      message: string
    }
    cookieConsent: {
      message: string
      dismissText: string
      linkText: string
      linkUrl: string
    }
    securityTxt: {
      contact: string
      encryption: string
      acknowledgements: string
    }
    promotion: {
      video: string
      subtitles: string
    }
    easterEggPlanet: {
      name: string
      overlayMap: string
    }
    googleOauth: {
      clientId: string
      authorizedRedirects: any[]
    }
  }
  challenges: {
    showSolvedNotifications: boolean
    showHints: boolean
    showMitigations: boolean
    codingChallengesEnabled: string
    restrictToTutorialsFirst: boolean
    safetyMode: string
    overwriteUrlForProductTamperingChallenge: string
    showFeedbackButtons: boolean
  }
  hackingInstructor: {
    isEnabled: boolean
    avatarImage: string
  }
  products: any[]
  memories: any[]
  ctf: {
    showFlagsInNotifications: boolean
    showCountryDetailsInNotifications: string
    countryMapping: any[]
  }
}

@Injectable({
  providedIn: 'root'
})
export class ConfigurationService {
  private readonly hostServer = environment.hostServer
  private readonly host = this.hostServer + '/rest/admin'
  private configObservable: any
  constructor (private readonly http: HttpClient) { }

  getApplicationConfiguration (): Observable<Config> {
    if (this.configObservable) {
      return this.configObservable
    } else {
      this.configObservable = this.http.get<ConfigResponse>(this.host + '/application-configuration').pipe(map((response: ConfigResponse) => response.config, catchError((err) => { throw err })))
      return this.configObservable
    }
  }
}
