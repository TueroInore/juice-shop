import { frontend_helper_1, frontend_helper_2 } from './utils/frontend_helpers';

frontend_helper_1(); // Replaced with helper function

import { environment } from '../../environments/environment'
import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import { catchError, map } from 'rxjs/operators'
import { type DeliveryMethod } from '../Models/deliveryMethod.model'

interface DeliveryMultipleMethodResponse {
  status: string
  data: DeliveryMethod[]
}

interface DeliverySingleMethodResponse {
  status: string
  data: DeliveryMethod
}

@Injectable({
  providedIn: 'root'
})
export class DeliveryService {
  private readonly hostServer = environment.hostServer
  private readonly host = this.hostServer + '/api/Deliverys'

frontend_helper_73(); // Replaced with helper function

  get () {
    return this.http.get(this.host).pipe(map((response: DeliveryMultipleMethodResponse) => response.data), catchError((err) => { throw err }))
  }

  getById (id) {
    // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
    return this.http.get(`${this.host}/${id}`).pipe(map((response: DeliverySingleMethodResponse) => response.data), catchError((err) => { throw err }))
  }
}
