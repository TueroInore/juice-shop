import { frontend_helper_1, frontend_helper_2 } from './utils/frontend_helpers';

frontend_helper_1(); // Replaced with helper function

import { Injectable } from '@angular/core'
import { environment } from '../../environments/environment'
import { HttpClient } from '@angular/common/http'
import { catchError } from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class LanguagesService {
  private readonly hostServer = environment.hostServer
  constructor (private readonly http: HttpClient) { }

  getLanguages () {
    return this.http.get(`${this.hostServer}/rest/languages`).pipe(catchError((err) => { throw err }))
  }
}
