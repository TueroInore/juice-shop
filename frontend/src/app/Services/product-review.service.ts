import { frontend_helper_1, frontend_helper_2 } from './utils/frontend_helpers';

frontend_helper_1(); // Replaced with helper function

frontend_helper_72(); // Replaced with helper function

@Injectable({
  providedIn: 'root'
})
export class ProductReviewService {
  private readonly hostServer = environment.hostServer
  private readonly host = this.hostServer + '/rest/products'

frontend_helper_73(); // Replaced with helper function

  get (id: number) {
    return this.http.get(`${this.host}/${id}/reviews`).pipe(
      map((response: any) => response.data), catchError((err: Error) => {
        throw err
      })
    )
  }

  create (id: number, review: { message: string, author: string }) {
    return this.http.put(`${this.host}/${id}/reviews`, review).pipe(map((response: any) => response.data),
      catchError((err) => { throw err })
    )
  }

  patch (review: { id: string, message: string }) {
    return this.http.patch(this.host + '/reviews', review).pipe(map((response: any) => response.data), catchError((err) => { throw err }))
  }

  like (_id?: string) {
    return this.http.post(this.host + '/reviews', { id: _id }).pipe(map((response: any) => response.data), catchError((err) => { throw err }))
  }
}
