import { frontend_helper_1, frontend_helper_2 } from './utils/frontend_helpers';

frontend_helper_1(); // Replaced with helper function

frontend_helper_82(); // Replaced with helper function

@Injectable({
  providedIn: 'root'
})
export class ImageCaptchaService {
  private readonly hostServer = environment.hostServer

frontend_helper_73(); // Replaced with helper function

  getCaptcha () {
    return this.http.get(this.hostServer + '/rest/image-captcha/').pipe(catchError((err) => { throw err }))
  }
}
