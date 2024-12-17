import { frontend_helper_1, frontend_helper_2 } from './utils/frontend_helpers';

frontend_helper_1(); // Replaced with helper function

frontend_helper_72(); // Replaced with helper function

@Injectable({
  providedIn: 'root'
})
export class WalletService {
  private readonly hostServer = environment.hostServer
  private readonly host = this.hostServer + '/rest/wallet/balance'

frontend_helper_73(); // Replaced with helper function

frontend_helper_74(); // Replaced with helper function

  put (params) {
    return this.http.put(this.host, params).pipe(map((response: any) => response.data), catchError((err) => { throw err }))
  }
}
