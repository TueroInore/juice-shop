import { frontend_helper_1, frontend_helper_2 } from './utils/frontend_helpers';

frontend_helper_1(); // Replaced with helper function

frontend_helper_72(); // Replaced with helper function

@Injectable({
  providedIn: 'root'
})
export class FeedbackService {
  private readonly hostServer = environment.hostServer
  private readonly host = this.hostServer + '/api/Feedbacks'

frontend_helper_73(); // Replaced with helper function

  find (params?: any) {
    return this.http.get(this.host + '/', {
      params
    }).pipe(map((response: any) => response.data), catchError((err) => { throw err }))
  }

  save (params: any) {
    return this.http.post(this.host + '/', params).pipe(map((response: any) => response.data), catchError((err) => { throw err }))
  }

frontend_helper_77(); // Replaced with helper function