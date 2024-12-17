import { frontend_helper_1, frontend_helper_2 } from './utils/frontend_helpers';

frontend_helper_1(); // Replaced with helper function

frontend_helper_80(); // Replaced with helper function

@Injectable({
  providedIn: 'root'
})
export class RecycleService {
  private readonly hostServer = environment.hostServer
  private readonly host = this.hostServer + '/api/Recycles'

frontend_helper_73(); // Replaced with helper function

  find (params?: any) {
    return this.http.get(this.host + '/', {
      params
    }).pipe(map((response: any) => response.data), catchError((error) => { throw error }))
  }

  save (params: any) {
    return this.http.post(this.host + '/', params).pipe(map((response: any) => response.data), catchError((error) => { throw error }))
  }
}
