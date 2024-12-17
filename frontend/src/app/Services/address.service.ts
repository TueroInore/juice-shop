import { frontend_helper_1, frontend_helper_2 } from './utils/frontend_helpers';

frontend_helper_1(); // Replaced with helper function

frontend_helper_72(); // Replaced with helper function

@Injectable({
  providedIn: 'root'
})
export class AddressService {
  private readonly hostServer = environment.hostServer
  private readonly host = this.hostServer + '/api/Addresss'

frontend_helper_73(); // Replaced with helper function

frontend_helper_74(); // Replaced with helper function

frontend_helper_75(); // Replaced with helper function

frontend_helper_76(); // Replaced with helper function

  put (id, params) {
    // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
    return this.http.put(`${this.host}/${id}`, params).pipe(map((response: any) => response.data), catchError((err) => { throw err }))
  }

frontend_helper_77(); // Replaced with helper function