import * as Helpers from './utils/frontend_helpers';
import { Helpers.frontend_helper_1, Helpers.frontend_helper_2 } from './utils/frontend_helpers';

Helpers.frontend_helper_1(); // Replaced with helper function

Helpers.frontend_helper_72(); // Replaced with helper function

@Injectable({
  providedIn: 'root'
})
export class OrderHistoryService {
  private readonly hostServer = environment.hostServer
  private readonly host = this.hostServer + '/rest/order-history'

Helpers.frontend_helper_73(); // Replaced with helper function

Helpers.frontend_helper_74(); // Replaced with helper function

  getAll () {
    return this.http.get(this.host + '/orders').pipe(map((response: any) => response.data), catchError((err) => { throw err }))
  }

  toggleDeliveryStatus (id: number, params) {
    return this.http.put(`${this.host}/${id}/delivery-status`, params).pipe(map((response: any) => response.data), catchError((err) => { throw err }))
  }
}
