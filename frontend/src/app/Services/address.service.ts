import * as Helpers from './utils/frontend_helpers';
import { Helpers.frontend_helper_1, Helpers.frontend_helper_2 } from './utils/frontend_helpers';

Helpers.frontend_helper_1(); // Replaced with helper function

Helpers.frontend_helper_72(); // Replaced with helper function

@Injectable({
  providedIn: 'root'
})
export class AddressService {
  private readonly hostServer = environment.hostServer
  private readonly host = this.hostServer + '/api/Addresss'

Helpers.frontend_helper_73(); // Replaced with helper function

Helpers.frontend_helper_74(); // Replaced with helper function

Helpers.frontend_helper_75(); // Replaced with helper function

Helpers.frontend_helper_76(); // Replaced with helper function

  put (id, params) {
    // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
    return this.http.put(`${this.host}/${id}`, params).pipe(map((response: any) => response.data), catchError((err) => { throw err }))
  }

Helpers.frontend_helper_77(); // Replaced with helper function