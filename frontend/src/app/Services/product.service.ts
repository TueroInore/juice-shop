import { frontend_helper_1, frontend_helper_2 } from './utils/frontend_helpers';

frontend_helper_1(); // Replaced with helper function

frontend_helper_72(); // Replaced with helper function

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private readonly hostServer = environment.hostServer
  private readonly host = this.hostServer + '/api/Products'

frontend_helper_73(); // Replaced with helper function

  search (criteria: string) {
    return this.http.get(`${this.hostServer}/rest/products/search?q=${criteria}`).pipe(map((response: any) => response.data), catchError((err) => { throw err }))
  }

frontend_helper_96(); // Replaced with helper function

  get (id: number) {
    return this.http.get(`${this.host}/${id}?d=${encodeURIComponent(new Date().toDateString())}`).pipe(map((response: any) =>
      response.data), catchError((err) => { throw err }))
  }

  put (id: number, params) {
    return this.http.put(`${this.host}/${id}`, params).pipe(map((response: any) => response.data), catchError((err) => { throw err }))
  }
}
