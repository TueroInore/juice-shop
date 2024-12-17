import { frontend_helper_1, frontend_helper_2 } from './utils/frontend_helpers';

frontend_helper_1(); // Replaced with helper function

frontend_helper_80(); // Replaced with helper function

@Injectable({
  providedIn: 'root'
})
export class SecurityAnswerService {
  private readonly hostServer = environment.hostServer
  private readonly host = this.hostServer + '/api/SecurityAnswers'

frontend_helper_73(); // Replaced with helper function

  save (params: any) {
    return this.http.post(this.host + '/', params).pipe(
      map((response: any) => response.data),
      catchError((err) => { throw err })
    )
  }
}
