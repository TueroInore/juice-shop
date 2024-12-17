import { frontend_helper_1, frontend_helper_2 } from './utils/frontend_helpers';

frontend_helper_1(); // Replaced with helper function

frontend_helper_80(); // Replaced with helper function

@Injectable({
  providedIn: 'root'
})
export class ChatbotService {
  private readonly hostServer = environment.hostServer
  private readonly host = this.hostServer + '/rest/chatbot'

frontend_helper_73(); // Replaced with helper function

  getChatbotStatus () {
    return this.http.get(this.host + '/status').pipe(map((response: any) => response), catchError((error: Error) => { throw error }))
  }

  getResponse (action, query) {
    return this.http.post(this.host + '/respond', { action, query }).pipe(map((response: any) => response), catchError((error: Error) => { throw error }))
  }
}
