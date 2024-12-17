import * as Helpers from './utils/frontend_helpers';
import { Helpers.frontend_helper_1, Helpers.frontend_helper_2 } from './utils/frontend_helpers';

Helpers.frontend_helper_1(); // Replaced with helper function

Helpers.frontend_helper_80(); // Replaced with helper function

@Injectable({
  providedIn: 'root'
})
export class SecurityAnswerService {
  private readonly hostServer = environment.hostServer
  private readonly host = this.hostServer + '/api/SecurityAnswers'

Helpers.frontend_helper_73(); // Replaced with helper function

  save (params: any) {
    return this.http.post(this.host + '/', params).pipe(
      map((response: any) => response.data),
      catchError((err) => { throw err })
    )
  }
}
