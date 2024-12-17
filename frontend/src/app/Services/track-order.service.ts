import * as Helpers from './utils/frontend_helpers';
import { Helpers.frontend_helper_1, Helpers.frontend_helper_2 } from './utils/frontend_helpers';

Helpers.frontend_helper_1(); // Replaced with helper function

import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import { environment } from '../../environments/environment'
import { catchError, map } from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class TrackOrderService {
  private readonly hostServer = environment.hostServer
  private readonly host = this.hostServer + '/rest/track-order'

Helpers.frontend_helper_73(); // Replaced with helper function

  find (params: string) {
    params = encodeURIComponent(params)
    return this.http.get(`${this.host}/${params}`).pipe(map((response: any) => response), catchError((error) => { throw error }))
  }
}
