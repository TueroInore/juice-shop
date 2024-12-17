import { frontend_helper_1, frontend_helper_2 } from './utils/frontend_helpers';

frontend_helper_1(); // Replaced with helper function

import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core'
import { environment } from 'src/environments/environment'
import { catchError, map } from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class SecurityQuestionService {
  private readonly hostServer = environment.hostServer
  private readonly host = this.hostServer + '/api/SecurityQuestions'

frontend_helper_73(); // Replaced with helper function

frontend_helper_96(); // Replaced with helper function

  findBy (email: string) {
    return this.http.get(this.hostServer + '/' + 'rest/user/security-question?email=' + email).pipe(
      map((response: any) => response.question),
      catchError((error) => { throw error })
    )
  }
}
