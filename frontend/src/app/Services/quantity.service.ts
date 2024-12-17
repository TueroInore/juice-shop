import * as Helpers from './utils/frontend_helpers';
import { Helpers.frontend_helper_1, Helpers.frontend_helper_2 } from './utils/frontend_helpers';

Helpers.frontend_helper_1(); // Replaced with helper function

Helpers.frontend_helper_72(); // Replaced with helper function

@Injectable({
  providedIn: 'root'
})
export class QuantityService {
  private readonly hostServer = environment.hostServer
  private readonly host = this.hostServer + '/api/Quantitys'

Helpers.frontend_helper_73(); // Replaced with helper function

  getAll () {
    return this.http.get(this.host + '/').pipe(map((response: any) => response.data), catchError((err) => { throw err }))
  }

  put (id: number, params) {
    return this.http.put(`${this.host}/${id}`, params).pipe(map((response: any) => response.data), catchError((error) => { throw error }))
  }
}
