import { frontend_helper_1, frontend_helper_2 } from './utils/frontend_helpers';

frontend_helper_1(); // Replaced with helper function

frontend_helper_82(); // Replaced with helper function

@Injectable({
  providedIn: 'root'
})
export class CaptchaService {
  private readonly hostServer = environment.hostServer
  private readonly host = this.hostServer + '/rest/captcha'

frontend_helper_73(); // Replaced with helper function

  getCaptcha () {
    return this.http.get(this.host + '/').pipe(catchError((err) => { throw err }))
  }
}
