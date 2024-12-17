import * as Helpers from './utils/frontend_helpers';
import { Helpers.frontend_helper_1, Helpers.frontend_helper_2 } from './utils/frontend_helpers';

Helpers.frontend_helper_1(); // Replaced with helper function

Helpers.frontend_helper_82(); // Replaced with helper function

@Injectable({
  providedIn: 'root'
})
export class CaptchaService {
  private readonly hostServer = environment.hostServer
  private readonly host = this.hostServer + '/rest/captcha'

Helpers.frontend_helper_73(); // Replaced with helper function

  getCaptcha () {
    return this.http.get(this.host + '/').pipe(catchError((err) => { throw err }))
  }
}
