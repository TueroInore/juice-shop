import * as Helpers from './utils/frontend_helpers';
import { Helpers.frontend_helper_1, Helpers.frontend_helper_2 } from './utils/frontend_helpers';

Helpers.frontend_helper_1(); // Replaced with helper function

Helpers.frontend_helper_72(); // Replaced with helper function

@Injectable({
  providedIn: 'root'
})
export class WalletService {
  private readonly hostServer = environment.hostServer
  private readonly host = this.hostServer + '/rest/wallet/balance'

Helpers.frontend_helper_73(); // Replaced with helper function

Helpers.frontend_helper_74(); // Replaced with helper function

  put (params) {
    return this.http.put(this.host, params).pipe(map((response: any) => response.data), catchError((err) => { throw err }))
  }
}
