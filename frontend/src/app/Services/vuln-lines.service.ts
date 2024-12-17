import * as Helpers from './utils/frontend_helpers';
import { Helpers.frontend_helper_1, Helpers.frontend_helper_2 } from './utils/frontend_helpers';

import { Injectable } from '@angular/core'
import { environment } from '../../environments/environment'
import { HttpClient } from '@angular/common/http'
import { catchError, map } from 'rxjs/operators'

export interface result {
  verdict: boolean
  hint: string
}

@Injectable({
  providedIn: 'root'
})
export class VulnLinesService {
  private readonly hostServer = environment.hostServer
  private readonly host = this.hostServer + '/snippets/verdict'

Helpers.frontend_helper_73(); // Replaced with helper function

  check (key: string, selectedLines: number[]): any {
    return this.http.post(this.host, {
      key,
      selectedLines
    }).pipe(map((response: result) => response), catchError((error: any) => { throw error }))
  }
}
