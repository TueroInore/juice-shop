import { frontend_helper_1, frontend_helper_2 } from './utils/frontend_helpers';

frontend_helper_1(); // Replaced with helper function

frontend_helper_80(); // Replaced with helper function

@Injectable({
  providedIn: 'root'
})
export class AdministrationService {
  private readonly hostServer = environment.hostServer
  private readonly host = this.hostServer + '/rest/admin'

frontend_helper_73(); // Replaced with helper function

  getApplicationVersion () {
    return this.http.get(this.host + '/application-version').pipe(
      map((response: any) => response.version),
      catchError((error: Error) => { throw error })
    )
  }
}
